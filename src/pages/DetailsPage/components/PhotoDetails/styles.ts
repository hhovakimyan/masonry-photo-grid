import styled from 'styled-components';

export const StyledPhotoContent = styled.div`
    display: flex;
    column-gap: 4rem;
`;

export const StyledImageWrapper = styled.div`
    height: calc(100vh - 15rem);

    img {
       max-height: 100%; 
    }
`;

export const StyledPhotoDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    > p {
        font-size: 1.25rem;
        line-height: 1.75rem;
        margin: 0;
        
        a {
            color: inherit;
        }
    }
`

export const StyledPhotoDetailLabel = styled.span`
    font-weight: bold;
    margin-right: 0.5rem;
    white-space: nowrap;
`

export const StyledPhotoDetailValue = styled.span`
    color: #acacac;
`;