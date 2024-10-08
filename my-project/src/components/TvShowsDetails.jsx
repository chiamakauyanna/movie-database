import { useParams } from 'react-router-dom';
import ItemsDetailsList from './common/ItemsDetailsList';
import useFetchDetails from '../hooks/useFetchDetails';

const TvShowDetails = () => {
  const { id } = useParams(); // Get the TV show ID from the URL
  const { details: show, cast, loading, error } = useFetchDetails('tv', id); // Use the hook for TV shows

  return (
    <div className="container min-w-full">
      <ItemsDetailsList
        title={show ? show.name : 'TV Show Details'}
        details={show}
        cast={cast}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default TvShowDetails;
