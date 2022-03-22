import React from 'react';
import { styled } from '@mui/material/styles';

type MyProps = {
  styles?: React.CSSProperties;
  imageName: string;
  altText: string;
};

const Image = ({ imageName, altText, styles }: MyProps) => {
  const StyledImage = styled('img')({ ...styles });

  return <StyledImage src={`/assets/images/${imageName}.png`} alt={altText} />;
};

export default Image;
