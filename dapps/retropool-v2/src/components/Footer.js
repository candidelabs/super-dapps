import { useConnectWallet } from "@web3-onboard/react";
import Image from "react-bootstrap/Image";

import optimismLogo from "../assets/images/optimism_white.svg";
import candideLogo from "../assets/images/candide_white.svg";
import pooltogetherLogoPurple from "../assets/images/pool_together_white.svg";

const Footer = () => {
  const [{ wallet }] = useConnectWallet();

  if (!wallet?.provider) {
    return (
      <div
        className="d-flex justify-content-center flex-wrap"
        style={{
          position: "absolute",
          bottom: "20px",
          left: 0,
          right: 0,
        }}
      >
        <Image
          src={candideLogo}
          style={{
            width: "300px",
            margin: "40px",
          }}
        ></Image>
        <Image
          src={pooltogetherLogoPurple}
          style={{
            width: "200px",
            margin: "40px",
          }}
        />
        <Image
          src={optimismLogo}
          style={{
            width: "300px",
            margin: "40px",
          }}
        />
      </div>
    );
  }
  return null;
};

export default Footer;
