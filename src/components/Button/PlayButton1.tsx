import React from 'react';
import { Button, styled } from '@mui/material';

type MyProps = {
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  styles?: React.CSSProperties;
};

const PlayButton = ({ onClickHandler, styles }: MyProps) => {
  const StyledButton = styled(Button)({
    width: '13rem',
    height: '13rem',
    backgroundImage: 'linear-gradient(90deg, #00C0FF 0%, #FFCF00 49%, #FC4F4F 80%, #00C0FF 100%)',
    borderRadius: '1000px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontSize: '20px',
    fontWeight: 'bold',
    '&:after': {
      content: 'attr(data-text)',
      borderRadius: '1000px',
      width: '11.5rem',
      height: '11.5rem',
      backgroundColor: '#191919',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '&:hover': {
      animation: 'slidebg 4s linear infinite',
      boxShadow: '0 0 24px rgba(255, 255, 255, .5)',
    },
    '@keyframes slidebg': {
      to: {
        backgroundPosition: '20vw',
      },
    },
    ...styles,
  });

  return (
    <StyledButton //
      data-text="Train"
      disableRipple={true}
      onClick={onClickHandler}
    ></StyledButton>
  );
};

export default PlayButton;
