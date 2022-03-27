import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import { convertNumberToString } from '../helper';
import { colors } from '../../../theme';

export type MintAlreadyProps = {
  mintedNumber: number;
  totalNumber?: number;
};

const styles = {
  containerBox: { width: '100%', backgroundColor: colors.grey_2, borderRadius: '16px', padding: '32px', mb: '2rem' },
  typographyOne: { color: colors.grey_1, mb: '16px' },
  typographyTwo: { color: colors.grey_1, mb: '16px', fontSize: '48px' },
  progessBar: {
    backgroundColor: colors.grey_3,
    height: '24px',
    borderRadius: '24px',
    '& .MuiLinearProgress-barColorPrimary': {
      backgroundImage: 'linear-gradient(to right, #33daff 0%, #0047ff 100%, #0047ff 100%)',
      borderRadius: '24px',
    },
  },
};

const MintAlready = ({ mintedNumber = 0, totalNumber = 10000 }: MintAlreadyProps) => {
  return (
    <Box sx={styles.containerBox}>
      <Typography variant="h6" component="div" sx={styles.typographyOne}>
        Number of Gen0 Gym Junkies already minted
      </Typography>
      <Typography variant="h6" component="div" sx={styles.typographyTwo}>
        <span style={{ color: '#ffffff' }}>{convertNumberToString(mintedNumber)}</span>/
        <span>{convertNumberToString(totalNumber)}</span>
      </Typography>
      <LinearProgress
        variant="determinate"
        value={Math.round((mintedNumber / totalNumber) * 100)}
        sx={styles.progessBar}
      />
    </Box>
  );
};

export default React.memo(MintAlready);
