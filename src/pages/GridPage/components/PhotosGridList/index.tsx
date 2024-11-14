import PhotoGridItem from '../PhotoGridItem';
import { PhotoUiItem } from 'types/photos';
import React, { Ref } from 'react';
import { StyledPhotosGrid } from './styles';

type Props = {
  photos: PhotoUiItem[];
  lastPhotoItemRef: Ref<HTMLDivElement>;
}

const PhotosGridList: React.FC<Props> = ({ photos, lastPhotoItemRef }) => {
  return (
    <StyledPhotosGrid>
      {
        photos.map((photo, index) => {
          if (index === photos.length - 1) {
            return (
              <div ref={lastPhotoItemRef} key={`photo-${photo.id}`}>
                <PhotoGridItem {...photo} />
              </div>
            )
          }

          return (
            <PhotoGridItem key={`photo-${photo.id}`} {...photo} />
          )
        })
      }
    </StyledPhotosGrid>
  )
}

export default React.memo(PhotosGridList);