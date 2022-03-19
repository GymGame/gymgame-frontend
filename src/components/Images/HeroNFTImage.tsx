import React from 'react';
import { styled } from '@mui/material/styles';

type MyProps = {
  styles?: React.CSSProperties;
};

const HeroNFTImage = ({ styles }: MyProps) => {
  const StyledImage = styled('img')({ ...styles });

  return <StyledImage src="/assets/images/hero-icon.png" alt="Hero NFT Image" />;
};

export default HeroNFTImage;
