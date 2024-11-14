import { useCallback, useEffect, useRef, useState } from 'react';
import { pexelsPhotoService } from 'api';
import { useErrorBoundary } from 'react-error-boundary';
import { PhotoUiItem } from 'types/photos';
import PhotoGridItem from '../PhotoGridItem';
import LoadingSpinner from 'components/LoadingSpinner';
import { StyledLoadingWrapper, StyledPhotosGrid, StyledPhotosGridWrapper } from './styles';

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
      <StyledPhotosGrid>
        {
          photos.map((photo, index) => {
            if (index === photos.length - 1) {
              return (
                <div ref={lastPhotoItemRef} key={`photo-${photo.id}`}>
                  <PhotoGridItem data={photo} />
                </div>
              )
            }

            return (
              <PhotoGridItem key={`photo-${photo.id}`} data={photo} />
            )
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