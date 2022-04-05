import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { colors } from '../../../theme';

const styles = {
  typographyOne: { color: colors.grey_1 },
  typographyTwo: { color: colors.grey_1, mb: '32px' },
};

const Card = () => {
  return (
    <Box
      sx={{ borderRadius: '16px', width: 'calc((100% - 2rem) / 3)', height: '261px', backgroundColor: '#2a2a2a' }}
    ></Box>
  );
};

const MintSuccess = () => {
  return (
    <>
      <Typography variant="body1" component="div" sx={styles.typographyOne}>
        You have successfully minted 6 Gen0 Gym Junkies!
      </Typography>
      <Typography variant="body1" component="div" sx={styles.typographyTwo}>
        On 30 Apr 2022, your Gym Junkies’ traits and attributes will be revealed.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap' }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <Button sx={{ padding: '1.2rem 2.7rem', marginTop: '2rem' }} variant="contained">
          Mint More Gym Junkies
        </Button>
        <Button
          sx={{ padding: '1.2rem 2.7rem', marginTop: '2rem', textTransform: 'none' }}
          color="inherit"
          variant="outlined"
        >
          View your Gym Junkies
        </Button>
      </Box>
    </>
  );
};

export default React.memo(MintSuccess);
