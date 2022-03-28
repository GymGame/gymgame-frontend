import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Title from '../../../components/Title';
import IconPaper from './IconPaper';

const ViewTheContractsSection = () => {
  return (
    <Container
      sx={{
        //
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '12rem',
      }}
      maxWidth="md"
    >
      <Box sx={{ marginBottom: '4rem' }}>
        <Title variant="h2" textPartOne="View the" textPartTwo="Contract" />
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <IconPaper //
            imagePath="/logos/junkies-logo"
            imageAltText="Junkies Logo"
            text="Gym Junkies"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <IconPaper //
            imagePath="/logos/equipment-logo"
            imageAltText="Equipment logo"
            text="Equipment"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <IconPaper //
            imagePath="/logos/gains-logo"
            imageAltText="Gains Token Logo"
            text="$GAINS"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <IconPaper //
            imagePath="/logos/protein-logo"
            imageAltText="Protein logo"
            text="$PRO"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ViewTheContractsSection;
