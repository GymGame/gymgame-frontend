import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Title from '../../../components/Title';
import RoadMapPaper from './RoadMapPaper';

const HowDoIGetBigSection = () => {
  return (
    <Container
      sx={{
        //
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '12rem',
      }}
    >
      <Title textPartOne="See the" textPartTwo="Roadmap" variant="h2" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <RoadMapPaper //
            title="Phase 1"
            cardNumber={1}
            styles={{ margin: 0, marginRight: '1.5rem' }}
          >
            <Typography variant="h3">Lorem ipsum</Typography>
          </RoadMapPaper>
          <RoadMapPaper //
            title="Phase 2"
            cardNumber={2}
            styles={{ marginTop: '5rem', marginBottom: '1.5rem' }}
          >
            <Typography variant="h3">Lorem ipsum</Typography>
          </RoadMapPaper>
        </Box>
        <RoadMapPaper //
          title="Phase 3"
          cardNumber={3}
          styles={{ marginBottom: '1.5rem', marginRight: '15rem', marginLeft: 'auto' }}
        >
          <Typography variant="h3">Lorem ipsum</Typography>
        </RoadMapPaper>

        <RoadMapPaper //
          title="Phase 4"
          cardNumber={4}
          styles={{ marginRight: 'auto', marginLeft: '6rem' }}
        >
          <Typography variant="h3">Lorem ipsum</Typography>
        </RoadMapPaper>
      </Box>
    </Container>
  );
};

export default HowDoIGetBigSection;
