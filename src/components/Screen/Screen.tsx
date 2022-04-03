import { Container } from '@mui/material';
import AppBar from '../AppBar';
import { Outlet } from 'react-router-dom';
import ConnectWalletDialog from '../ConnectWalletDialog';

interface MyProps {
  requiresWalletConnect?: boolean;
}
const Screen = ({ requiresWalletConnect = true }: MyProps) => {
  return (
    <Container //
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
      }}
      disableGutters={true}
      maxWidth={false}
    >
      <AppBar />
      {requiresWalletConnect && <ConnectWalletDialog />}
      <Outlet />
    </Container>
  );
};

export default Screen;
