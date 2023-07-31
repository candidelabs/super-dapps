import Accordion from "react-bootstrap/Accordion";

function Faq() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Dapp in a tweet </Accordion.Header>
        <Accordion.Body>
          Donate your chances of winning to support public goods, and keep your
          deposit. With every dollar you deposit, PoolTogether gives you a
          chance to win that resets every day. By delegating your deposit and
          locking it for a duration of days, 100% of the prizes you win go
          directly to retroactive public goods funding.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does it work? </Accordion.Header>
        <Accordion.Body>
          PoolTogether is a no loss prize protocol with a "delegation" feature.
          It allows a depositor to give their chances to win prizes to any other
          address. When delegating, you maintain full control of your funds and
          can withdraw or take back your chances to win at any time. This dapp
          delegates winnings to Optimism RetroPGF address through a series of
          multiple transactions. Candide Wallet executes all transactions in a
          signle one.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
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
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is Optimism RetroPGF? </Accordion.Header>
        <Accordion.Body>
          Retroactive Public Goods Funding is Optimism’s process for funding
          public goods for the benefit of the Collective and beyond. Learn more{" "}
          <a
            target="_blank"
            href="https://tools.pooltogether.com/delegate"
            rel="noreferrer"
          >
            here
          </a>{" "}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What is Candide Wallet?</Accordion.Header>
        <Accordion.Body>
          Candide Wallet is an open source smart contract wallet that allows
          bundled transactions. It powers this dapp one click and gasless
          experience. Download{" "}
          <a target="_blank" href="https://candidewallet.com" rel="noreferrer">
            here
          </a>{" "}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Faq;
