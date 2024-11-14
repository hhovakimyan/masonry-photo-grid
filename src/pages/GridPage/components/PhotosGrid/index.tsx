import { useCallback, useEffect, useState } from 'react';
import { pexelsPhotoService } from 'api';
import { useErrorBoundary } from 'react-error-boundary';
import { PhotoUiItem } from 'types/photos';
import PhotoGridItem from '../PhotoGridItem';
import LoadingSpinner from 'components/LoadingSpinner';
import { StyledLoadingWrapper, StyledPhotosGrid, StyledPhotosGridWrapper } from './styles';

const PHOTOS_COUNT_PER_PAGE = 10;

const PhotosGrid = () => {
  const { showBoundary } = useErrorBoundary();

  const [photos, setPhotos] = useState<PhotoUiItem[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPhotosCount, setTotalPhotosCount] = useState<number>(0);
  const [isPhotosListLoading, setIsPhotosListLoading] = useState<boolean>(false);

  const loadPhotoItems = useCallback(() => {
    if (isPhotosListLoading) {
      return;
    }

    setIsPhotosListLoading(true);

    pexelsPhotoService
      .listPhotos(page + 1, PHOTOS_COUNT_PER_PAGE)
      .then((response) => {
        if (page === 0) {
          setPhotos(response.photos);
        } else {
          setPhotos((prev) => {
            return [
              ...prev,
              ...response.photos,
            ]
          });
        }

        setPage(response.page);
        setTotalPhotosCount(response.total_results);
      })
      .catch((error) => {
        showBoundary(error);
      })
      .finally(() => {
        setIsPhotosListLoading(false);
      })
  }, [isPhotosListLoading, page]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 50 &&
      !isPhotosListLoading &&
      photos.length < totalPhotosCount
    ) {
      loadPhotoItems();
    }
  }, [isPhotosListLoading, loadPhotoItems, totalPhotosCount, photos.length]);

  useEffect(() => {
    loadPhotoItems();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <StyledPhotosGridWrapper>
      <StyledPhotosGrid>
        {
          photos.map((photo) => {
            return <PhotoGridItem key={`photo-${photo.id}`} data={photo} />
          })
        }
      </StyledPhotosGrid>
      {
        isPhotosListLoading &&
          <StyledLoadingWrapper>
            <LoadingSpinner />
          </StyledLoadingWrapper>
      }
    </StyledPhotosGridWrapper>
  );
}

export default PhotosGrid;