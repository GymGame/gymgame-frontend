import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useLocation } from 'react-router-dom';
import { setActiveProfile } from '../../slices/profileSlice';
import useEagerConnect from '../../hooks/useEagerConnect';
import { createGlobalError, GlobalErrorType } from '../../containers/Error/errorSlice';
import useEthereumListeners from '../../hooks/useEthereumListeners';
import { Web3Provider } from '@ethersproject/providers';
import { injected } from '../../connectors';

const ConnectWalletDialog = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const isMounted = React.useRef<boolean>(true);

  const { address } = useAppSelector((state) => state.profile);

  const isHomePage = location.pathname === '/';

  const context = useWeb3React<Web3Provider>();
  const { account, activate, active, chainId } = context;
  const dispatch = useAppDispatch();

  //Eagerly connect to ethereum provider if it exists and has already been granted access
  useEagerConnect();

  useEthereumListeners();

  //If address is defined, then we can close the connect wallet dialog
  React.useEffect(() => {
    //Required to return on first mount; otherwise there's a flickering effect since address is always undefined on mount
    if (isMounted.current) {
      isMounted.current = false;
      return;
    }

    setIsOpen(!address);
  }, [address]);

  React.useEffect(() => {
    if (address && isLoading && !isOpen) {
      setIsLoading(false);
    }
  }, [isOpen]);

  React.useEffect(() => {
    // debugger;
    if (active && account && chainId) {
      dispatch(
        setActiveProfile({
          address: account,
          chainId,
          balances: {
            avax: 10,
            gains: 10,
            protein: 10,
          },
        }),
      );
    }
  }, [active, account, chainId]);

  const onConnectWallet = () => {
    setIsLoading(true);
    activate(injected, (error) => {
      if (error instanceof UnsupportedChainIdError) {
        dispatch(
          createGlobalError({
            type: GlobalErrorType.UnsupportedChain,
            message: 'Please change to Avalanche network to continue!',
          }),
        );
      }
      setIsLoading(false);
    });
  };

  const renderDialogAction = () => {
    if (active) {
      return null;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <Button onClick={onConnectWallet} sx={{ padding: '1.2rem 2.7rem', marginTop: '2rem' }} variant="contained">
        Connect Wallet
      </Button>
    );
  };

  return (
    <Dialog
      open={!isHomePage && isOpen}
      maxWidth="lg"
      fullWidth={true}
      sx={{
        '.MuiDialog-paper': {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '3rem 0 5rem',
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: `rgba(33, 33, 33, .9)`,
        },
      }}
    >
      <DialogTitle
        sx={{
          textDecoration: 'uppercase',
          fontSize: '6rem', //96px
          fontFamily: 'Helvetica Pro Outlined',
          color: (theme) => theme.palette.text.tertiary,
        }}
      >
        WALLET REQUIRED
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">You need to connect your wallet to enter GymGame</Typography>
      </DialogContent>
      <DialogActions>{renderDialogAction()}</DialogActions>
    </Dialog>
  );
};

export default ConnectWalletDialog;
