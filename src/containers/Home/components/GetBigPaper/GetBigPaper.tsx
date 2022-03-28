import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Image from '../../../../components/Image';

type MyProps = {
  title: string;
  body: string;
  image: string;
  altText: string;
};

const GetBigPaper = ({ title, body, image, altText }: MyProps) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        marginBottom: '2.5rem',
        width: '90%',
        padding: '2rem 5rem 2.5rem 2rem',
      }}
    >
      <Image
        imageName={image}
        altText={altText}
        styles={{
          height: '14rem',
          width: '14rem',
          borderRadius: '1.5rem',
        }}
      />
      <Box>
        <Typography
          sx={{
            marginBottom: '1rem',
            fontFamily: 'Helvetica Pro Outlined',
            color: (theme) => theme.palette.text.tertiary,
          }}
          variant="h1"
        >
          {title}
        </Typography>
        <Typography variant="body1">{body}</Typography>
      </Box>
    </Paper>
  );
};

export default GetBigPaper;
