import { StyledPageTitle, StyledWrapper } from './styles';
import PhotosGrid from './components/PhotosGrid';

const GridPage = () => {
    return (
        <StyledWrapper>
            <StyledPageTitle>Welcome to Pexels Photo Grid</StyledPageTitle>
            <PhotosGrid />
        </StyledWrapper>
    );
}

export default GridPage;