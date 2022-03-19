import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Web3Provider } from '@ethersproject/providers';
import App from './App';
import theme from './theme';
import { CssBaseline } from '@mui/material';
import { Web3ReactProvider } from '@web3-react/core';
import { Provider } from 'react-redux';
import { store } from './store';
// import {ExternalProvider} from
function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  return library;
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <CssBaseline />
        <App />
      </Web3ReactProvider>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
