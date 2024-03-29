import { useWeb3React } from '@web3-react/core';
import React from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { ChainIds, getSupportedChains } from '../connectors';
import { removeGlobalError, pushGlobalError, GlobalErrorType } from '../containers/Error/errorSlice';
import { loadAccountDetails } from '../slices/profileSlice';

const useConnectWallet = () => {
  const { connector, active, account, chainId, library } = useWeb3React();
  const errors = useAppSelector((store) => store.globalErrors.errors);
  const profile = useAppSelector((store) => store.profile);
  const dispatch = useAppDispatch();

  //Once we've successfully connected to metamask wallet - we will load the users data
  React.useEffect(() => {
    if (
      //
      connector &&
      active &&
      account &&
      chainId &&
      library
    ) {
      //Dont set profile if user has changed their address while logged in
      if (profile.address && profile.address !== account) {
        return;
      }

      dispatch(
        loadAccountDetails({
          //
          provider: library,
          address: account,
          chainId: chainId as ChainIds,
        }),
      );
    }
  }, [connector, active, account, chainId, library]);

  React.useEffect(() => {
    if (!connector) {
      dispatch(
        pushGlobalError({
          type: GlobalErrorType.WalletNotConencted,
        }),
      );
    } else if (errors.some((error) => error.type === GlobalErrorType.WalletNotConencted)) {
      dispatch(
        removeGlobalError({
          type: GlobalErrorType.WalletNotConencted,
        }),
      );
    }
  }, [account]);

  const supportedChainCheck = (chainId: string | number | undefined) => {
    if (!getSupportedChains().includes(Number(chainId).toString())) {
      dispatch(
        pushGlobalError({
          type: GlobalErrorType.UnsupportedChain,
        }),
      );
    } else {
      dispatch(removeGlobalError({ type: GlobalErrorType.UnsupportedChain }));
    }
  };

  React.useEffect(() => {
    const { ethereum } = window as any;
    if (!ethereum) {
      dispatch(
        pushGlobalError({
          type: GlobalErrorType.WalletNotConencted,
        }),
      );
      return;
    }
    const handleConnect = () => {
      console.log("useEthereumListeners: Handling 'connect' event");
    };

    const handleChainChanged = (chainId: string | number) => {
      console.log("useEthereumListeners: Handling 'chain changed' event with payload", chainId);
      supportedChainCheck(chainId);
    };

    const handleAccountsChanged = (accounts: string[]) => {
      console.log("useEthereumListeners: Handling 'accountsChanged' event with payload", accounts);
      if (profile.address) {
        if (profile.address.toLocaleLowerCase() !== accounts[0].toLocaleLowerCase()) {
          dispatch(
            pushGlobalError({
              type: GlobalErrorType.InvalidAccount,
            }),
          );
        } else {
          dispatch(
            removeGlobalError({
              type: GlobalErrorType.InvalidAccount,
            }),
          );
        }
      }
    };

    ethereum.on('connect', handleConnect);
    ethereum.on('chainChanged', handleChainChanged);
    ethereum.on('accountsChanged', handleAccountsChanged);

    return () => {
      if (ethereum.removeListener) {
        ethereum.removeListener('connect', handleConnect);
        ethereum.removeListener('chainChanged', handleChainChanged);
        ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, [connector, profile]);
};

export default useConnectWallet;
