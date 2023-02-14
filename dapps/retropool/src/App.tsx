import * as React from "react";
import styled from "styled-components";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { IInternalEvent } from "@walletconnect/types";
import Column from "./components/Column";
import Wrapper from "./components/Wrapper";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Loader from "./components/Loader";
import { isSmartContract } from "./helpers/utilities";
import Banner from "./components/Banner";
import { ethers } from "ethers";
import prizePoolAbi from './abis/prizePoolAbi';
import ERC20Abi from "./abis/ERC20Abi";
import TWABDelegatorContractAbi from "./abis/TWABDelegatorContractAbi";
import ticketContractAbi from "./abis/ticketContractAbi";
import { SUPPORTED_CHAINS } from "./helpers/chains";
import pooltogetherLogoPurple from "./assets/pooltogether-logo--purple-gradient.svg";
import optimismLogo from "./assets/optimism-logo.svg";
import candideLogo from "./assets/candide-logo-watermark.svg";

import {
  USDCTokenAddress,
  prizePoolAddress,
  ticketContractAddress,
  TWABDelegatorContractAddress,
  optiRetroPGFAddress
} from "../src/consts";

import "./index.css"

const SLayout = styled.div`
  position: relative;
  width: 100%;
  /* height: 100%; */
  min-height: 100vh;
  text-align: start;
`;

const SContent = styled(Wrapper as any)`
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;

const SLanding = styled(Column as any)`
  height: 600px;
`;

const SButtonContainer = styled(Column as any)`
  width: 250px;
  margin: 50px 0;
`;

const SContainer = styled.div`
  height: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-word;
`;

const SModalContainer = styled.div`
  width: 100%;
  position: relative;
  word-wrap: break-word;
  text-align: left;
`;

const SModalTitle = styled.div`
  margin: 1em 0;
  font-size: 20px;
  font-weight: 700;
`;

const SModalParagraph = styled.p`
  margin: 10px 0 20px 0;
  font-size= 10px;
`;

// @ts-ignore
const SBalances = styled(SLanding as any)`
  height: 100%;
  max-width: 100%;
`;

const STable = styled(SContainer as any)`
  flex-direction: column;
  text-align: left;
`;

const SRow = styled.div`
  width: 100%;
  display: flex;
  margin: 6px 0;
`;

const SKey = styled.div`
  width: 100%;
  font-weight: 700;
`;

const SValue = styled.div`
  width: 100%;
  font-family: monospace;
`;

const STestButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px;
`;

interface IAppState {
  connector: WalletConnect | null;
  fetching: boolean;
  connected: boolean;
  chainId: number;
  showModal: boolean;
  pendingRequest: boolean;
  uri: string;
  accounts: string[];
  address: string;
  result: any | null;
  assets: number;
  depositAmount: number;
  isContractAddress: boolean;
  showConfirmationModal: boolean;
  delegationPeriodInDays: number;
}

const goerliEthereum = SUPPORTED_CHAINS[0];
const goerliChainId = goerliEthereum.chain_id;

const INITIAL_STATE: IAppState = {
  connector: null,
  fetching: false,
  connected: false,
  chainId: goerliChainId,
  showModal: false,
  pendingRequest: false,
  uri: "",
  accounts: [],
  address: "",
  result: null,
  assets: 0,
  depositAmount: 0,
  isContractAddress: false,
  showConfirmationModal: false,
  delegationPeriodInDays: 0,
};

const goerliProvider = new ethers.providers.JsonRpcProvider(goerliEthereum.rpc_url);

const USDCContract = new ethers.Contract(
  USDCTokenAddress,
  ERC20Abi,
  goerliProvider,
);
const prizePoolContract = new ethers.Contract(
  prizePoolAddress,
  prizePoolAbi,
  goerliProvider,
);
const ticketContract = new ethers.Contract(
  ticketContractAddress,
  ticketContractAbi,
  goerliProvider,
);
const TWABDelegatorContract = new ethers.Contract(
  TWABDelegatorContractAddress,
  TWABDelegatorContractAbi[0].abi,
  goerliProvider,
);

class App extends React.Component<any, any> {
  public state: IAppState = {
    ...INITIAL_STATE,
  };

  public handleChange = (event: any) => {
    this.setState({
      depositAmount: event.target.value,
    });
  }

  public handleChangeDelegationPeriod = (event: any) => {
    this.setState({
      delegationPeriodInDays: event.target.value,
    });
  }

  public handleConfirmModal = () => {
    this.toggleModal();
    this.setState({ showConfirmationModal: true });
  }

  public connect = async () => {
    // bridge url
    const bridge = "https://bridge.walletconnect.org";

    // create new connector
    const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });

    await this.setState({ connector });

    // check if already connected
    if (!connector.connected) {
      // create new session
      await connector.createSession({ chainId: goerliChainId });
    }

    // subscribe to events
    await this.subscribeToEvents();
  };
  public subscribeToEvents = () => {
    const { connector } = this.state;

    if (!connector) {
      return;
    }

    connector.on("session_update", async (error, payload) => {
      console.log(`connector.on("session_update")`);

      if (error) {
        throw error;
      }

      const { chainId, accounts } = payload.params[0];
      this.onSessionUpdate(accounts, Number(chainId));
    });

    connector.on("connect", (error, payload) => {
      console.log(`connector.on("connect")`);

      if (error) {
        throw error;
      }

      this.onConnect(payload);
    });

    connector.on("disconnect", (error, payload) => {
      console.log(`connector.on("disconnect")`);

      if (error) {
        throw error;
      }

      this.onDisconnect();
    });

    if (connector.connected) {
      const { chainId, accounts } = connector;
      const address = accounts[0];
      this.setState({
        connected: true,
        chainId,
        accounts,
        address,
      });
      this.onSessionUpdate(accounts, chainId);
    }

    this.setState({ connector });
  };

  public killSession = async () => {
    const { connector } = this.state;
    if (connector) {
      connector.killSession();
    }
    this.resetApp();
  };

  public resetApp = async () => {
    await this.setState({ ...INITIAL_STATE });
  };

  public onConnect = async (payload: IInternalEvent) => {

    const { chainId, accounts } = payload.params[0];

    const address = accounts[0];
    const isContractAddress = await isSmartContract(address, goerliProvider);

    await this.setState({
      connected: true,
      chainId,
      accounts,
      address,
      isContractAddress,
    });
    this.getAccountAssets();
  };

  public onDisconnect = async () => {
    this.resetApp();
  };

  public onSessionUpdate = async (accounts: string[], chainId: number) => {
    const address = accounts[0];
    const isContractAddress = await isSmartContract(address, goerliProvider);
    this.setState({ chainId, accounts, address, isContractAddress });
    await this.getAccountAssets();
  };

  public getAccountAssets = async () => {
    const { address } = this.state;
    this.setState({ fetching: true });
    try {
      // get USDC balances
      const USDCBalance = await USDCContract.balanceOf(address);

      await this.setState({ fetching: false, address, assets: ethers.utils.formatUnits(USDCBalance, 6) });
    } catch (error) {
      console.error(error);
      await this.setState({ fetching: false });
    }
  };

  public toggleModal = () => this.setState({ showModal: !this.state.showModal });

  public actionButton = () => {
    const { depositAmount, assets, chainId, connector, isContractAddress } = this.state;

    if (!isContractAddress) {
      return (
        <div>
          <button
            className="button-56"
            style={{ marginBottom: "10px" }}
            disabled>
            Incompatible Wallet
            {<div className="tool-tip">
              <i className="tool-tip__icon">i</i>
              <p className="tool-tip__info">
                <span className="info">
                  This app works with compatibale smart contract wallets like
                  {' '}
                  <span className="info__title">
                    CANDIDE
                  </span>
                  {' '}
                  that allows for bundled transcations
                </span>
              </p>
            </div>}
          </button>
          <a
            href='https://candidewallet.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            🐪 Get CANDIDE Wallet 🔗
          </a>
        </div>
      )
    } else if (chainId !== goerliChainId && connector) {
      return (
        <button
          className="button-56"
          onClick={() => connector.sendCustomRequest({
            "id": 1,
            "jsonrpc": "2.0",
            "method": "wallet_switchEthereumChain",
            "params": [{ chainId: goerliChainId }],
          })}>
          Connect to Goerli
        </button>
      )
    } else if (chainId === goerliChainId && depositAmount > assets && connector) {
      return (
        <button
          disabled
          className="button-56">
          Insufficient Balance
        </button>
      )
    } else {
      return (
        <button
          className="button-56"
          onClick={this.handleConfirmModal}
          disabled={depositAmount <= 0 || !isSmartContract}>
          Deposit & Delegate
        </button>
      )
    }
  }

  public sendBundleTransaction = async () => {
    const { connector, address, chainId, depositAmount, delegationPeriodInDays } = this.state;

    if (!connector) {
      return;
    }
    const amountToDepositAndDelegate = depositAmount * 1000000;

    try {
      // toggle pending request indicator and close showConfirmation Modal
      this.setState({
        pendingRequest: true,
        showConfirmationModal: false
      });

      // get call data for each function
      const callDataApprove = await USDCContract.interface.encodeFunctionData(
        "approve", [prizePoolAddress, amountToDepositAndDelegate]
      );

      const callDataDeposit = await prizePoolContract.interface.encodeFunctionData(
        "depositTo",
        [address, amountToDepositAndDelegate],
      );

      const callDataApproveTicketContract = await ticketContract.interface.encodeFunctionData(
        "approve", [TWABDelegatorContractAddress, amountToDepositAndDelegate],
      );

      const callDataStakeTicket = await TWABDelegatorContract.interface.encodeFunctionData(
        "stake", [address, amountToDepositAndDelegate],
      );

      // get next empty slot to delegate
      let slotIndex = 0;
      const lockDuration = delegationPeriodInDays * 60 * 60 * 24;
      let isCreated = true;
      while (isCreated) {
        const response = await TWABDelegatorContract.getDelegation(address, slotIndex);

        if (!response.wasCreated) {
          isCreated = response.wasCreated;
        } else {
          slotIndex++;
        }
      }

      const callDataCreateDelegationTickets = await TWABDelegatorContract.interface.encodeFunctionData(
        "createDelegation", [address, slotIndex, optiRetroPGFAddress, lockDuration],
      );

      const callDataFundDelegation = await TWABDelegatorContract.interface.encodeFunctionData(
        "fundDelegationFromStake", [address, slotIndex, amountToDepositAndDelegate],
      );

      // construct bundle call request
      const customRequest = {
        "method": "wallet_sendFunctionCallBundle",
        "params": [
          {
            "chainId": chainId,
            "from": address,
            "calls": [
              {
                "to": USDCTokenAddress,
                "gas": "0x6590",
                "value": "0x0",
                "data": callDataApprove
              },
              {
                "to": prizePoolAddress,
                "gas": "0x6F540",
                "value": "0x0",
                "data": callDataDeposit
              },
              {
                "to": ticketContractAddress,
                "gas": "0x6590",
                "value": "0x0",
                "data": callDataApproveTicketContract
              },
              {
                "to": TWABDelegatorContractAddress,
                "gas": "0x186A0",
                "value": "0x0",
                "data": callDataStakeTicket
              },
              {
                "to": TWABDelegatorContractAddress,
                "gas": "0x1E848",
                "value": "0x0",
                "data": callDataCreateDelegationTickets
              },
              {
                "to": TWABDelegatorContractAddress,
                "gas": "0xA8C0",
                "value": "0x0",
                "data": callDataFundDelegation
              }
            ]
          }
        ]
      }
      // send transaction
      const result = await connector.sendCustomRequest(customRequest);

      // format displayed result
      const formattedResult = {
        txHash: result,
      };

      // display result
      this.setState({
        connector,
        pendingRequest: false,
        result: formattedResult || null,
      });
    } catch (error) {
      this.setState({ connector, pendingRequest: false, result: null });
    }
  };

  public render = () => {
    const {
      // assets,
      address,
      connected,
      chainId,
      showModal,
      pendingRequest,
      result,
      depositAmount,
      showConfirmationModal,
      delegationPeriodInDays,
    } = this.state;

    const ExplainerCard = () => {
      return (
        <div className="module-border-wrap">
          <h4>How it works</h4>
          <p>
            Donate your chances of winning to support public goods, and keep your deposit. With every dollar you deposit, PoolTogether gives you a chance to win that resets every day.
            By delegating your deposit and locking it for a duration of days, 100% of the prizes you win go directly to retroactive public goods funding.
          </p>
          <br />
          <p>
            <a
              href='https://docs.pooltogether.com/welcome/faq'
              target='_blank'
              rel='noreferrer noopener'
            >
              PoolTogether
            </a>{' '}
            is a no loss prize protocol with a "delegation" feature. It allows a depositor to give their chances to win prizes to any other address. When
            delegating you maintain full control of your funds and can withdraw or take back your
            chances to win at any time.
          </p>
          <br />
          <p>
            Optimism RetroPGF, or
            {' '}
            <a
              href='https://app.optimism.io/retropgf'
              target='_blank'
              rel='noreferrer noopener'
            >
              Retroactive Public Goods Funding
            </a>
            {' '}
            is Optimism’s process for funding public goods for the benefit of the Collective and beyond.
          </p>
          <br />
          <p>
            <a
              href='https://candidewallet.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              CANDIDE
            </a>
            {' '}
            is an open source smart contract wallet that allows bundled transactions. It powers this dapp one click and gasless experience.
          </p>
        </div>
      )
    };

    return (
      <SLayout>
        <Column maxWidth={1600} spanHeight>
          <Header
            connected={connected}
            address={address}
            chainId={chainId}
            killSession={this.killSession}
          />
          <SContent>
            {!address ? (
              <div>
                <SLanding>
                  <h1 style={{ textAlign: "center" }}>
                    Retroactive Public Goods Pooling
                    <br />
                  </h1>
                  <h5 style={{ textAlign: "center" }}>
                    No Loss Donation to power impactful software
                  </h5>
                  <SButtonContainer>
                    <button
                      onClick={this.connect}
                      className="button-53">
                      {"Connect"}
                      {' '}
                      {"CANDIDE"}
                    </button>
                  </SButtonContainer>
                  <a
                    href='https://candidewallet.com'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    🐪 Get CANDIDE Wallet here 🔗
                  </a>
                </SLanding>
                <div style={{ marginTop: "100px" }}>
                  <img src={candideLogo}
                    style={{
                      width: "300px",
                      margin: "40px",
                    }} />
                  <img src={pooltogetherLogoPurple}
                    style={{
                      width: "200px",
                      margin: "40px",
                    }} />
                  <img src={optimismLogo}
                    style={{
                      width: "300px",
                      margin: "40px",
                    }} />
                </div>
              </div>
            ) : (
              <SBalances>
                <Column margin="-40px auto 30px auto">
                  <Banner />
                  <h3>Pool for Public Goods 🌊</h3>
                  <p>
                    Optimism RetroPGF.eth address: {' '}
                    <a
                      href={`https://optimistic.etherscan.io/address/${optiRetroPGFAddress}`}
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      0x15D..🔗
                    </a>
                  </p>
                  <STestButtonContainer >
                    <input
                      className="button-53"
                      placeholder="0.0"
                      min="0"
                      type="number"
                      value={depositAmount}
                      onChange={this.handleChange} />
                    <h2 style={{ margin: "15px" }}>
                      USDC
                    </h2>
                  </STestButtonContainer>
                  👇🏾
                  <STestButtonContainer >
                    <input
                      className="button-53"
                      placeholder="0.0"
                      min="0"
                      type="number"
                      value={delegationPeriodInDays}
                      onChange={this.handleChangeDelegationPeriod} />
                    <h2 style={{ margin: "15px" }}>
                      Days
                    </h2>
                  </STestButtonContainer>
                  <STestButtonContainer>
                    {this.actionButton()}
                  </STestButtonContainer>
                </Column>
                <ExplainerCard />
              </SBalances>
            )}
          </SContent>
        </Column>
        <Modal show={showModal} toggleModal={this.toggleModal}>
          {showConfirmationModal ? (
            <SModalContainer>
              <SModalTitle>{"Confirm your deposit & delegation"}</SModalTitle>
              <STable>
                <SRow>
                  <SKey>Deposit Amount</SKey>
                  <SValue>{depositAmount} USDC</SValue>
                </SRow>
                <SRow>
                  <SKey>Delegation Period</SKey>
                  <SValue>{delegationPeriodInDays} days</SValue>
                </SRow>
                <SRow>
                  <SKey>Delegatee</SKey>
                  <SValue>
                    <a
                      href={`https://optimistic.etherscan.io/address/${optiRetroPGFAddress}`}
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      0x15D..🔗
                    </a>
                  </SValue>
                </SRow>
              </STable>
              <SModalParagraph>
                Deposit a minimum of 200 USDC & lock your delegation for 14 days to get your gas sponsored by PoolTogether! 🏆🌊
              </SModalParagraph>
              <STestButtonContainer>
                <button
                  className="button-56"
                  onClick={this.sendBundleTransaction}
                  disabled={depositAmount <= 0 || !isSmartContract}>
                  Confirm
                </button>
              </STestButtonContainer>
            </SModalContainer>
          ) : pendingRequest ? (
            <SModalContainer>
              <SModalTitle>{"Pending Call Request"}</SModalTitle>
              <SContainer>
                <Loader />
                <SModalParagraph>{"Approve or reject request using your wallet"}</SModalParagraph>
              </SContainer>
            </SModalContainer>
          ) : result ? (
            <SModalContainer>
              <SModalTitle>{"Call Request Approved"}</SModalTitle>
              <STable>
                {Object.keys(result).map(key => (
                  <SRow key={key}>
                    <SKey>{key}</SKey>
                    <SValue>
                      <a
                        href={`https://goerli.etherscan.io/tx/${result[key].toString()}`}
                        target='_blank'
                        rel='noreferrer noopener'
                      >
                        {result[key].toString()}
                      </a>
                    </SValue>
                  </SRow>
                ))}
              </STable>
            </SModalContainer>
          ) : (
            <SModalContainer>
              <SModalTitle>{"Call Request Rejected"}</SModalTitle>
            </SModalContainer>
          )}
        </Modal>
      </SLayout >
    );
  };
}

export default App;
