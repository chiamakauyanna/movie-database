import { useParams } from 'react-router-dom';
import TvShowDetail from './common/TvShowDetail'
import Loading from './common/Loading';
import useFetchDetails from '../hooks/useFetchDetails';

const TvShowDetails = () => {
  const { id } = useParams(); // Get the TV show ID from the URL
  const { details: show, cast, loading, error } = useFetchDetails('tv', id); // Use the hook for TV shows

  if (loading) return <Loading />;

  if (error) return (
    <div className="w-screen flex justify-center my-28 h-screen">
      <p className="text-red-500 w-72 text-center">{error}</p>
    </div>
  );

  return (
    <div className="container min-w-full">
      <TvShowDetail show={show} cast={cast} />
    </div>
  );
};

export default TvShowDetails;
