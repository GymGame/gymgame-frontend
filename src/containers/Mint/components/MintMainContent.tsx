import React from 'react';
import { Box, Typography } from '@mui/material';
import MintAlready from './MintedAlready';

const MintMainContent = () => {
  return (
    <Box sx={{ m: '1rem 20vw 1rem 15vw', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ width: '100%' }}>
        <Typography variant="h1" component="div" gutterBottom>
          Mint
        </Typography>
        <MintAlready mintedNumber={4322} totalNumber={10000} />
      </Box>
    </Box>
  );
};

export default React.memo(MintMainContent);
