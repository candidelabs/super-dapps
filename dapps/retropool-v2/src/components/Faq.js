import { useState } from "react";

import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function FaqBody() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Which Wallets work with this app?</Accordion.Header>
        <Accordion.Body>
          <p>
            Smart wallets like Candide. Regular wallets like MetamMask
            and Rainbow can't do the magic.
          </p>
          <p>
            Candide allows batch transactions. It powers this app one
            click and gasless experience.
          </p>
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What's the app about?</Accordion.Header>
        <Accordion.Body>
          <p>
            Donate your chances of winning to support public goods, and keep
            your deposit. With every dollar you deposit, PoolTogether gives you
            a chance to donate your winnings that resets every day.
          </p>
          <p>
            By delegating your deposit and locking it for a duration of time,
            100% of the prizes you win go directly to retroactive public goods
            funding.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does it work? </Accordion.Header>
        <Accordion.Body>
          <p>
            PoolTogether is a no loss prize protocol with a "delegation"
            feature. It allows a depositor to give their chances to win prizes
            to any other address. When delegating, you maintain full control of
            your funds and can withdraw or take back your chances to win at any
            time.
          </p>
          <p>
            This dapp delegates winnings to Optimism RetroPGF address through a
            series of transactions. Candide Wallet executes all transactions in
            a signle one, and Pooltogether sponsors the gas
          </p>
          <p>
            Interested in the technical details? Checkout the open-source code
            on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/candidelabs/super-dapps/tree/main/dapps/retropool-v2"
            >
              Github
            </a>
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          How can I get FREE transaction fees?
        </Accordion.Header>
        <Accordion.Body>
          Deposit a minimum of 200 USDC & delegate for 14 days to get your gas
          sponsored by PoolTogether! 🏆🌊
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How can I withdraw my USDC?</Accordion.Header>
        <Accordion.Body>
          You can withdraw your funds after your delegation period is over. Head
          over to Pooltogether{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://tools.pooltogether.com/delegate"
          >
            Deposit Delegator Tool
          </a>{" "}
          to change stop delegating your winnings
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>What is Optimism RetroPGF? </Accordion.Header>
        <Accordion.Body>
          Retroactive Public Goods Funding is Optimism’s process for funding
          public goods for the benefit of the Collective and beyond. Learn more{" "}
          <a
            target="_blank"
            href="https://app.optimism.io/retropgf"
            rel="noreferrer"
          >
            here
          </a>{" "}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function FAQ() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="link" onClick={toggleShow}>
        {" "}
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "IMFellEnglishSC-Regular",
          }}
        >
          FAQ
        </h1>
      </Button>
      <Offcanvas
        style={{
          background: "rgba(255, 255, 255, 0.26)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          border: "border: 1px solid rgba(255, 255, 255, 0.3)",
        }}
        show={show}
        onHide={handleClose}
        scroll={true}
        backdrop={false}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h5
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "IMFellEnglishSC-Regular",
              }}
            >
              FAQ
            </h5>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FaqBody />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default FAQ;
