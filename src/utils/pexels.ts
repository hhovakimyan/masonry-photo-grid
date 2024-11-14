import { PhotoApiItem, PhotoUiItem } from '../types/photos';

export const filterPhotoApiProps = (photoApiItems: PhotoApiItem[]): PhotoUiItem[] => {
  return photoApiItems.map((photoApiItem) => {
    return {
      id: photoApiItem.id,
      width: photoApiItem.width,
      height: photoApiItem.height,
      photographer: photoApiItem.photographer,
      avgColor: photoApiItem.avg_color,
      alt: photoApiItem.alt,
      src: photoApiItem.src.original,
    }
  });
};