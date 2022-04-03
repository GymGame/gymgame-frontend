import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import MintAlready from './MintedAlready';
import MintWhiteList from './MintWhiteList';
import { useParams } from 'react-router-dom';
import MintNotReady from './MintNotReady';

export type routeParams = {
  tab: string;
};

const MintMainContent = () => {
  const [amount, setAmount] = React.useState<number>(3); // fetch from BE
  const routeParams = useParams() as routeParams;
  const { tab } = routeParams;

  const mintedNumber = 4322; // fetch from BE
  const totalNumber = 10000; // fetch from BE
  const singlePrice = tab === 'public' ? 3.5 : 2.5; // fetch from BE
  const handleAdd = () => setAmount(amount + 1);
  const handleRemove = () => {
    if (amount > 0) setAmount(amount - 1);
  };

  return (
    <Container
      disableGutters
      maxWidth="lg"
      sx={{
        m: '1rem auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h1" component="div" gutterBottom>
        Mint
      </Typography>
      {routeParams && tab === 'not-ready' ? (
        <MintNotReady />
      ) : (
        <>
          <MintAlready mintedNumber={mintedNumber} totalNumber={totalNumber} />
          <MintWhiteList
            totalPrice={singlePrice * amount}
            singlePrice={singlePrice}
            initialNumber={amount}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
        </>
      )}
    </Container>
  );
};

export default React.memo(MintMainContent);
