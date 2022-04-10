import React from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { pushGlobalError, GlobalErrorType } from '../../errorSlice';
import { Web3Provider } from '@ethersproject/providers';
import { injected } from '../../../../connectors';
import Dialog from '../../../../components/Dialog';
import { MetamaskIcon } from '../../../../components/Icons';

const ConnectWalletDialog = () => {
  const { activate } = useWeb3React<Web3Provider>();
  const globalErrors = useAppSelector((state) => state.globalErrors);
  const dispatch = useAppDispatch();

  const isOpen = globalErrors.errors.some((error) => error.type === GlobalErrorType.WalletNotConencted);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const hasMetamaskBrowserInstalled = () => {
    return Boolean((window as any).ethereum);
  };

  //Everytime dialog is open, we clear loading in case loading state was still true from last action
  React.useEffect(() => {
    if (isOpen && isLoading) {
      setIsLoading(false);
    }
  }, [isOpen]);

  const onConnectWallet = () => {
    setIsLoading(true);
    activate(injected, (error) => {
      if (error instanceof UnsupportedChainIdError) {
        dispatch(
          pushGlobalError({
            type: GlobalErrorType.UnsupportedChain,
            message: 'Please change to Avalanche network to continue!',
          }),
        );
      }
      setIsLoading(false);
    });
  };

  const onClickHandler = () => {
    if (!hasMetamaskBrowserInstalled()) {
      window.open('https://metamask.io/', '_blank');
      return;
    }

    onConnectWallet();
  };

  return (
    <Dialog
      Icon={<MetamaskIcon />}
      title="WALLET REQUIRED"
      body="You need to connect your wallet to enter GymGame"
      isOpen={isOpen}
      buttonProps={{
        isLoading: isLoading,
        text: hasMetamaskBrowserInstalled() ? 'Connect Wallet' : 'Get MetaMask',
        onClickHandler: onClickHandler,
      }}
    />
  );
};

export default ConnectWalletDialog;
