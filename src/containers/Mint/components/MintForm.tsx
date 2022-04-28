import React from 'react';
import { Box, Button, Skeleton, Typography } from '@mui/material';
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
  typographyOne: { color: colors.grey_1 },
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
  isOnWhiteList: boolean;
  singlePrice?: number;
  totalPrice: number;
  initialNumber?: number;
  handleAdd: () => void;
  handleRemove: () => void;
  disableAdd: boolean;
  disableRemove: boolean;
  isLoading: boolean;
};

const MintWhiteList = ({
  isOnWhiteList,
  singlePrice = 2.5,
  totalPrice,
  initialNumber = 3,
  handleAdd,
  handleRemove,
  disableAdd,
  disableRemove,
  isLoading,
}: MintWhiteListProps) => {
  return (
    <Box sx={styles.containerBox}>
      <>
        {isLoading ? (
          <>
            <Skeleton animation="wave" height={40} />
            <Skeleton animation="wave" height={30} />
            <Skeleton animation="wave" height={30} />
            <Skeleton animation="wave" height={30} />
          </>
        ) : (
          <>
            <Typography variant="h3" component="div" gutterBottom>
              {isOnWhiteList ? 'Whitelist Mint' : 'Public Mint'}
            </Typography>
            <Box sx={styles.flexRow}>
              <Box sx={styles.flexColumnAuto}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    color: colors.grey_1,
                    mb: '1rem',
                  }}
                >
                  Quantity to mint
                </Typography>
                <MintButtonGroups
                  initialNumber={initialNumber}
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
                  disableAdd={disableAdd}
                  disableRemove={disableRemove}
                />
              </Box>
              <Box sx={styles.flexColumnAuto}>
                <Box sx={styles.flexGrowOne} marginBottom={3}>
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
            {isOnWhiteList && (
              <Box sx={styles.alert}>
                <Info />
                <Typography variant="h6" gutterBottom component="div" sx={{ fontSize: '18px', ml: '1rem' }}>
                  Your wallet address has been identified on the whitelist. Minting will use your whitelist allocation
                  at the whitelist mint price before minting at the public mint price.
                </Typography>
              </Box>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <Button sx={{ padding: '1.2rem 2.7rem', marginTop: '2rem' }} variant="contained">
                Mint Gym Junkies
              </Button>
            </Box>
          </>
        )}
      </>
    </Box>
  );
};

export default React.memo(MintWhiteList);
