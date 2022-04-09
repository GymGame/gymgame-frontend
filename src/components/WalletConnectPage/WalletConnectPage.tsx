import React from 'react';
import WalletErrorDialogsContainer from '../../containers/Error/WalletErrorDialogs/WalletErrorDialogsContainer';
import useConnectWallet from '../../hooks/useConnectWallet';
import useEagerConnect from '../../hooks/useEagerConnect';

const WalletConnectPage: React.FC = ({ children }) => {
  const triedEagerConnect = useEagerConnect();

  useConnectWallet();

  return (
    <>
      {triedEagerConnect && <WalletErrorDialogsContainer />}
      {children}
    </>
  );
};

export default WalletConnectPage;
