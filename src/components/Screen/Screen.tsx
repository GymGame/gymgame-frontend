import { Container } from '@mui/material';
import React from 'react';
import AppBar from '../AppBar';

type MyProps = {
  children: React.ReactNode;
};
const Screen = ({ children }: MyProps) => {
  return (
    <Container //
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
      disableGutters={true}
      maxWidth={false}
    >
      <AppBar />
      {children}
    </Container>
  );
};

export default Screen;
