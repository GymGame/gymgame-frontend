import React from 'react';
import { Toolbar, AppBar as MuiAppBar, Box, Typography, Button } from '@mui/material';
import RouterLink from '../RouterLink';
import { useLocation, useNavigate } from 'react-router-dom';
import { Web3Provider } from '@ethersproject/providers';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import useEagerConnect from '../../hooks/useEagerConnect';
import { injected } from '../../connectors';
import useEthereumListeners from '../../hooks/useEthereumListeners';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { createGlobalError, GlobalErrorType } from '../../containers/Error/errorSlice';
import { activatingProfile, setActiveProfile } from '../../slices/profileSlice';

const AppBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActivating = useAppSelector((state) => state.profile.isActivating);

  const isHomePage = location.pathname === '/';

  const navigateToHome = () => {
    navigate('/');
  };

  const context = useWeb3React<Web3Provider>();
  const { account, activate, deactivate, active, error, library, chainId } = context;
  const dispatch = useAppDispatch();

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

  // React.useEffect(() => {
  //   if (activatingWallet && connector) {
  //     setActivatingWallet(false);
  //   }
  // }, [activatingWallet, connector]);

  //Eagerly connect to ethereum provider if it exists and has already been granted access
  useEagerConnect();

  useEthereumListeners();

  const onConnectWallet = () => {
    dispatch(activatingProfile(true));
    activate(injected, (error) => {
      if (error instanceof UnsupportedChainIdError) {
        dispatch(
          createGlobalError({
            type: GlobalErrorType.UnsupportedChain,
            message: 'Please change to Avalanche network to continue!',
          }),
        );
      }
      dispatch(activatingProfile(false));
    });
  };

  const renderButtonText = () => {
    if (isHomePage) {
      return 'Buy GAINS';
    }

    if (isActivating) {
      return 'Loading...';
    }

    if (active) {
      return `Disconnect`;
    }

    return 'Connect';
  };

  const onClickActionButton = () => {
    if (isHomePage) {
      alert('Buy token');
      return;
    }

    if (active) {
      dispatch(
        setActiveProfile({
          address: undefined,
          chainId: undefined,
          balances: {
            avax: 0,
            gains: 0,
            protein: 0,
          },
        }),
      );
      return deactivate();
    }

    return onConnectWallet();
  };

  return (
    <MuiAppBar
      sx={{
        backgroundImage: 'linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0) 100%)',
        backgroundColor: (theme) => theme.palette.background.default,
        boxShadow: 'none',
        padding: '1rem 0',
      }}
      position="static"
    >
      <Toolbar sx={{ height: '100%', padding: '0', display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          sx={{
            fontFamily: 'upheaval',
            backgroundImage: (theme) => theme.palette.gradient.main,
            textShadow: '0 .28rem .86rem rgba(0, 0, 0, 0.25)',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            cursor: 'pointer',
          }}
          variant="h4"
          onClick={navigateToHome}
        >
          GYMGAME
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '2.3rem',
            fontSize: '1.125rem',
          }}
        >
          <RouterLink to="#">Play</RouterLink>
          <RouterLink to="mint">Mint</RouterLink>
          <RouterLink to="#">Marketplace</RouterLink>
        </Box>
        <Button
          sx={{
            width: '10rem',
            height: '3rem',
          }}
          variant="outlined"
          size="small"
          onClick={onClickActionButton}
        >
          <Typography variant="body2" sx={{ color: (theme) => theme.palette.text.primary, textTransform: 'none' }}>
            {renderButtonText()}
          </Typography>
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
