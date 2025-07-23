import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Map Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <ErrorWrapper>
          <ErrorMessage>Unable to load map</ErrorMessage>
          <ErrorSubtext>Please check your map API configuration</ErrorSubtext>
        </ErrorWrapper>
      );
    }

    return this.props.children;
  }
}

const ErrorWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const ErrorMessage = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #666;
  margin-bottom: 8px;
`;

const ErrorSubtext = styled.div`
  font-size: 14px;
  color: #999;
`;

export default ErrorBoundary;