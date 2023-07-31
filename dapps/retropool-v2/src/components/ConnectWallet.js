import { useEffect, useState } from "react";
import { useConnectWallet } from "@web3-onboard/react";

export default function ConnectWallet() {
  const [{ wallet, connecting }, connect] = useConnectWallet();
  const [account, setAccount] = useState();

  useEffect(() => {
    if (wallet?.provider) {
      const { name, avatar } = wallet?.accounts[0].ens ?? {};
      setAccount({
        address: wallet.accounts[0].address,
        balance: wallet.accounts[0].balance,
        ens: { name, avatar: avatar?.url },
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
