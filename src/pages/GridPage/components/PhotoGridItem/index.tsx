import React, { useState } from 'react';

import { PhotoUiItem } from 'types/photos';
import { StyledImg, StyledPhotoGridItem } from './styles';
import ImagePlaceholder from 'pages/GridPage/components/ImagePlaceholder';
import { calculateImageNewHeightWithRatio } from 'utils/images';

type Props = {
  data: PhotoUiItem;
}

type GridImageSizeProps = {
  maxWidth?: number;
  imageWidth?: string;
}

const srcSetWidths: number[] = [
  150,
  300,
  400,
  600,
  800,
  1200,
  1600,
];

const gridImageSizes: GridImageSizeProps[] = [
  {
    maxWidth: 650,
    imageWidth: 'calc((100vw - 45px) / 2)',
  },
  {
    maxWidth: 900,
    imageWidth: 'calc((100vw - 45px) / 2)',
  },
  {
    maxWidth: 1440,
    imageWidth: 'calc((100vw - 100px) / 3)',
  },
  {
    maxWidth: 1600,
    imageWidth: 'calc((100vw - 200px) / 3)',
  },
  {
    imageWidth: 'calc((1600px - 200px) / 3)',
  }
];

const PHOTO_GRID_ITEM_WIDTH = 400; // TODO revert this when implementing responsibility

const PhotoGridItem: React.FC<Props> = ({data}) => {
  const { src: { original }, alt, avg_color, width, height } = data;

  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true);

  const imgSrcSet = srcSetWidths.map((width) => {
    return `${original}?auto=compress&cs=tinysrgb&w=${width} ${width}w`;
  });

  const imgSizes = gridImageSizes.map(({maxWidth, imageWidth}) => {
    return `${maxWidth && `(max-width: ${maxWidth}px )`} ${imageWidth}`;
  })

  const defaultImgSrc = `${original}?auto=compress&cs=tinysrgb&w=500`;

  const newImgHeight = calculateImageNewHeightWithRatio(
    PHOTO_GRID_ITEM_WIDTH,
    width,
    height
  );

  return (
    <StyledPhotoGridItem
      style={{width: PHOTO_GRID_ITEM_WIDTH, height: newImgHeight}}>
      {isLoadingImage && <ImagePlaceholder backgroundColor={avg_color} />}
      <StyledImg
        srcSet={imgSrcSet.join(', ')}
        sizes={imgSizes.join(', ')}
        src={defaultImgSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => {
          setIsLoadingImage(false);
        }}
      />
    </StyledPhotoGridItem>
  )
}

export default PhotoGridItem;