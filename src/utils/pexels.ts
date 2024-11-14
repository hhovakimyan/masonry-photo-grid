import { PhotoApiItem, PhotoUiDetailsItem, PhotoUiItem } from '../types/photos';
import { GetPhotoResponse } from 'api/models/PexelPhotos';

export const filterPhotoApiListItemProps = (photoApiItems: PhotoApiItem[]): PhotoUiItem[] => {
  return photoApiItems.map((photoApiItem) => {
    return {
      id: photoApiItem.id,
      width: photoApiItem.width,
      height: photoApiItem.height,
      photographer: photoApiItem.photographer,
      placeholderColor: photoApiItem.avg_color,
      alt: photoApiItem.alt,
      src: photoApiItem.src.original,
      pageUrl: photoApiItem.url,
    }
  });
};

export const filterPhotoItemProps = (photoApiItem: GetPhotoResponse): PhotoUiDetailsItem => {
  return {
    id: photoApiItem.id,
    photographer: photoApiItem.photographer,
    placeholderColor: photoApiItem.avg_color,
    alt: photoApiItem.alt,
    src: photoApiItem.src.original,
    pageUrl: photoApiItem.url,
  }
};

export const buildSrcSetImageUrl = (src: string, width: number) => {
  return `${src}?auto=compress&cs=tinysrgb&w=${width} ${width}w`;
}