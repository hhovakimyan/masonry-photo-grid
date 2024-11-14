import {
  StyledImageWrapper,
  StyledPhotoContent,
  StyledPhotoDetailLabel,
  StyledPhotoDetailsWrapper,
  StyledPhotoDetailValue,
} from './styles';
import GridImage from 'components/GridImage';
import React from 'react';

type Props = {
  src: string;
  alt: string;
  placeholderColor: string;
  photographer: string;
  pageUrl: string;
}

const PhotoDetails: React.FC<Props> = ({src, alt, placeholderColor, photographer, pageUrl}) => {
  return (
    <StyledPhotoContent>
      <StyledImageWrapper>
        <GridImage src={src} alt={alt} placeholderColor={placeholderColor} />
      </StyledImageWrapper>
      <StyledPhotoDetailsWrapper>
        <p>
          <StyledPhotoDetailLabel>Photographer:</StyledPhotoDetailLabel>
          <StyledPhotoDetailValue>{photographer}</StyledPhotoDetailValue>
        </p>
        <p>
          <StyledPhotoDetailLabel>Page URL:</StyledPhotoDetailLabel>
          <StyledPhotoDetailValue>
            <a
              href={pageUrl}
              target="_blank"
              rel="noreferrer"
              title="Visit this webpage to see more photos like this">
              {pageUrl}
            </a>
          </StyledPhotoDetailValue>
        </p>
      </StyledPhotoDetailsWrapper>
    </StyledPhotoContent>
  )
}

export default PhotoDetails;