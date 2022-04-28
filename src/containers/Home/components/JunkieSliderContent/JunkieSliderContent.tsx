import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from '../../../../components/Image';

type MyProps = {
  title: string;
  skin: string;
  hat: string;
  eyes: string;
  shirt: string;
  strength: string;
  endurance: string;
  agility: string;
  weight: string;
};

const JunkieSliderContent = ({ title, skin, hat, eyes, shirt, strength, endurance, agility, weight }: MyProps) => {
  return (
    <>
      <Box
        sx={{
          height: '100%',
          width: '477px',
          position: 'relative',
          marginRight: '3rem',
        }}
      >
        <Box
          sx={{
            WebkitFilter: 'blur(32px)',
            filter: 'blur(32px)',
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            height: '100%',
            width: '100%',
          }}
        />
        <Image
          styles={{
            borderRadius: '1.5rem',
            borderStyle: 'solid',
            borderWidth: '3px',
            height: '100%',
            position: 'absolute',
            top: 0,
          }}
          imageName="hero-icon"
          altText="Hero Icon Image"
        />
      </Box>
      <Box sx={{ marginTop: '.75rem' }}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body1">Skin: {skin}</Typography>
        <Typography variant="body1">Hat: {hat}</Typography>
        <Typography variant="body1">Eyes: {eyes}</Typography>
        <Typography variant="body1">Shirt: {shirt}</Typography>
        <br />
        <Typography variant="body1">Strength: {strength}</Typography>
        <Typography variant="body1">Endurance: {endurance}</Typography>
        <Typography variant="body1">Agility: {agility}</Typography>
        <Typography variant="body1">Weight: {weight}</Typography>
      </Box>
    </>
  );
};

export default JunkieSliderContent;
