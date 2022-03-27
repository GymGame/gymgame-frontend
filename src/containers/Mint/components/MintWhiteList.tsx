import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../../../theme';
import MintButtonGroups from './MintButtonGroups';

const styles = {
  containerBox: { width: '100%', backgroundColor: colors.grey_2, borderRadius: '16px', padding: '32px', mb: '2rem' },
  flexRow: { display: 'flex', flexDirection: 'row' },
  flexColumnAuto: { display: 'flex', flexDirection: 'column', flexBasis: '100%', flex: 1 },
  // flexColumnAuto: { display: 'flex', flexDirection: 'column', width: '50%' },
  typographyOne: { color: colors.grey_1, mb: '16px' },
};

const MintWhiteList = () => {
  return (
    <Box sx={styles.containerBox}>
      <Typography variant="h3" component="div" gutterBottom>
        Whitelist Mint
      </Typography>
      <Box sx={styles.flexRow}>
        <Box sx={styles.flexColumnAuto}>
          <Typography variant="h6" component="div" sx={styles.typographyOne}>
            Quantity to mint
          </Typography>
          <MintButtonGroups />
        </Box>
        <Box sx={styles.flexColumnAuto}>
          <Box>Price per Gym Junkie</Box>
          <Box>Total price</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(MintWhiteList);
