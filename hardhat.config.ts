import { HardhatUserConfig } from 'hardhat/types';
import '@nomiclabs/hardhat-ethers';
import '@typechain/hardhat';

const config: HardhatUserConfig = {
  typechain: {
    outDir: 'src/typechains',
  },
  defaultNetwork: 'hardhat',
  solidity: {
    compilers: [{ version: '0.8.10', settings: {} }],
  },
  networks: {
    avalanche: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gas: 'auto',
      gasPrice: 'auto',
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 470000000000,
      chainId: 43113,
    },
    local: {
      url: 'http://localhost:8545/ext/bc/C/rpc',
      gas: 'auto',
    },
  },
};

export default config;
