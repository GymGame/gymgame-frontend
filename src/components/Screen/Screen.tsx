import { Container } from '@mui/material';
import AppBar from '../AppBar';
import { Outlet } from 'react-router-dom';
import ConnectWalletDialog from '../ConnectWalletDialog';

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
      <ConnectWalletDialog />
      <Outlet />
    </Container>
  );
};

export default Screen;
