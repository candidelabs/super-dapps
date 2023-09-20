import { useEffect, useState } from "react";
import { useConnectWallet } from "@web3-onboard/react";

export default function ConnectWallet() {
  const [{ wallet, connecting }, connect] = useConnectWallet();
  const [account, setAccount] = useState();

  useEffect(() => {
    if (wallet?.provider) {
      setAccount({
        address: wallet.accounts[0].address,
        balance: wallet.accounts[0].balance,
      });
    }
  }, [wallet]);

  if (wallet?.provider && account) {
    return null;
  }

  return (
    <div>
      <button
        disabled={connecting}
        onClick={() => connect()}
        className="button-connect"
      >
        Connect CANDIDE
      </button>
    </div>
  );
}
