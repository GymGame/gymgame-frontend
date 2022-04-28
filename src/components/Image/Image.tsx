import React from 'react';
import { CSSObject, styled } from '@mui/material/styles';

type MyProps = {
  styles?: CSSObject;
  imageName: string;
  altText: string;
};

const Image = ({ imageName, altText, styles }: MyProps) => {
  const StyledImage = styled('img')({ ...styles });

  return <StyledImage src={`/assets/images/${imageName}.png`} alt={altText} />;
};

export default Image;
