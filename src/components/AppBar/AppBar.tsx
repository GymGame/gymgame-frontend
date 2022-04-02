import React from 'react';
import { Toolbar, AppBar as MuiAppBar, Box, Typography, Button } from '@mui/material';
import RouterLink from '../RouterLink';
import { useLocation, useNavigate } from 'react-router-dom';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { setActiveProfile } from '../../slices/profileSlice';

const AppBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { address } = useAppSelector((state) => state.profile);
  const { deactivate } = useWeb3React<Web3Provider>();

  const isHomePage = location.pathname === '/';

  const navigateToHome = () => {
    navigate('/');
  };

  const dispatch = useAppDispatch();

  const renderButtonText = () => {
    if (isHomePage) {
      return 'Buy GAINS';
    }

    return `Disconnect`;
  };

  const onClickActionButton = () => {
    if (isHomePage) {
      alert('Buy token');
      return;
    }

    if (address) {
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
            zIndex: '1400',
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
            zIndex: '1400',
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
            opacity: isHomePage || address ? '1' : '0',
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
