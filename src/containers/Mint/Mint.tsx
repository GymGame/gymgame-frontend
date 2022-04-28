import { Container, Grid } from '@mui/material';
import React from 'react';
import WalletBalance from '../../components/WalletBalance';
import { useAppDispatch, useAppSelector } from '../../hooks';
import MintMainContent from './components/MintMainContent';
import { loadMintDetails } from './mintSlice';
import { useWeb3React } from '@web3-react/core';

const AppContent = () => {
  const dispatch = useAppDispatch();
  const { library } = useWeb3React();
  const profile = useAppSelector((state) => state.profile);

  const {
    status,
    data: { whiteList, price, nftsLimit, nftsMinted, mintGeneration },
    // error,
  } = useAppSelector((store) => store.mint);

  React.useEffect(() => {
    if (profile.address && profile.chainId) {
      dispatch(
        loadMintDetails({
          //
          chainId: profile.chainId,
          address: profile.address,
          provider: library,
        }),
      );
    }
  }, [profile, library, dispatch]);

  return (
    <>
      <Container maxWidth={false}>
        <Grid container columnSpacing={10}>
          <Grid item md={9} lg={9} justifyContent="center">
            <MintMainContent //
              whiteList={whiteList}
              price={price}
              nftsLimit={nftsLimit}
              nftsMinted={nftsMinted}
              status={status}
              mintGeneration={mintGeneration}
            />
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'end' }} item sm={12} md={3} lg={3}>
            <WalletBalance //
              styles={{ display: 'flex', flexDirection: 'column', alignSelf: 'start' }}
              address={profile.address}
              gainsBalance={profile.balances.gains}
              proteinBalance={profile.balances.protein}
              avaxBalance={profile.balances.avax}
              apiStatus={profile.status}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AppContent;
