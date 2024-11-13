import React from 'react';
import { StyledErrorBoundaryMessage, StyledErrorBoundaryTitle, StyledErrorBoundaryWrapper } from './styles';

type Props = {
  error: { message: string };
}

const ErrorBoundaryFallback: React.FC<Props> = ({ error }) => {
  return (
    <StyledErrorBoundaryWrapper role="alert">
      <StyledErrorBoundaryTitle>Something went really wrong!:</StyledErrorBoundaryTitle>
      <StyledErrorBoundaryMessage>{error.message}</StyledErrorBoundaryMessage>
    </StyledErrorBoundaryWrapper>
  );
}

export default ErrorBoundaryFallback;