import React from 'react';
import { Box, Grid, Paper, Theme, Typography } from '@mui/material';
import { colors } from '../../theme';
import { ApiStatus } from '../../constants';
import Skeleton from '@mui/material/Skeleton';

type MyProps = {
  address?: string;
  gainsBalance: string;
  proteinBalance: string;
  avaxBalance: string;
  styles?: React.CSSProperties;
  apiStatus: ApiStatus;
};

const WalletBalance = ({ address, gainsBalance, proteinBalance, avaxBalance, apiStatus, styles = {} }: MyProps) => {
  const tokenTextStyle = (gradientColor: string) => ({
    backgroundImage: gradientColor,
    textShadow: '0 .28rem .86rem rgba(0, 0, 0, 0.25)',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  });

  const isLoading = apiStatus === ApiStatus.Idle || apiStatus === ApiStatus.Pending;
  const balanceTextStyle = (theme: Theme) => ({
    color: theme.palette.text.secondary,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  });

  return (
    <Paper
      sx={{
        padding: '1rem',
        height: '9rem',
        maxWidth: '15rem',
        ...styles,
      }}
    >
      {isLoading ? (
        <Box sx={{ width: '13rem' }}>
          <Skeleton animation="wave" height={40} />
          <Skeleton animation="wave" height={22} />
          <Skeleton animation="wave" height={22} />
          <Skeleton animation="wave" height={22} />
        </Box>
      ) : (
        <>
          <Typography variant="body1" sx={{ color: colors.grey_1 }}>
            {address ? `${address.substring(0, 7)}.....${address.substring(address.length - 6)}` : '0x...'}
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography
                variant="body2"
                sx={(theme) => ({
                  ...tokenTextStyle(theme.palette.gradient.main),
                })}
              >
                $GAINS
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={(theme) => ({ ...balanceTextStyle(theme) })}>
                {gainsBalance.toString()}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={(theme) => ({
                ...tokenTextStyle(theme.palette.gradient.yellow),
              })}
            >
              <Typography variant="body2">$PROTEIN</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" sx={(theme) => ({ ...balanceTextStyle(theme) })}>
                {proteinBalance.toString()}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={(theme) => ({
                ...tokenTextStyle(theme.palette.gradient.red),
              })}
            >
              <Typography variant="body2">$AVAX</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={(theme) => ({ ...balanceTextStyle(theme) })} variant="body2">
                {avaxBalance.toString()}
              </Typography>
            </Grid>
          </Grid>
        </>
      )}
    </Paper>
  );
};

export default WalletBalance;
