import { Web3Provider } from '@ethersproject/providers';
import { ChainIds } from '../connectors';

export interface IBaseAsyncThunk {
  readonly provider: Web3Provider;
  readonly chainId: ChainIds;
}

export interface IBaseAddressAsyncThunk extends IBaseAsyncThunk {
  readonly address: string;
}
