import { useEffect } from 'react';
import { pexelsPhotoService } from 'api';

const PhotosGrid = () => {
  useEffect(() => {
    pexelsPhotoService.listPhotos(1, 10);
  }, []);

  return <></>;
}

export default PhotosGrid;