import ImagePlaceholder from '../ImagePlaceholder';
import React, { useState } from 'react';
import { buildSrcSetImageUrl } from 'utils/pexels';
import { StyledImg } from './styles';

type GridImageSizeProps = {
  maxWidth?: number;
  imageWidth?: string;
}

const srcSetWidths: number[] = [
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

type Props = {
  src: string;
  alt: string;
  placeholderColor: string;
}

const DEFAULT_IMAGE_WIDTH = 500;

const GridImage: React.FC<Props> = ({src, alt, placeholderColor}) => {
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true);

  const imgSrcSet = srcSetWidths.map(
    (width) => buildSrcSetImageUrl(src, width)
  );

  const imgSizes = gridImageSizes.map(({maxWidth, imageWidth}) => {
    return `${maxWidth && `(max-width: ${maxWidth}px )`} ${imageWidth}`;
  });

  const defaultImgSrc = buildSrcSetImageUrl(src, DEFAULT_IMAGE_WIDTH);

  return (
    <>
      {isLoadingImage && <ImagePlaceholder backgroundColor={placeholderColor} />}
      <StyledImg
        srcSet={imgSrcSet.join(', ')}
        sizes={imgSizes.join(', ')}
        src={defaultImgSrc}
        alt={alt}
        onLoad={() => {
          setIsLoadingImage(false);
        }}
      />
    </>
  )
}

export default GridImage;