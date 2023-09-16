import React from "react";
import { init, Web3OnboardProvider } from "@web3-onboard/react";

import walletConnectModule from "@web3-onboard/walletconnect";
import ConnectWallet from "./components/ConnectWallet";
import RetroForm from "./components/RetroForm";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Faq from "./components/Faq";
import MainHeader from "./components/MainHeader";
import trophy from "./assets/images/pooltogether-trophy.png";
import Footer from "./components/Footer";

const apiKey = process.env.REACT_APP_WEB3_ONBOARD_KEY;
const infuraKey = process.env.REACT_APP_NFURA_KEY;
const rpcUrl = `https://optimism-mainnet.infura.io/v3/${infuraKey}`;

const wcV2InitOptions = {
  projectId: process.env.REACT_APP_WC_KEY,
  requiredChains: [10],
  additionalRequiredMethods: ["wallet_sendFunctionCallBundle","wallet_getBundleStatus"],
  dappUrl: "http://retropool.app.candidewallet.com",
};

const walletConnect = walletConnectModule(wcV2InitOptions);

const web3Onboard = init({
  theme: "dark",
  apiKey,
  wallets: [walletConnect],
  chains: [
    {
      id: "10",
      token: "ETH",
      label: "Optimism",
      rpcUrl,
    },
  ],
  appMetadata: {
    name: "Retro Pool",
    icon: trophy,
    description: "No loss donation funding public goods",
  },
});

function App() {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          backgroundImage: `url("https://images.unsplash.com/photo-1565472459197-82ba571cc915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1181&q=80")`,
        }}
      >
        <div>
          <Container>
            <Row
              className="justify-content-md-center"
              style={{ marginTop: "7rem" }}
            >
              <Col md="auto">
                <MainHeader />
              </Col>
            </Row>
            <Row
              className="justify-content-md-center"
              style={{ marginTop: "2rem", textAlign: "center" }}
            >
              <Col md="auto">
                <ConnectWallet />
              </Col>
            </Row>
            <Row style={{ marginBottom: "2rem" }}>
              <Col>
                <RetroForm />
              </Col>
            </Row>
            <Row
              className="d-flex justify-content-center"
              style={{ textAlign: "center" }}
            >
              <Col md="auto">
                <Faq />
              </Col>
            </Row>
            <Footer />
          </Container>
        </div>
      </div>
    </Web3OnboardProvider>
  );
}

export default App;
