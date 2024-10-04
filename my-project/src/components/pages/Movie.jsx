import { useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';
import useFetchMovies from '../../hooks/useFetchMovies';
import MovieList from '../common/MovieList'; 

const Movie = () => {
  const navigate = useNavigate();
  const { movies, loading, error, loadMore } = useFetchMovies();

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="container flex flex-col max-w-none">
      <Navbar />
      <MovieList
        movies={movies}
        loading={loading}
        error={error}
        onMovieClick={handleMovieClick}
        loadMore={loadMore}
      />
    </div>
  );
};

export default Movie;
