import styled from 'styled-components';

export const StyledPhotosGridWrapper = styled.div`
  max-width: 1400px;
  width: 90%;  
    
  margin: 8.75rem auto 0;
`;

export const StyledPhotosGrid = styled.div`
  columns: 3 auto;
  column-gap: 1rem;
  //display: grid;
  //grid-template-columns: repeat(auto-fill, 400px);
  //grid-auto-flow: dense; 
`;

export const StyledLoadingWrapper = styled.div`
    text-align: center;
`