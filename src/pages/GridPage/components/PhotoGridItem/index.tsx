import React, { useCallback, useEffect, useRef, useState } from 'react';

import { StyledPhotoGridItem } from './styles';
import ImagePlaceholder from 'components/ImagePlaceholder';
import { calculateImageNewHeightWithRatio } from 'utils/images';
import { useNavigate } from 'react-router-dom';
import GridImage from 'components/GridImage';

type Props = {
  id: string;
  src: string;
  alt: string;
  placeholderColor: string;
  width: number;
  height: number;
  photographer: string;
  pageUrl: string;
}

const PHOTO_GRID_ITEM_WIDTH = 400; // TODO revert this when implementing responsibility

const PhotoGridItem: React.FC<Props> = ({
  id,
  src,
  alt,
  placeholderColor,
  width,
  height,
  photographer,
  pageUrl,
}) => {
  const navigate = useNavigate();

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

  const newImgHeight = calculateImageNewHeightWithRatio(
    PHOTO_GRID_ITEM_WIDTH,
    width,
    height
  );

  const onGridItemClick = useCallback(() => {
    navigate(
      `/details/${id}`,
      {
        state: {
          src,
          alt,
          placeholderColor,
          photographer,
          pageUrl,
        }
      }
    );
  }, [id, src, alt, placeholderColor, photographer, pageUrl]);

  return (
    <StyledPhotoGridItem
      ref={gridItemRef}
      style={{width: PHOTO_GRID_ITEM_WIDTH, height: newImgHeight}}
      onClick={onGridItemClick}
    >
      {
        isPhotoInViewPort ? (
          <GridImage src={src} alt={alt} placeholderColor={placeholderColor} />
        ) : (
          <ImagePlaceholder backgroundColor={placeholderColor} />
        )
      }
    </StyledPhotoGridItem>
  )
}

export default React.memo(PhotoGridItem);