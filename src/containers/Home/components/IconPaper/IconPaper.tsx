import React from 'react';
import { Paper, Typography } from '@mui/material';
import Image from '../../../../components/Image';

type MyProps = {
  imagePath: string;
  imageAltText: string;
  text: string;
};

const IconPaper = ({ imagePath, imageAltText, text }: MyProps) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem 1rem 2rem',
      }}
    >
      <Image
        styles={{
          marginBottom: '3rem',
          // height: '10rem',
          // width: '10rem',
        }}
        imageName={imagePath}
        altText={imageAltText}
      />
      <Typography variant="h3">{text}</Typography>
    </Paper>
  );
};

export default IconPaper;
