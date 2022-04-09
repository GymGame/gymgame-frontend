import React from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { pushGlobalError, GlobalErrorType } from '../../errorSlice';
import { Web3Provider } from '@ethersproject/providers';
import { injected } from '../../../../connectors';
import Dialog from '../../../../components/Dialog';
import { AvaxIcon } from '../../../../components/Icons';

const ConnectWalletDialog = () => {
  const globalErrors = useAppSelector((state) => state.globalErrors);

  const isOpen = globalErrors.errors.some((error) => error.type === GlobalErrorType.WalletNotConencted);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { address } = useAppSelector((state) => state.profile);

  const hasMetamaskBrowserInstalled = () => {
    return Boolean((window as any).ethereum);
  };

  const context = useWeb3React<Web3Provider>();
  const { activate } = context;
  const dispatch = useAppDispatch();

  //If address is defined, then we can close the connect wallet dialog
  React.useEffect(() => {
    if (address) {
      setIsLoading(false);
    }
  }, [address]);

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

  return (
    <Dialog
      Icon={AvaxIcon}
      title="WALLET REQUIRED"
      body="You need to connect your wallet to enter GymGame"
      isOpen={isOpen}
      buttonProps={{
        isLoading: isLoading,
        text: hasMetamaskBrowserInstalled() ? 'Connect Wallet' : 'Get MetaMask',
        onClickHandler: onConnectWallet,
      }}
    />
  );
};

export default ConnectWalletDialog;