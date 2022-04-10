import { InjectedConnector } from '@web3-react/injected-connector';

export const RPC_URLS: { [chainId: number]: string } = {
  43114: process.env.AVAX_MAINNET_RPC_URL as string,
  43113: process.env.AVAX_TESTNET_RPC_URL as string,
};

export enum ChainIds {
  AVAX_MAINNET = 43114,
  AVAX_TESTNET = 43113,
}

export const getSupportedChains = (): string[] => {
  const supportedChains = process.env.REACT_APP_SUPPORTED_CHAINS_IDS?.split(',');
  if (!supportedChains) {
    throw new Error(
      'Failed to find any supported chains. Make sure supported chains are injected correctly into the environment.',
    );
  }

  //union all available RPC_URLS and supported chain based on environment
  return [...new Set([...Object.keys(RPC_URLS), ...supportedChains])];
};

export const injected = new InjectedConnector({
  supportedChainIds: [...getSupportedChains().map((id) => parseInt(id))],
});
