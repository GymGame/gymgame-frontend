import { useWeb3React } from "@web3-react/core";
import React from "react";
import { useAppDispatch } from ".";
import { SUPPORTED_CHAIN_IDS } from "../connectors";
import { clearGlobalError, createGlobalError, GlobalErrorType } from "../containers/Error/errorSlice";

const useEthereumListeners = () => {
  const { connector } = useWeb3React();
  const dispatch = useAppDispatch();

  const supportedChainCheck = (chainId: string | number | undefined) => {
    if (!SUPPORTED_CHAIN_IDS.includes(Number(chainId).toString())) {
      dispatch(
        createGlobalError({
          type: GlobalErrorType.UnsupportedChain,
          message: "Please change to Avalanche network to continue!",
        })
      );
    }
    if (SUPPORTED_CHAIN_IDS.includes(Number(chainId).toString())) {
      dispatch(clearGlobalError({ type: GlobalErrorType.UnsupportedChain }));
    }
  };

  React.useEffect(() => {
    const { ethereum } = window as any;

    if (ethereum && ethereum.on) {
      const handleConnect = () => {
        console.log("useEthereumListeners: Handling 'connect' event");
      };

      const handleChainChanged = (chainId: string | number) => {
        supportedChainCheck(chainId);
      };

      const handleAccountsChanged = (accounts: string[]) => {
        console.log("useEthereumListeners: Handling 'accountsChanged' event with payload", accounts);
        if (!accounts.length) {
          dispatch(
            createGlobalError({
              type: GlobalErrorType.InvalidAccount,
              message: "Please sign in with account.",
            })
          );
          return;
        }
        if (accounts.length) {
          dispatch(
            clearGlobalError({
              type: GlobalErrorType.InvalidAccount,
            })
          );
        }
      };

      ethereum.on("connect", handleConnect);
      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("connect", handleConnect);
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
        }
      };
    }
  }, [connector]);
};

export default useEthereumListeners;
