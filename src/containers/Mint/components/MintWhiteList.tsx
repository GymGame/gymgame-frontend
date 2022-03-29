import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { colors } from '../../../theme';
import MintButtonGroups from './MintButtonGroups';
import Info from './Info';

const styles = {
  containerBox: {
    width: '100%',
    backgroundColor: colors.grey_2,
    borderRadius: '16px',
    padding: '32px',
    mb: '2rem',
  },
  flexRow: { display: 'flex', flexDirection: 'row' },
  flexColumnAuto: { display: 'flex', flexDirection: 'column', width: '50%' },
  typographyOne: { color: colors.grey_1, mb: '16px' },
  typographyTwo: { color: colors.grey_1, mb: 0, ml: 1 },
  flexGrowOne: { flex: 1 },
  flexPrice: { display: 'flex', flexDirection: 'row', alignItems: 'flex-end' },
  alert: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: '35px 0 32px',
    padding: '16px',
    borderRadius: '8px',
    border: `solid 2px ${colors.grey_5}`,
    backgroundColor: colors.grey_2,
  },
};

export type MintWhiteListProps = {
  singlePrice?: number;
  totalPrice: number;
  initialNumber?: number;
  handleAdd: () => void;
  handleRemove: () => void;
};

const MintWhiteList = ({
  singlePrice = 2.5,
  totalPrice,
  initialNumber = 3,
  handleAdd,
  handleRemove,
}: MintWhiteListProps) => {
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
          <MintButtonGroups initialNumber={initialNumber} handleAdd={handleAdd} handleRemove={handleRemove} />
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
      <Box sx={styles.alert}>
        <Info />
        <Typography variant="h6" gutterBottom component="div" sx={{ fontSize: '18px', ml: '1rem' }}>
          Your wallet address has been identified on the whitelist. Minting will use your whitelist allocation at the
          whitelist mint price before minting at the public mint price.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Button sx={{ padding: '1.2rem 2.7rem', marginTop: '2rem' }} variant="contained">
          Mint Gym Junkie
        </Button>
      </Box>
    </Box>
  );
};

export default React.memo(MintWhiteList);
