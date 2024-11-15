import styled from 'styled-components';

export const StyledPhotoContent = styled.div`
    display: flex;
    column-gap: 4rem;
    justify-content: center;
    
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        row-gap: 2rem;
    }
`;

export const StyledImageWrapper = styled.div`
    max-width: 500px;
    min-width: 300px;
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

    @media screen and (max-width: 1024px) {
        margin-bottom: 2rem;
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