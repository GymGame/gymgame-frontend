import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

class ErrorBoundary extends React.Component<Props, State> {
  readonly state: State = {
    error: undefined,
    errorInfo: undefined,
  };

  public static getDerivedStateFromError(error: Error, errorInfo: React.ErrorInfo): State {
    console.log('error is caught', error);
    return {
      error: error,
      errorInfo: errorInfo,
    };
  }

  render() {
    if (this.state.error) {
      return <>Has Error</>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
