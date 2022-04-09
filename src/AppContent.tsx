import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Mint from './containers/Mint';
import Screen from './components/Screen';
import MintFail from './containers/Mint/components/MintFail';
import WalletConnectPage from './components/WalletConnectPage/WalletConnectPage';

const AppContent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen />}>
          <Route index element={<Home />} />
        </Route>

        <Route
          path="/"
          element={
            <WalletConnectPage>
              <Screen />
            </WalletConnectPage>
          }
        >
          <Route path="/mint" element={<Mint />} />
          <Route path="/mint/fail" element={<MintFail />} />
          <Route path="/mint/:tab" element={<Mint />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppContent;
