import styled from 'styled-components';

export const StyledPhotosGridWrapper = styled.div`
    max-width: calc(100vw - 5rem);
    width: 90%;
    max-height: calc(100vh - 4.75rem - 4.5rem - 2em - 5rem);
    overflow-y: auto;
    margin: 4.75rem auto 2rem;

    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
        width: 0.75rem;
        background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #c6c5c5;
        cursor: pointer;
    }
`;

export const StyledLoadingWrapper = styled.div`
    margin-top: 1.25rem;
    text-align: center;
`