import React, { useEffect, useRef, useState } from 'react';

import { StyledImg, StyledPhotoGridItem } from './styles';
import ImagePlaceholder from 'pages/GridPage/components/ImagePlaceholder';
import { calculateImageNewHeightWithRatio } from 'utils/images';

type Props = {
  src: string;
  alt: string;
  avgColor: string;
  width: number;
  height: number;
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

const PhotoGridItem: React.FC<Props> = ({src, alt, avgColor, width, height}) => {
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false);
  const [isPhotoInViewPort, setIsPhotoInViewPort] = useState<boolean>(false);

  const gridItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridItemRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsPhotoInViewPort(true);
          setIsLoadingImage(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(gridItemRef.current);

    return () => {
      observer.disconnect();
    }
  }, []);

  const imgSrcSet = srcSetWidths.map((width) => {
    return `${src}?auto=compress&cs=tinysrgb&w=${width} ${width}w`;
  });

  const imgSizes = gridImageSizes.map(({maxWidth, imageWidth}) => {
    return `${maxWidth && `(max-width: ${maxWidth}px )`} ${imageWidth}`;
  })

  const defaultImgSrc = `${src}?auto=compress&cs=tinysrgb&w=500`;

  const newImgHeight = calculateImageNewHeightWithRatio(
    PHOTO_GRID_ITEM_WIDTH,
    width,
    height
  );

  return (
    <StyledPhotoGridItem
      ref={gridItemRef}
      style={{width: PHOTO_GRID_ITEM_WIDTH, height: newImgHeight}}>
      {
        isPhotoInViewPort ? (
          <>
            {isLoadingImage && <ImagePlaceholder backgroundColor={avgColor} />}
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
        ) : (
          <ImagePlaceholder backgroundColor={avgColor} />
        )
      }
    </StyledPhotoGridItem>
  )
}

export default React.memo(PhotoGridItem);