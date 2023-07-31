import React from 'react';
import { useConnectWallet } from "@web3-onboard/react";

const MainHeader = () => {
  const [{ wallet }] = useConnectWallet();

  if (!wallet?.provider) {
    return (
      <>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "IMFellEnglishSC-Regular",
          }}
        >
          RetroActive Public Goods Pooling
        </h1>
        <h3
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "IMFellEnglishSC-Regular",
          }}
        >
          No Loss Donation to Fund Public Goods
        </h3>
      </>
    );
  } else {
    return null;
  }
};

export default MainHeader;