import styled from 'styled-components';
import { PHOTO_GRID_ITEM_WIDTH } from 'constants/layout';

export const StyledPhotosGrid = styled.div`
  columns: auto ${PHOTO_GRID_ITEM_WIDTH}px;
  column-gap: 1rem;
`;