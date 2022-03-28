import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../../../theme';
import MintButtonGroups from './MintButtonGroups';

const styles = {
  containerBox: { width: '100%', backgroundColor: colors.grey_2, borderRadius: '16px', padding: '32px', mb: '2rem' },
  flexRow: { display: 'flex', flexDirection: 'row' },
  flexColumnAuto: { display: 'flex', flexDirection: 'column', width: '50%' },
  typographyOne: { color: colors.grey_1, mb: '16px' },
  typographyTwo: { color: colors.grey_1, mb: 0, ml: 1 },
  flexGrowOne: { flex: 1 },
  flexPrice: { display: 'flex', flexDirection: 'row', alignItems: 'flex-end' },
};

export type MintWhiteListProps = {
  singlePrice?: number;
  totalPrice: number;
  initialNumber?: number;
};

const MintWhiteList = ({ singlePrice = 2.5, totalPrice, initialNumber = 3 }: MintWhiteListProps) => {
  return (
    <Box sx={styles.containerBox}>
      <Typography variant="h3" component="div" gutterBottom>
        Whitelist Mint
      </Typography>
      <Box sx={styles.flexRow}>
        <Box sx={styles.flexColumnAuto}>
          <Typography variant="h5" component="div" sx={styles.typographyOne}>
            Quantity to mint
          </Typography>
          <MintButtonGroups initialNumber={initialNumber} />
        </Box>
        <Box sx={styles.flexColumnAuto}>
          <Box sx={styles.flexGrowOne}>
            <Typography variant="h5" component="div" sx={styles.typographyOne}>
              Price per Gym Junkie
            </Typography>
            <Box sx={styles.flexPrice}>
              <Typography variant="h3" component="div">
                {singlePrice}
              </Typography>
              <Typography variant="h5" component="div" sx={styles.typographyTwo}>
                AVAX
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.flexGrowOne}>
            <Typography variant="h5" component="div" sx={styles.typographyOne}>
              Total price
            </Typography>
            <Box sx={styles.flexPrice}>
              <Typography variant="h3" component="div">
                {totalPrice}
              </Typography>
              <Typography variant="h5" component="div" sx={styles.typographyTwo}>
                AVAX
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(MintWhiteList);
