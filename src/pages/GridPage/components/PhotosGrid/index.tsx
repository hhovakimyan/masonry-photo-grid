import { useEffect } from 'react';
import { pexelsPhotoService } from 'api';
import { useErrorBoundary } from 'react-error-boundary';

const PhotosGrid = () => {
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    pexelsPhotoService
      .listPhotos(-1, 10)
      .catch((error) => {
        showBoundary(error);
      })
  }, []);

  return <></>;
}

export default PhotosGrid;