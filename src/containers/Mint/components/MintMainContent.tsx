import React from 'react';
import { Container, Typography } from '@mui/material';
import MintAlready from './MintedAlready';
import MintForm from './MintForm';
import { useParams } from 'react-router-dom';
import MintNotReady from './MintNotReady';
import MintSuccess from './MintSuccess';
import { ApiStatus } from '../../../constants';

export type routeParams = {
  tab: string;
};

type MyProps = {
  whiteList?: {
    price: string;
    userClaimableWhiteListNFTs: number;
  };
  price: string;
  nftsLimit: number;
  nftsMinted: number;
  status: ApiStatus;
  mintGeneration: number;
};

const MintMainContent = ({ status, whiteList, price, nftsLimit, nftsMinted, mintGeneration }: MyProps) => {
  const hasWhitelistNFTsToClaim = Boolean(whiteList?.userClaimableWhiteListNFTs);

  const nftPrice = hasWhitelistNFTsToClaim ? Number.parseFloat(whiteList!.price) : Number.parseFloat(price);

  const [amount, setAmount] = React.useState<number>(0);

  const isLoading = status === ApiStatus.Idle || status === ApiStatus.Pending;

  React.useEffect(() => {
    if (status === ApiStatus.Resolved) {
      if (hasWhitelistNFTsToClaim) {
        setAmount(whiteList!.userClaimableWhiteListNFTs);
        return;
      }

      setAmount(1);
    }
  }, [status]);

  const routeParams = useParams() as routeParams;
  const { tab } = routeParams;

  const handleAdd = () => {
    setAmount(amount + 1);
  };

  const handleRemove = () => {
    if (amount > 0) setAmount(amount - 1);
  };

  const toDisableAddButton = () => {
    const hasHitMintedLimit = amount + nftsMinted >= nftsLimit;
    if (hasWhitelistNFTsToClaim) {
      return amount >= whiteList!.userClaimableWhiteListNFTs || hasHitMintedLimit;
    }

    return hasHitMintedLimit;
  };

  const toDisableRemoveButton = () => {
    return amount <= 0;
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        m: '1rem auto',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '831px',
      }}
    >
      {routeParams && tab === 'success' ? (
        <Typography variant="h3" component="div" sx={{ mb: '32px' }}>
          Minting{' '}
          <span
            style={{
              backgroundColor: '#9AFF2A',
              backgroundImage: 'linear-gradient(45deg, #9AFF2A, #3BFF04)',
              backgroundSize: '100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            successful
          </span>
          !
        </Typography>
      ) : (
        <Typography variant="h1" component="div" gutterBottom>
          Mint
        </Typography>
      )}
      {mintGeneration === -1 ? (
        <MintNotReady />
      ) : tab === 'success' ? (
        <MintSuccess />
      ) : (
        <>
          <MintAlready mintedNumber={nftsMinted} totalNumber={nftsLimit} isLoading={isLoading} />
          <MintForm
            isOnWhiteList={hasWhitelistNFTsToClaim}
            isLoading={isLoading}
            totalPrice={nftPrice * amount}
            singlePrice={nftPrice}
            initialNumber={amount}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
            disableAdd={toDisableAddButton()}
            disableRemove={toDisableRemoveButton()}
          />
        </>
      )}
    </Container>
  );
};

export default React.memo(MintMainContent);
