import { useParams } from 'react-router-dom';
import ItemsDetailsList from './common/ItemsDetailsList';
import useFetchDetails from '../hooks/useFetchDetails';

const TvShowDetails = () => {
  // Get the TV show ID from the URL
  const { id } = useParams(); 
  // Use the hook for TV shows
  const { details: show, cast, trailer,  loading, error } = useFetchDetails('tv', id); 

  return (
    <div className="container min-w-full">
      <ItemsDetailsList
        title={show ? show.name : 'TV Show Details'}
        details={show}
        cast={cast}
        loading={loading}
        error={error}
        trailer={trailer}
      />
    </div>
  );
};

export default TvShowDetails;
