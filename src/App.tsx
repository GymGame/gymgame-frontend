import React from "react";
import AppContent from "./AppContent";
import ErrorBoundary from "./containers/Error";
import ErrorModal from "./containers/Error/ErrorModal";
import "./index.css";
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
