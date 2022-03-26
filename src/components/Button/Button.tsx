import React from 'react';
import { Button as MuiButton, styled, ButtonProps as MuiButtonProps } from '@mui/material';

export type ButtonProps = MuiButtonProps & { children: React.ReactNode };

const Button = (props: ButtonProps) => {
  return <MuiButton>{props.children}</MuiButton>;
};

export default Button;
