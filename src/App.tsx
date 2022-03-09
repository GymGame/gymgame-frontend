import React from "react";
import AppContent from "./AppContent";
import ErrorBoundary from "./containers/Error";
import ErrorModal from "./containers/Error/errorModal";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <ErrorModal />
        <AppContent />
      </ErrorBoundary>
    </>
  );
};

export default App;
