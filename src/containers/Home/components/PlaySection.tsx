import React from 'react';
import { Container, Box, Typography } from '@mui/material';

import HeroBackgroundSvg from '../../../assets/svgs/heroBg.svg';
import Image from '../../../components/Image';
import { PlayButton } from '../../../components/Button';
import { ScrollIcon } from '../../../components/Icons';

const PlaySection = () => {
  return (
    <Container sx={{ marginBottom: '2rem' }}>
      <Box
        sx={{
          borderRadius: '2rem 2rem 0 0',
          background: `url(${HeroBackgroundSvg}) no-repeat center/cover`,
          height: '100vh',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          position: 'relative',
          '&:after': {
            backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 87%, #212121 100%)',
            content: '""',
            inset: 0,
            position: 'absolute',
            zIndex: '0',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '6rem',
            zIndex: '1',
          }}
        >
          <Image
            styles={{
              width: '10rem',
              height: '10rem',
              marginBottom: '1rem',
            }}
            imageName="hero-icon"
            altText="Hero Icon Image"
          />
          <Typography
            variant="h1"
            sx={{
              //
              fontFamily: 'Helvetica Pro Outlined',
            }}
          >
            Lorem ipsum
          </Typography>
          <br />
          <Typography variant="h1">dolar loes.</Typography>
          <PlayButton
            styles={{
              marginTop: '1.5rem',
            }}
            onClickHandler={() => {
              alert('LETS PLAYY');
            }}
          />
          <ScrollIcon />
        </Box>
      </Box>
    </Container>
  );
};

export default PlaySection;
