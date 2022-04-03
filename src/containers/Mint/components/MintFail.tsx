import React from 'react';
import { Box, Typography } from '@mui/material';

import { colors } from '../../../theme';

const styles = {
  containerBox: {
    m: '1rem auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  },
  text: {
    fontSize: '96px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.grey_5,
    fontFamily: 'Helvetica Pro Outlined',
    mb: '64px',
  },
  textSmall: {
    textAlign: 'center',
    color: colors.grey_1,
  },
};

const MintFail = () => {
  return (
    <Box sx={styles.containerBox}>
      <Box>
        <Typography variant="h1" component="div" sx={styles.text}>
          MINTING FAILED
        </Typography>
        <Typography variant="h5" component="div" sx={styles.textSmall}>
          Please try again later
        </Typography>
      </Box>
    </Box>
  );
};

export default React.memo(MintFail);
