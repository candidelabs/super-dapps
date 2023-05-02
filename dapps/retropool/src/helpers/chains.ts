import { IChainData } from "../helpers/types";

export const SUPPORTED_CHAINS: IChainData[] = [
  {
    name: "Optimism",
    chain: "ETH",
    rpc_url: "https://mainnet.optimism.io/",
    network: "mainnet",
    native_currency: {
      name: "Ether",
      symbol: "ETH",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
    short_name: "oeth",
    chain_id: 10,
    network_id: 10,
  },
];
