import React from 'react';
import Dialog from '../../../../components/Dialog';
import { AvaxIcon } from '../../../../components/Icons';
import { useAppSelector } from '../../../../hooks';
import { GlobalErrorType } from '../../errorSlice';

const NetworkWalletDialog = () => {
  const globalErrors = useAppSelector((state) => state.globalErrors);
  const isOpen = globalErrors.errors.some((error) => error.type === GlobalErrorType.UnsupportedChain);

  return (
    <Dialog //
      Icon={<AvaxIcon />}
      title="WRONG NETWORK"
      body="You need to change to the Avalanche network to enter GymGame."
      isOpen={isOpen}
    />
  );
};

export default NetworkWalletDialog;
