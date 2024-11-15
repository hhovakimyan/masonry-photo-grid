import styled from 'styled-components';

export const StyledWrapper = styled.div`
    max-width: 90vw;
    margin: 5rem auto 0;

    @media screen and (max-width: 1024px) {
        margin-top: 2rem;
    }
`;

export const StyledLoadingWrapper = styled.div`
    margin-bottom: 1.25rem;
    text-align: center;
`

export const StyledHeader = styled.div`
    display: flex;
    justify-content: right;
    margin-bottom: 4rem;

    a {
        text-decoration: none;
        color: #e869ca;
        font-size: 1.25rem;

        &::before {
            content: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBMaWNlbnNlOiBDQyBBdHRyaWJ1dGlvbi4gTWFkZSBieSBzYWxlc2ZvcmNlOiBodHRwczovL2xpZ2h0bmluZ2Rlc2lnbnN5c3RlbS5jb20vIC0tPgo8c3ZnIGZpbGw9IiNlODY5Y2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCgkgdmlld0JveD0iMCAwIDUyIDUyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MiA1MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxwYXRoIGQ9Ik00OC42LDIzSDE1LjRjLTAuOSwwLTEuMy0xLjEtMC43LTEuN2w5LjYtOS42YzAuNi0wLjYsMC42LTEuNSwwLTIuMWwtMi4yLTIuMmMtMC42LTAuNi0xLjUtMC42LTIuMSwwCglMMi41LDI1Yy0wLjYsMC42LTAuNiwxLjUsMCwyLjFMMjAsNDQuNmMwLjYsMC42LDEuNSwwLjYsMi4xLDBsMi4xLTIuMWMwLjYtMC42LDAuNi0xLjUsMC0yLjFsLTkuNi05LjZDMTQsMzAuMSwxNC40LDI5LDE1LjMsMjkKCWgzMy4yYzAuOCwwLDEuNS0wLjYsMS41LTEuNHYtM0M1MCwyMy44LDQ5LjQsMjMsNDguNiwyM3oiLz4KPC9zdmc+");
            height: 1.25rem;
            width: 1.25rem;
            display: inline-block;
            margin-right: .25rem;
            vertical-align: -15%;
        }
    }
`;