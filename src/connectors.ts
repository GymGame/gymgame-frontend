import { InjectedConnector } from '@web3-react/injected-connector';

export const RPC_URLS: { [chainId: number]: string } = {
  // 43114: process.env.AVAX_MAINNET_RPC_URL as string,
  43113: process.env.AVAX_TESTNET_RPC_URL as string,
};

export const SUPPORTED_CHAIN_IDS = Object.keys(RPC_URLS);

export const injected = new InjectedConnector({
  supportedChainIds: [
    // 43114, //Avax mainnet
    43113, //Fuji Avax test
  ],
});
