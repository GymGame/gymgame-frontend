import React from 'react';
import { Button, styled, ButtonProps as MuiButtonProps } from '@mui/material';

export type ButtonProps = MuiButtonProps & { children: React.ReactNode };

const button = (props: ButtonProps) => {
  return <Button>{props.children}</Button>;
};

export default button;
