import React, { useEffect, useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useConnectWallet } from "@web3-onboard/react";
import ERC20Abi from "../abis/ERC20Abi";
import { USDCTokenAddress, optiRetroPGFAddress } from "../helpers/consts";
import { isSmartContract as checkIfIsSmartContract } from "../helpers/utilities";
import ModalConfirmTx from "./ModalConfirmTx";
import prizeImage from "../assets/images/prize_icon.png";
import retroPoolScreen from "../assets/images/retro_pool_screen.png";

function RetroForm() {
  const [ethersProvider, setProvider] = useState();
  const [{ wallet }] = useConnectWallet();

  const [txReceipt, setTxReceipt] = useState("");

  const updateTxReceipt = (tx) => {
    setTxReceipt(tx);
  };

  useEffect(() => {
    // If the wallet has a provider than the wallet is connected
    if (wallet?.provider) {
      setProvider(new BrowserProvider(wallet.provider, 10));
    }
  }, [wallet]);

  useEffect(() => {
    if (ethersProvider && wallet && wallet.provider) {
      checkIsSmartContract();
      getUserBalanceUSDC();
    }
  }, [ethersProvider, wallet]);

  const USDCContract = new Contract(USDCTokenAddress, ERC20Abi, ethersProvider);

  const [modalShow, setModalShow] = useState(false);
  const [rangeValue, setRangeValue] = useState(90);
  const [amount, setAmount] = useState(0);
  const [userUSDCBalance, setUserUSDCBalance] = useState(0);
  const [submittedValue, setSubmittedValue] = useState({
    amount,
    days: rangeValue,
  });

  const handleRangeChange = (e) => {
    setRangeValue(parseInt(e.target.value, 10));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTxReceipt("");
    setModalShow(true);
    if (
      amount !== submittedValue.amount ||
      rangeValue !== submittedValue.days
    ) {
      setSubmittedValue({ amount, days: rangeValue });
    }
  };

  // check if account is smart contract wallet
  const [isSmartContract, setIsSmartContract] = useState(false);
  const checkIsSmartContract = async () => {
    const code = await checkIfIsSmartContract(
      wallet.accounts[0].address,
      ethersProvider
    );

    setIsSmartContract(code);
  };

  // get user Balance USDC
  const getUserBalanceUSDC = async () => {
    try {
      const balance = await USDCContract.balanceOf(wallet.accounts[0].address);

      //USDC contract has 6 decimals
      setUserUSDCBalance(Number(balance) / 10 ** 6);
    } catch (error) {
      console.error(error);
    }
  };

  const getButtonLabel = () => {
    if (Number(amount) === 0) {
      return { disabledButton: true, value: "Enter Amount" };
    } else if (amount > userUSDCBalance) {
      return { disabledButton: true, value: "Insufficient balance" };
    } else {
      return { disabledButton: false, value: "Fund Public Goods" };
    }
  };

  if (wallet?.provider) {
    return (
      <Card
        style={{
          background: "rgba(255, 255, 255, 0.26)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          border: "border: 1px solid rgba(255, 255, 255, 0.3)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isSmartContract ? (
          <>
            <Card.Img
              variant="top"
              src={prizeImage}
              style={{
                width: "150px",
              }}
            />
            <Card.Body>
              <Card.Title>
                <h1
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: "IMFellEnglishSC-Regular",
                  }}
                >
                  Pool For Public Goods
                </h1>
              </Card.Title>
              <Card.Text>
                <p
                  style={{
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Your wins goes to Optimism RetroPGF.eth address:{" "}
                  <a
                    rel="noreferrer"
                    href={`https://optimistic.etherscan.io/address/${optiRetroPGFAddress}`}
                    target="_blank"
                  >
                    0x15D..🔗
                  </a>
                </p>
              </Card.Text>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="decimal"
                    placeholder="500"
                    min="0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    Enter Amount in USDC
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Days: {rangeValue}</Form.Label>
                  <Form.Range
                    min={0}
                    max={180}
                    value={rangeValue}
                    onChange={handleRangeChange}
                  />
                  <Form.Text className="text-muted">
                    Lock your delegated deposit for a few days and withdraw
                    anytime
                  </Form.Text>
                </Form.Group>

                <button
                  type="submit"
                  disabled={getButtonLabel().disabledButton}
                  className={`renaissance-button ${
                    getButtonLabel().disabledButton ? "disabled-button" : ""
                  }`}
                >
                  {getButtonLabel().value}
                </button>

                <ModalConfirmTx
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  submittedValue={submittedValue}
                  updateTxReceipt={updateTxReceipt}
                  txReceipt={txReceipt}
                />
              </Form>
            </Card.Body>
          </>
        ) : (
          <>
            <Row>
              <Col xs={12} md={8}>
                <Card.Body>
                  <Card.Title className="mb-4">
                    <h1
                      style={{
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      Time to update your wallet
                    </h1>
                  </Card.Title>
                  <Card.Text className="mb-4">
                    <Alert key="warning" variant="warning">
                      <p>
                        This dapp won't work with your EOA wallet (metamask
                        type), since these wallets don't support batching, or
                        one click transactions.
                      </p>
                      <p>
                        Get a smart contract wallet, you won't regret. Even
                        Vitalik has one.
                      </p>
                      <p>
                        Plus, your transaction fees are FREE when you use this
                        dapp.
                      </p>
                      <hr />
                      <Button type="button" variant="primary">
                        <a
                          style={{
                            color: "white",
                            textDecoration: "none",
                          }}
                          target="_blank"
                          rel="noreferrer"
                          href="https://candidewallet.com"
                        >
                          Get Candide Wallet
                        </a>
                      </Button>
                    </Alert>
                  </Card.Text>
                </Card.Body>
              </Col>
              <Col>
                <Card.Img
                  variant="bottom"
                  src={retroPoolScreen}
                  style={{
                    width: "250px",
                  }}
                  className="desktop-image"
                />
              </Col>
            </Row>
          </>
        )}
      </Card>
    );
  }

  return null;
}

export default RetroForm;
