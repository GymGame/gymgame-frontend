import React from 'react';
import { Typography, Box } from '@mui/material';

type MyProps = {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  textPartOne: string;
  textPartTwo: string;
};

const Title = ({ variant, textPartOne, textPartTwo }: MyProps) => {
  return (
    <Box sx={{ marginBottom: '3rem', fontFamily: 'Helvetica Pro', textAlign: 'center' }}>
      <Typography sx={{ display: 'inline-block', fontFamily: 'inherit' }} variant={variant}>
        {textPartOne}&nbsp;
      </Typography>
      <Typography
        sx={{
          //
          display: 'inline-block',
          background: (theme) => theme.palette.gradient.main,
          backgroundClip: 'text',
          textFillColor: 'transparent',
          fontFamily: 'inherit',
        }}
        variant={variant}
      >
        {textPartTwo}
      </Typography>
    </Box>
  );
};

export default Title;
