import { StyledMainLoading } from './styles';
import LoadingSpinner from '../LoadingSpinner';

const MainLoading = () => {
  return (
    <StyledMainLoading>
      <LoadingSpinner color="#faa" />
    </StyledMainLoading>
  );
}

export default MainLoading;