import React from 'react';
import { GlobalErrorType } from '../errorSlice';
import WalletErrorDialogFactory from './WalletErrorDialogFactory';

const WalletErrorDialogsContainer = () => {
  //this can be improved
  return (
    <>
      {WalletErrorDialogFactory.generate(GlobalErrorType.WalletNotConencted)}
      {WalletErrorDialogFactory.generate(GlobalErrorType.UnsupportedChain)}
      {WalletErrorDialogFactory.generate(GlobalErrorType.InvalidAccount)}
    </>
  );
};

export default WalletErrorDialogsContainer;
