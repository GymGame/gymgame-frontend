import { Container, Grid } from '@mui/material';
import React from 'react';
import WalletBalance from '../../components/WalletBalance';
import { useAppSelector } from '../../hooks';
import MintMainContent from './components/MintMainContent';

const AppContent = () => {
  const profile = useAppSelector((state) => state.profile);

  return (
    <Container maxWidth={false}>
      <Grid container columnSpacing={10}>
        <Grid item md={9} lg={10} justifyContent="center">
          <MintMainContent />
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'end' }} item sm={12} md={3} lg={2}>
          {profile && profile.address && (
            <WalletBalance //
              styles={{ display: 'flex', flexDirection: 'column', alignSelf: 'start' }}
              address={profile.address}
              gainsBalance={profile.balances.gains}
              proteinBalance={profile.balances.protein}
              avaxBalance={profile.balances.avax}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppContent;
