import { StyledLoadingSpinner } from './styles';
import React from 'react';

type Props = {
  color?: string;
}

type LoadingSpinnerOuterStyles = {
  borderColor?: string;
  borderBottomColor?: string;
};

const LoadingSpinner: React.FC<Props> = ({color}) => {
  let spinnerOutsideStyles: LoadingSpinnerOuterStyles = {};
  if (color) {
    spinnerOutsideStyles.borderColor = color;
    spinnerOutsideStyles.borderBottomColor = "transparent";
  }

  return <StyledLoadingSpinner style={spinnerOutsideStyles} />;
}

export default LoadingSpinner;