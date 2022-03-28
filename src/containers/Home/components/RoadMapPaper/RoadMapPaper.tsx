import React from 'react';
import { Paper, styled, Typography } from '@mui/material';

type MyProps = {
  title: string;
  children: React.ReactNode;
  cardNumber: number;
  styles?: React.CSSProperties;
};

const RoadMapPaper = ({ title, children, cardNumber, styles = {} }: MyProps) => {
  const StyledPaper = styled(Paper)({
    background: `url('/assets/images/backgrounds/roadmap-phase${cardNumber}.png') no-repeat center/cover`,
    height: '34rem',
    width: '30.25rem',
    padding: '1.5rem 2rem',
    ...styles,
  });
  return (
    <StyledPaper>
      <Typography variant="h1">{title}</Typography>
      {children}
    </StyledPaper>
  );
};

export default RoadMapPaper;
