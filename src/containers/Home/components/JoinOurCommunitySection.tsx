import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Title from '../../../components/Title';
import IconPaper from './IconPaper';

const JoinOurCommunitySection = () => {
  return (
    <Container
      sx={{
        //
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '15rem',
      }}
      maxWidth="md"
    >
      <Box sx={{ marginBottom: '4rem' }}>
        <Title variant="h2" textPartOne="Join our" textPartTwo="Community" />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <IconPaper //
            imagePath="/logos/discord-logo"
            imageAltText="discord logo"
            text="Discord"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <IconPaper //
            imagePath="/logos/twitter-logo"
            imageAltText="twitter logo"
            text="Twitter"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default JoinOurCommunitySection;
