import React from 'react';
import { Box, Typography } from '@mui/material';
import MintAlready from './MintedAlready';
import MintWhiteList from './MintWhiteList';

const styles = {
  containerBox: {
    // m: '1rem 20vw 1rem 15vw'
    m: '1rem auto',
    maxWidth: '900px',
    display: 'flex',
    flexDirection: 'column',
  },
};

const MintMainContent = () => {
  return (
    <Box sx={styles.containerBox}>
      <Typography variant="h1" component="div" gutterBottom>
        Mint
      </Typography>
      <MintAlready mintedNumber={4322} totalNumber={10000} />
      <MintWhiteList totalPrice={7.5} singlePrice={2.5} initialNumber={3} />
    </Box>
  );
};

export default React.memo(MintMainContent);
