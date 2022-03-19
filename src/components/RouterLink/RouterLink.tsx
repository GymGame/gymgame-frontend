import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';

type MyProps = {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
  styles?: React.CSSProperties; //need better typing
};

const RouterLink = ({ to, children, isActive = false, styles = {} }: MyProps) => {
  const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: isActive ? theme.palette.text.primary : theme.palette.text.secondary,
    ...styles,
  }));

  return <StyledLink to={to}>{children}</StyledLink>;
};

export default RouterLink;
