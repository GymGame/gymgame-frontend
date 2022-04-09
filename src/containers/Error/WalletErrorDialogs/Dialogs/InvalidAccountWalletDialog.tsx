import React from 'react';
import Dialog from '../../../../components/Dialog';
import { AvaxIcon } from '../../../../components/Icons';
import { useAppSelector } from '../../../../hooks';
import { GlobalErrorType } from '../../errorSlice';

const NetworkWalletDialog = () => {
  const globalErrors = useAppSelector((state) => state.globalErrors);

  const isOpen = globalErrors.errors.some((error) => error.type === GlobalErrorType.InvalidAccount);

  return (
    <Dialog
      Icon={AvaxIcon}
      title="WRONG ADDRESS"
      body="You're currently using a different address from the one you connected with. Please disconnect prior to changing accounts."
      isOpen={isOpen}
    />
  );
};

export default NetworkWalletDialog;
