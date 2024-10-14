import { useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';
import useFetchMovies from '../../hooks/useFetchMovies';
import ItemsList from '../common/ItemsList';

const Movie = () => {
  const navigate = useNavigate();
  const {
    movies,
    nowPlayingMovies,
    topRatedMovies,
    trendingMovies,
    upcomingMovies,
    popularMovies,
    loading,
    error,
    loadMore,
  } = useFetchMovies();

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="container max-w-none">
      <Navbar />
      <ItemsList
        title="All Movies"
        items={movies}
        loading={loading}
        error={error}
        onItemClick={handleMovieClick}
        loadMore={loadMore}
      />

      <ItemsList
        title="Now Playing"
        items={nowPlayingMovies}
        loading={loading}
        error={error}
        onItemClick={handleMovieClick}
        loadMore={loadMore}
      />

      <ItemsList
        title="Trending"
        items={trendingMovies}
        loading={loading}
        error={error}
        onItemClick={handleMovieClick}
        loadMore={loadMore}
      />

      <ItemsList
        title="Popular"
        items={popularMovies}
        loading={loading}
        error={error}
        onItemClick={handleMovieClick}
        loadMore={loadMore}
      />

      <ItemsList
        title="Upcoming"
        items={upcomingMovies}
        loading={loading}
        error={error}
        onItemClick={handleMovieClick}
        loadMore={loadMore}
      />
      <ItemsList
        title="Top Rated"
        items={topRatedMovies}
        loading={loading}
        error={error}
        onItemClick={handleMovieClick}
        loadMore={loadMore}
      />
    </div>
  );
};

export default Movie;
