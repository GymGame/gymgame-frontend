import React from 'react';
import { Container, Paper } from '@mui/material';
import Title from '../../../components/Title';

const HowDoIGetBigSection = () => {
  return (
    <Container
      sx={{
        //
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '12rem',
      }}
    >
      <Paper
        onClick={() => alert('Go to whitepaper')}
        sx={{
          cursor: 'pointer',
          padding: '3.7rem 2.5rem',
          display: 'flex',
          marginBottom: '2.5rem',
          width: '90%',
        }}
      >
        <Title textPartOne="Read the" textPartTwo="Whitepaper" variant="h1" />
      </Paper>
    </Container>
  );
};

export default HowDoIGetBigSection;
