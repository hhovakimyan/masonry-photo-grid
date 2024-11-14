import { useParams } from 'react-router-dom';
import Index from './components/MainContent';
import ErrorBoundaryFallback from 'components/ErrorBoundaryFallback';
import { ErrorBoundary } from 'react-error-boundary';

const DetailsPage = () => {
  const params = useParams();
  const photoId = params.id || '';

  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <Index id={photoId} />
    </ErrorBoundary>
  );
}

export default DetailsPage;