import { useParams } from 'react-router-dom';
import ShowDetails from './common/ShowDetails'
import Loading from './common/Loading';
import useFetchDetails from '../hooks/useFetchDetails';

const TvShowDetails = () => {
  const { id } = useParams(); // Get the TV show ID from the URL
  const { details: show, cast, loading, error } = useFetchDetails('tv', id); // Use the hook for TV shows

  if (loading) return <Loading />;

  if (error) return <p className="text-red-500 w-52">{error}</p>;

  return (
    <div className="container min-w-full">
      <ShowDetails show={show} cast={cast} />
    </div>
  );
};

export default TvShowDetails;
