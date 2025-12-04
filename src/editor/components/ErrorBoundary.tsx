import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  errorMessage?: string
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    const message = error instanceof Error ? error.message : String(error);
    return {hasError: true, errorMessage: message};
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error('Editor crashed:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{padding: 16}}>
          <h2>Something went wrong.</h2>
          <p style={{opacity: 0.8}}>{this.state.errorMessage}</p>
          <button onClick={() => this.setState({hasError: false, errorMessage: undefined})}>Try again</button>
        </div>
      );
    }
    return this.props.children as JSX.Element;
  }
}
