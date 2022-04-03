import React from 'react';
import {
  Button,
  CircularProgress,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

interface MyProps {
  title: string;
  body: string;
  isOpen: boolean;
  buttonProps?: {
    text: string;
    onClickHandler: () => void;
  };
  isLoading: boolean;
}

const Dialog = ({ title, body, isOpen, buttonProps, isLoading }: MyProps) => {
  const renderDialogAction = () => {
    if (!buttonProps) {
      return null;
    }

    const { onClickHandler, text } = buttonProps;

    if (isLoading) {
      return <CircularProgress size="4rem" thickness={2.5} sx={{ color: (theme) => theme.palette.text.primary }} />;
    }

    return (
      <Button onClick={onClickHandler} sx={{ padding: '1.2rem 2.7rem' }} variant="contained">
        {text}
      </Button>
    );
  };

  return (
    <MuiDialog
      open={isOpen}
      maxWidth="lg"
      fullWidth={true}
      sx={{
        '.MuiDialog-paper': {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '3rem 0 5rem',
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: `rgba(33, 33, 33, 1)`,
        },
      }}
    >
      <DialogTitle
        sx={{
          textDecoration: 'uppercase',
          fontSize: '6rem', //96px
          fontFamily: 'Helvetica Pro Outlined',
          color: (theme) => theme.palette.text.tertiary,
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent sx={{ mb: '1.5rem' }}>
        <Typography variant="body1">{body}</Typography>
      </DialogContent>
      <DialogActions>{renderDialogAction()}</DialogActions>
    </MuiDialog>
  );
};

export default Dialog;
