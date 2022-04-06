import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { colors } from '../../../theme';
import Image from '../../../components/Image';

const styles = {
  typographyOne: { color: colors.grey_1 },
  typographyTwo: { color: colors.grey_1, mb: '32px' },
  cardBox: {
    borderRadius: '16px',
    width: 'calc((100% - 2rem) / 3)',
    height: '261px',
    backgroundColor: '#2a2a2a',
    display: 'flex',
    flexDirection: 'column',
  },
};

type CardProps = {
  id: number;
};
const Card = ({ id }: CardProps) => {
  return (
    <Box
      sx={{
        borderRadius: '16px',
        width: 'calc((100% - 2rem) / 3)',
        height: '261px',
        backgroundColor: '#2a2a2a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        styles={{
          width: '140px',
          height: '140px',
        }}
        imageName="mask"
        altText="mask"
      />
      <Typography variant="body1" component="div" sx={{ fontSize: '36px', fontWeight: 'bold', mt: '12px' }}>
        #{id}
      </Typography>
    </Box>
  );
};

const randomNumber = () => {
  return Math.round(Math.random() * 3000);
};

const MintSuccess = () => {
  return (
    <>
      <Typography variant="body1" component="div" sx={styles.typographyOne}>
        You have successfully minted 6 Gen0 Gym Junkies!
      </Typography>
      <Typography variant="body1" component="div" sx={styles.typographyTwo}>
        On 30 Apr 2022, your Gym Junkies’ traits and attributes will be revealed.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap' }}>
        <Card id={randomNumber()} />
        <Card id={randomNumber()} />
        <Card id={randomNumber()} />
        <Card id={randomNumber()} />
        <Card id={randomNumber()} />
        <Card id={randomNumber()} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', mt: '36px' }}>
        <Button sx={{ padding: '1.2rem 2.7rem', marginTop: '2rem' }} variant="contained">
          Mint More Gym Junkies
        </Button>
        <Button
          sx={{ padding: '1.2rem 2.7rem', marginTop: '2rem', textTransform: 'none' }}
          color="inherit"
          variant="outlined"
        >
          View your Gym Junkies
        </Button>
      </Box>
    </>
  );
};

export default React.memo(MintSuccess);
