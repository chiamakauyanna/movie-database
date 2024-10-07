import { useParams } from 'react-router-dom';
import MovieDetail from './common/MovieDetail';
import Loading from './common/Loading';
import useFetchDetails from '../hooks/useFetchDetails'

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const { details: movie, cast, loading, error } = useFetchDetails('movie', id); // Use the hook for movies

  if (loading) return <Loading />;

  if (error) return (
    <div className="w-screen flex justify-center my-28 h-screen">
      <p className="text-red-500 w-72 text-center">{error}</p>
    </div>
  );

  return (
    <div className="container min-w-full">
      <MovieDetail movie={movie} cast={cast} />
    </div>
  );
};

export default MovieDetails;
