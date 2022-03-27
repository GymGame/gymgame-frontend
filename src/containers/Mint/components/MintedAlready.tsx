import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import { convertNumberToString } from '../helper';

export type MintAlreadyProps = {
  mintedNumber: number;
  totalNumber?: number;
};

const MintAlready = ({ mintedNumber = 0, totalNumber = 10000 }: MintAlreadyProps) => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#2a2a2a', borderRadius: '16px', padding: '32px' }}>
      <Typography variant="h6" component="div" sx={{ color: '#adadad', mb: '16px' }}>
        Number of Gen0 Gym Junkies already minted
      </Typography>
      <Typography variant="h6" component="div" sx={{ color: '#adadad', mb: '16px', fontSize: '48px' }}>
        <span style={{ color: '#ffffff' }}>{convertNumberToString(mintedNumber)}</span>/
        <span>{convertNumberToString(totalNumber)}</span>
      </Typography>
      <LinearProgress
        variant="determinate"
        value={Math.round((mintedNumber / totalNumber) * 100)}
        sx={
          {
            //backgroundImage: 'linear-gradient(to right, #33daff 0%, #0047ff 100%, #0047ff 100%)'
          }
        }
      />
    </Box>
  );
};

export default React.memo(MintAlready);
