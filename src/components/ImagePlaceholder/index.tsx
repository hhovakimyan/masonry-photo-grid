import React from 'react';
import { StyledImgPlaceholder } from './styles';
import LoadingSpinner from 'components/LoadingSpinner';

type Props = {
  backgroundColor: string;
}

const ImagePlaceholder: React.FC<Props> = ({backgroundColor}) => {
   return (
     <StyledImgPlaceholder style={{backgroundColor}}>
        <LoadingSpinner color="#fff" />
     </StyledImgPlaceholder>
   );
}

export default ImagePlaceholder;