import React from "react";
import Modal from "react-bootstrap/Modal";
import RetroButton from "./RetroButton";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

import trophhyImage from "../assets/images/pooltogether-trophy.png";
import sadFace from "../assets/images/sad_face.jpg";

function ModalConfirmTx({
  show,
  onHide,
  submittedValue,
  txReceipt,
  updateTxReceipt,
}) {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        keyboard={false}
        centered
        dialogClassName="my-modal"
      >
        {txReceipt.status === 1 ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title
                style={{
                  textAlign: "center",
                  color: "#FFB636",
                }}
              >
                Transaction Confirmed ✔️
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Stack
                gap={2}
                styles={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  variant="top"
                  src={trophhyImage}
                  style={{
                    textAlign: "center", // Center horizontally
                    margin: "auto", // Center vertically
                    width: "120px",
                  }}
                />
                <h5
                  style={{
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  Your No Loss Donation helped fund Public Goods
                </h5>
              </Stack>
            </Modal.Body>
            <Modal.Footer
              className="d-flex justify-content-center"
              style={{
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              You can follow your transaction on the
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://optimistic.etherscan.io/tx/${txReceipt.hash}`}
              >
                block explorer
              </a>
            </Modal.Footer>
          </>
        ) : txReceipt.status === 0 ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title
                style={{
                  textAlign: "center",
                  color: "#FFB636",
                }}
              >
                Transaction Failed
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Stack
                gap={2}
                styles={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  variant="top"
                  src={sadFace}
                  style={{
                    textAlign: "center", // Center horizontally
                    margin: "auto", // Center vertically
                    width: "250px",
                  }}
                />
                <p
                  style={{
                    textAlign: "center",
                    color: "#FFFFFF",
                  }}
                >
                  Something went wrong. Send us feedback on{" "}
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={`https://twitter.com/candidewallet`}
                  >
                    twitter
                  </a>{" "}
                  so we can check what went wrong
                </p>
              </Stack>
            </Modal.Body>
            <Modal.Footer
              className="d-flex justify-content-center"
              style={{
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              You can check the status of your transaction on the
              <a
                rel="noreferrer"
                target="_blank"
                href={`https://optimistic.etherscan.io/tx/${txReceipt.hash}`}
              >
                block explorer
              </a>
            </Modal.Footer>
          </>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title
                style={{
                  color: "#ffffff",
                }}
              >
                Review Transaction
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col
                  style={{
                    color: "#999997",
                  }}
                >
                  You deposit
                </Col>
              </Row>
              <Row style={{ marginBottom: "25px" }}>
                <Col
                  style={{
                    color: "#ffffff",
                  }}
                >
                  <h3>{submittedValue.amount} USDC</h3>
                </Col>
                <Col>
                  <Image src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/usdc.svg"></Image>
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    color: "#999997",
                  }}
                >
                  Delegation Period
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    color: "#ffffff",
                  }}
                >
                  <h3>{submittedValue.days} Days</h3>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <Row>
                <Col>
                  {submittedValue.amount < 200 || submittedValue.amount < 14 ? (
                    <Alert key="warning" variant="warning">
                      Deposit a minimum of 200 USDC & delegate for 14 days to
                      get your gas sponsored by PoolTogether! 🏆🌊
                    </Alert>
                  ) : (
                    <Alert key="success" variant="success">
                      Your transaction fees are sponsored by PoolTogether 🏆🌊
                    </Alert>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <RetroButton
                    submittedValue={submittedValue}
                    updateTxReceipt={updateTxReceipt}
                  />
                </Col>
              </Row>
            </Modal.Footer>
          </>
        )}
        ;
      </Modal>
    </>
  );
}

export default ModalConfirmTx;
