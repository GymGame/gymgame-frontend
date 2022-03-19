import React from 'react';
import Button from '@mui/material/Button';
import { Web3Provider } from '@ethersproject/providers';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import useEagerConnect from '../../hooks/useEagerConnect';
import { injected } from '../../connectors';
import useEthereumListeners from '../../hooks/useEthereumListeners';
import { useAppDispatch } from '../../hooks';
import { createGlobalError, GlobalErrorType } from '../../containers/Error/errorSlice';

const AppContent = () => {
  const context = useWeb3React<Web3Provider>();
  const { connector, library, chainId, account, activate, deactivate, active, error } = context;
  const dispatch = useAppDispatch();

  const [activatingWallet, setActivatingWallet] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (activatingWallet && connector) {
      setActivatingWallet(false);
    }
  }, [activatingWallet, connector]);

  //Eagerly connect to ethereum provider if it exists and has already been granted access
  useEagerConnect();

  useEthereumListeners();

  const onConnectWallet = () => {
    setActivatingWallet(true);
    activate(injected, (error) => {
      if (error instanceof UnsupportedChainIdError) {
        dispatch(
          createGlobalError({
            type: GlobalErrorType.UnsupportedChain,
            message: 'Please change to Avalanche network to continue!',
          }),
        );
      }
      setActivatingWallet(false);
    });
  };

  const renderConnectComponent = () => {
    if (activatingWallet) {
      return <div>Loading...</div>;
    }

    if (connector && account) {
      return <div>{`${account.substring(0, 6)}...${account.substring(account.length - 4)}`}</div>;
    }

    return (
      <Button variant="contained" onClick={onConnectWallet}>
        Connect Metamask Wallet
      </Button>
    );
  };
};

export default AppContent;
