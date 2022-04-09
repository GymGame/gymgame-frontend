import React from 'react';
import { GlobalErrorType } from '../errorSlice';
import ConnectWalletDialog from './Dialogs/ConnectWalletDialog';
import InvalidAccountWalletDialog from './Dialogs/InvalidAccountWalletDialog';
import NetworkWalletDialog from './Dialogs/NetworkWalletDialog';

class WalletErrorDialogFactory {
  static generate = (type: GlobalErrorType) => {
    switch (type) {
      case GlobalErrorType.WalletNotConencted:
        return <ConnectWalletDialog />;
      case GlobalErrorType.UnsupportedChain:
        return <NetworkWalletDialog />;
      case GlobalErrorType.InvalidAccount:
        return <InvalidAccountWalletDialog />;
    }
  };
}

export default WalletErrorDialogFactory;
