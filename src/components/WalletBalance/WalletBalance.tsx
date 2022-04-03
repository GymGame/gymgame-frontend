import React from 'react';
import { Grid, Paper, Theme, Typography } from '@mui/material';
import { colors } from '../../theme';

type MyProps = {
  address?: string;
  gainsBalance: number;
  proteinBalance: number;
  avaxBalance: number;
  styles?: React.CSSProperties;
};

const WalletBalance = ({ address, gainsBalance = 0, proteinBalance = 0, avaxBalance = 0, styles = {} }: MyProps) => {
  const tokenTextStyle = (gradientColor: string) => ({
    backgroundImage: gradientColor,
    textShadow: '0 .28rem .86rem rgba(0, 0, 0, 0.25)',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  });

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
        ...styles,
      }}
    >
      <Typography variant="body1" sx={{ color: colors.grey_1 }}>
        {address ? `${address.substring(0, 8)}.....${address.substring(address.length - 6)}` : '0x...'}
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
            {gainsBalance}
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
            {proteinBalance}
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
            {avaxBalance}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WalletBalance;
