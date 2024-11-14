import { useCallback, useEffect, useRef, useState } from 'react';
import { pexelsPhotoService } from 'api';
import { useErrorBoundary } from 'react-error-boundary';
import { PhotoUiItem } from 'types/photos';
import LoadingSpinner from 'components/LoadingSpinner';
import { StyledLoadingWrapper, StyledPhotosGridWrapper } from './styles';
import { filterPhotoApiListItemProps } from 'utils/pexels';
import PhotosGridList from '../PhotosGridList';

const PHOTOS_COUNT_PER_PAGE = 24;

const PhotosGrid = () => {
  const { showBoundary } = useErrorBoundary();

  const [photos, setPhotos] = useState<PhotoUiItem[]>([]);
  const [page, setPage] = useState<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [isPhotosListLoading, setIsPhotosListLoading] = useState<boolean>(true);

  const lastPhotoItemRef = useRef<HTMLDivElement>(null);

  const loadPhotoItems = useCallback(() => {
    setIsPhotosListLoading(true);

    pexelsPhotoService
      .listPhotos(page + 1, PHOTOS_COUNT_PER_PAGE)
      .then((response) => {
        const photoUiItems = filterPhotoApiListItemProps(response.photos);
        if (page === 0) {
          setPhotos(photoUiItems);
        } else {
          setPhotos((prev) => {
            return [
              ...prev,
              ...photoUiItems,
            ]
          });
        }

        setPage(response.page);
        setHasNextPage(!!response.next_page);
      })
      .catch((error) => {
        showBoundary(error);
      })
      .finally(() => {
        setIsPhotosListLoading(false);
      })
  }, [page]);

  useEffect(() => {
    loadPhotoItems();
  }, []);

  useEffect(() => {
    if (!lastPhotoItemRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isPhotosListLoading && hasNextPage) {
          loadPhotoItems();
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(lastPhotoItemRef.current);

    return () => {
      observer.disconnect();
    }
  }, [isPhotosListLoading, hasNextPage, loadPhotoItems]);

  return (
    <StyledPhotosGridWrapper>
      <PhotosGridList photos={photos} lastPhotoItemRef={lastPhotoItemRef} />
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