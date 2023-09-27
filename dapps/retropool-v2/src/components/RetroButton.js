import { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Contract, BrowserProvider } from "ethers";

import {
  USDCTokenAddress,
  prizePoolAddress,
  ticketContractAddress,
  TWABDelegatorContractAddress,
} from "../helpers/consts";
import ERC20Abi from "../abis/ERC20Abi";
import prizePoolAbi from "../abis/prizePoolAbi";
import ticketContractAbi from "../abis/ticketContractAbi";
import TWABDelegatorContractAbi from "../abis/TWABDelegatorContractAbi";
import { useConnectWallet } from "@web3-onboard/react";

export default function RetroButton({ submittedValue, updateTxReceipt }) {
  const [ethersProvider, setProvider] = useState();
  const [{ wallet }] = useConnectWallet();

  useEffect(() => {
    if (wallet?.provider) {
      setProvider(new BrowserProvider(wallet.provider, 10));
    }
  }, [wallet]);

  const [loading, setLoading] = useState(false);

  const sendBundleTransaction = async () => {
    const address = wallet.accounts[0].address;
    const chainId = 10;
    const depositAmount = submittedValue.amount * 1000000;
    const delegationPeriodInDays = submittedValue.days;
    const receipientAddress = submittedValue.receipient.address;

    if (!ethersProvider) {
      return;
    }

    try {
      setLoading(true);
      const USDCContract = new Contract(
        USDCTokenAddress,
        ERC20Abi,
        ethersProvider
      );

      const prizePoolContract = new Contract(
        prizePoolAddress,
        prizePoolAbi,
        ethersProvider
      );
      const ticketContract = new Contract(
        ticketContractAddress,
        ticketContractAbi,
        ethersProvider
      );
      const TWABDelegatorContract = new Contract(
        TWABDelegatorContractAddress,
        TWABDelegatorContractAbi[0].abi,
        ethersProvider
      );

      // get call data for each function
      const callDataApprove = await USDCContract.interface.encodeFunctionData(
        "approve",
        [prizePoolAddress, depositAmount]
      );

      const callDataDeposit =
        await prizePoolContract.interface.encodeFunctionData("depositTo", [
          address,
          depositAmount,
        ]);

      const callDataApproveTicketContract =
        await ticketContract.interface.encodeFunctionData("approve", [
          TWABDelegatorContractAddress,
          depositAmount,
        ]);

      const callDataStakeTicket =
        await TWABDelegatorContract.interface.encodeFunctionData("stake", [
          address,
          depositAmount,
        ]);

      // get next empty slot to delegate
      let slotIndex = 0;
      const lockDuration = delegationPeriodInDays * 60 * 60 * 24;
      let isCreated = true;
      while (isCreated) {
        const response = await TWABDelegatorContract.getDelegation(
          address,
          slotIndex
        );

        if (!response.wasCreated) {
          isCreated = response.wasCreated;
        } else {
          slotIndex++;
        }
      }

      const callDataCreateDelegationTickets =
        await TWABDelegatorContract.interface.encodeFunctionData(
          "createDelegation",
          [address, slotIndex, receipientAddress, lockDuration]
        );

      const callDataFundDelegation =
        await TWABDelegatorContract.interface.encodeFunctionData(
          "fundDelegationFromStake",
          [address, slotIndex, depositAmount]
        );

      // construct bundle call request
      const customRequest = {
        method: "wallet_sendFunctionCallBundle",
        params: [
          {
            chainId: chainId,
            from: address,
            calls: [
              {
                to: USDCTokenAddress,
                gas: "0x6590",
                value: "0x0",
                data: callDataApprove,
              },
              {
                to: prizePoolAddress,
                gas: "0x6F540",
                value: "0x0",
                data: callDataDeposit,
              },
              {
                to: ticketContractAddress,
                gas: "0x6590",
                value: "0x0",
                data: callDataApproveTicketContract,
              },
              {
                to: TWABDelegatorContractAddress,
                gas: "0x186A0",
                value: "0x0",
                data: callDataStakeTicket,
              },
              {
                to: TWABDelegatorContractAddress,
                gas: "0x1E848",
                value: "0x0",
                data: callDataCreateDelegationTickets,
              },
              {
                to: TWABDelegatorContractAddress,
                gas: "0xA8C0",
                value: "0x0",
                data: callDataFundDelegation,
              },
            ],
          },
        ],
      };
      // send transaction
      const userOpHash = await wallet.provider.request(customRequest);

      // const transaction = await ethersProvider.getTransaction(txHash);
      while (true) {
        if (userOpHash) {
          const receipt = await wallet.provider.request({
            method: "wallet_getBundleStatus",
            params: [userOpHash],
          });
          if (receipt) {
            const response = JSON.parse(receipt);
            if (response.calls[0].status === "CONFIRMED") {
              updateTxReceipt({
                status: response.calls[0].status,
                hash: userOpHash,
              });
              break;
            } else if (response.calls[0].status === "PENDING") {
              await new Promise((resolve) => setTimeout(resolve, 5000));
            } else if (response.calls[0].status === "FAILED") {
              updateTxReceipt({
                status: response.calls[0].status,
                hash: userOpHash,
              });
              break;
            }
          } else {
            // Transaction is still pending
            await new Promise((resolve) => setTimeout(resolve, 5000));
          }
        } else {
          // Transaction is still pending
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={sendBundleTransaction}
        disabled={loading}
        type="button"
        className="btn-lg btn-pill"
      >
        {loading ? (
          <Spinner animation="border" size="sm" />
        ) : (
          "Confirm no loss donation"
        )}
      </Button>
    </>
  );
}
