import { useParams } from 'react-router-dom';
import ItemsDetailsList from './common/ItemsDetailsList';
import useFetchDetails from '../hooks/useFetchDetails'

const MovieDetails = () => {
  const { id } = useParams(); 
  const { details: movie, cast, loading, error, trailer } = useFetchDetails('movie', id);

  return (
    <div className="container min-w-full">
      <ItemsDetailsList
        title={movie ? movie.title : 'Movie Details'}
        details={movie}
        cast={cast}
        loading={loading}
        error={error}
        trailer={trailer}
      />
    </div>
  );
};

export default MovieDetails;
