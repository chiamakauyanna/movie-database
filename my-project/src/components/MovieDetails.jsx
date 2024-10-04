import { useParams } from 'react-router-dom';
import MovieDetail from './common/MovieDetail';
import Loading from './common/Loading';
import useFetchDetails from '../hooks/useFetchDetails'

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const { details: movie, cast, loading, error } = useFetchDetails('movie', id); // Use the hook for movies

  if (loading) return <Loading />;

  if (error) return <p className="text-red-500 w-52">{error}</p>;

  return (
    <div className="container min-w-full">
      <MovieDetail movie={movie} cast={cast} />
    </div>
  );
};

export default MovieDetails;
