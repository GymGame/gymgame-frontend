import { Container } from '@mui/material';
import AppBar from '../AppBar';
import { Outlet } from 'react-router-dom';

const Screen = () => {
  return (
    <Container //
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
      disableGutters={true}
      maxWidth={false}
    >
      <AppBar />
      <Outlet />
    </Container>
  );
};

export default Screen;
