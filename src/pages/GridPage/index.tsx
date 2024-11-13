import { StyledPageTitle, StyledWrapper } from './styles';
import PhotosGrid from './components/PhotosGrid';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryFallback from 'components/ErrorBoundaryFallback';

const GridPage = () => {
    return (
        <StyledWrapper>
            <StyledPageTitle>Welcome to Pexels Photo Grid</StyledPageTitle>
            <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
              <PhotosGrid />
            </ErrorBoundary>
        </StyledWrapper>
    );
}

export default GridPage;