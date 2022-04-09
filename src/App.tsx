import React from 'react';
import AppContent from './AppContent';
import ErrorBoundary from './containers/Error/ErrorBoundary';
import './index.css';
const App = () => {
  return (
    <>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </>
  );
};

export default App;
