import { IChainData } from "../helpers/types";

export const SUPPORTED_CHAINS: IChainData[] = [
  {
    name: "Ethereum Görli",
    short_name: "gor",
    chain: "ETH",
    network: "goerli",
    chain_id: 5,
    network_id: 5,
    rpc_url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    native_currency: {
      symbol: "ETH",
      name: "Ether",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
  },
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
