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
      elevation={0}
      sx={{ padding: '2rem 5rem 2.5rem 1.5rem', borderRadius: '2rem', display: 'flex', marginBottom: '2.5rem' }}
    >
      <Image
        imageName={image}
        altText={altText}
        styles={{
          height: '11.7rem',
          width: '11.7rem',
          borderRadius: '2rem',
        }}
      />
      <Box>
        <Typography
          sx={{
            marginBottom: '1rem',
            width: '70%',
            fontFamily: 'Helvetica Pro Outlined',
            color: (theme) => theme.palette.text.tertiary,
          }}
          variant="h2"
        >
          {title}
        </Typography>
        <Typography variant="h5">{body}</Typography>
      </Box>
    </Paper>
  );
};

export default GetBigPaper;
