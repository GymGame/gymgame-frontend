import React from 'react';
import { Toolbar, AppBar as MuiAppBar, Box, Typography, Button } from '@mui/material';
import RouterLink from '../RouterLink';

const AppBar = () => {
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
          }}
          variant="h4"
        >
          GYMGAME
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '2.3rem',
            fontSize: '1rem',
          }}
        >
          <RouterLink isActive={true} to="#">
            Home
          </RouterLink>
          <RouterLink to="#">Play</RouterLink>
          <RouterLink to="#">Mint</RouterLink>
          <RouterLink to="#">Marketplace</RouterLink>
        </Box>
        <Button variant="outlined" size="small">
          <Typography sx={{ color: (theme) => theme.palette.text.primary, textTransform: 'none', fontSize: '1rem' }}>
            Buy GAINS
          </Typography>
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
