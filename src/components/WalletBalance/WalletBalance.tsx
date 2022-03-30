import React from 'react';
import { Paper, Typography } from '@mui/material';
import { colors } from '../../theme';

type MyProps = {
  address?: string;
  gainsBalance: number;
  proteinBalance: number;
  avaxBalance: number;
  styles?: React.CSSProperties;
};

const WalletBalance = ({ address, gainsBalance = 0, proteinBalance = 0, avaxBalance = 0, styles = {} }: MyProps) => {
  return (
    <Paper
      sx={{
        padding: '1rem',
        ...styles,
      }}
    >
      <Typography variant="body1" sx={{ color: colors.grey_1 }}>
        {address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : '0x...'}
      </Typography>
      <Typography variant="body2">$GAINS {gainsBalance}</Typography>
      <Typography variant="body2">$PROTEIN {proteinBalance}</Typography>
      <Typography variant="body2">$AVAX {avaxBalance}</Typography>
    </Paper>
  );
};

export default WalletBalance;
