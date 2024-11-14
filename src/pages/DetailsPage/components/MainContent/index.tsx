import { StyledHeader, StyledLoadingWrapper, StyledWrapper } from './styles';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoUiDetailsItem } from 'types/photos';
import { pexelsPhotoService } from 'api';
import { filterPhotoItemProps } from 'utils/pexels';
import LoadingSpinner from 'components/LoadingSpinner';
import { useErrorBoundary } from 'react-error-boundary';
import PhotoDetails from '../PhotoDetails';

type Props = {
  id: string;
};

const Index: React.FC<Props> = ({id}) => {
  const { showBoundary } = useErrorBoundary();

  const [photoDetails, setPhotoDetails] = useState<PhotoUiDetailsItem | null>(null);
  const [isPhotoDetailsLoading, setIsPhotoDetailsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id && !photoDetails) {
      setIsPhotoDetailsLoading(true);

      pexelsPhotoService
        .getPhotoDetails(id)
        .then((response) => {
          setPhotoDetails(filterPhotoItemProps(response));
        })
        .catch((error) => {
          showBoundary(error);
        })
        .finally(() => {
          setIsPhotoDetailsLoading(false);
        })
    }
  }, [id, photoDetails]);


  return (
    <StyledWrapper>
      {
        isPhotoDetailsLoading &&
        <StyledLoadingWrapper>
          <LoadingSpinner />
        </StyledLoadingWrapper>
      }
      {
        photoDetails &&
        <>
          <StyledHeader>
            <Link to="/" title="Head back to grid">Back</Link>
          </StyledHeader>
          <PhotoDetails {...photoDetails} />
        </>
      }
    </StyledWrapper>
  )
}

export default Index;