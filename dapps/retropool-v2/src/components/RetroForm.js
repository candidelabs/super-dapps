import React, { useEffect, useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import { CustomMenu, CustomToggle } from "../components/DropdownList";

import { useConnectWallet } from "@web3-onboard/react";
import ERC20Abi from "../abis/ERC20Abi";
import { USDCTokenAddress } from "../helpers/consts";
import ModalConfirmTx from "./ModalConfirmTx";
import prizeImage from "../assets/images/prize_icon.png";
import retroPoolScreen from "../assets/images/retro_pool_screen.png";
import rpgfData from "../data/RPGFProjectMetadata.json";

function RetroForm() {
  const [ethersProvider, setProvider] = useState();
  const [{ wallet }] = useConnectWallet();

  const [txReceipt, setTxReceipt] = useState({ status: "", hash: "" });

  const updateTxReceipt = (tx) => {
    setTxReceipt(tx);
  };

  useEffect(() => {
    // If the wallet has a provider then the wallet is connected
    if (wallet?.provider) {
      setProvider(new BrowserProvider(wallet.provider, 10));
    }

    const pairing = localStorage.getItem("wc@2:core:0.3//pairing");
    if (pairing) {
      const pairignParsed = JSON.parse(pairing);

      const wallets = [];

      pairignParsed.forEach((p) => {
        if (p.hasOwnProperty("peerMetadata")) {
          wallets.push(p);
        }
      });

      if (wallets[0].peerMetadata.name === "CANDIDE Wallet") {
        setIsSmartContract(true);
      }
    }
  }, [wallet]);

  const USDCContract = new Contract(USDCTokenAddress, ERC20Abi, ethersProvider);

  const [modalShow, setModalShow] = useState(false);
  const [rangeValue, setRangeValue] = useState(90);
  const [amount, setAmount] = useState(0);
  const [userUSDCBalance, setUserUSDCBalance] = useState(0);
  const [selectedItem, setSelectedItem] = useState({
    name: "Recipient",
    address: "0x",
    keyevent: "0",
    handle: "",
  });
  const [submittedValue, setSubmittedValue] = useState({
    amount,
    days: rangeValue,
    receipient: selectedItem,
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
      rangeValue !== submittedValue.days ||
      selectedItem !== submittedValue.receipient
    ) {
      setSubmittedValue({
        amount,
        days: rangeValue,
        receipient: selectedItem,
      });
    }
  };

  // check if account is smart contract wallet
  const [isSmartContract, setIsSmartContract] = useState(false);

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
    } else if (selectedItem.keyevent === "0") {
      return { disabledButton: true, value: "Select a Recipient" };
    } else {
      return { disabledButton: false, value: "Fund Public Goods" };
    }
  };

  useEffect(() => {
    if (ethersProvider && wallet) {
      getUserBalanceUSDC();
    }
  }, [ethersProvider, wallet]);

  const handleSelect = (eventKey) => {
    // Find the selected item based on the eventKey
    const selected = rpgfData.find(
      (item) => item.keyevent === Number(eventKey)
    );
    setSelectedItem(selected);
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

                <Form.Group className="mb-3">
                  <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle
                      as={CustomToggle}
                      id="dropdown-custom-components"
                    >
                      {selectedItem.name}
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu}>
                      {rpgfData.map((item, index) => (
                        <Dropdown.Item
                          key={index}
                          eventKey={item.keyevent}
                          active={item.active}
                        >
                          {item.name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form.Text className="text-muted">
                    Your winnings are directly sent to the orginisation of your
                    choice
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
                        This dapp won't work with your EOA wallet (metamask,
                        rainbow, etc..), since these wallets don't support
                        batching, or one click transactions.
                      </p>
                      <p>
                        Get a smart wallet, you won't regret. Even Vitalik has
                        one.
                      </p>
                      <p>
                        Plus, your transaction fees are FREE when you use this
                        dapp*.
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
