import { useParams } from 'react-router-dom';
import ItemsDetailsList from './common/ItemsDetailsList';
import useFetchDetails from '../hooks/useFetchDetails'

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const { details: movie, cast, loading, error } = useFetchDetails('movie', id); // Use the hook for movies

  return (
    <div className="container min-w-full">
      <ItemsDetailsList
        title={movie ? movie.title : 'Movie Details'}
        details={movie}
        cast={cast}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default MovieDetails;
