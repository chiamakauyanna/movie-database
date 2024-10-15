import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import useFetchMovies from '../../hooks/useFetchMovies';
import ItemsList from '../common/ItemsList';

const Movie = () => {
  const navigate = useNavigate();
  // destructure multiple values from the useFetchMovies hook
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
      <Header />
      {/* Display a single error message if applicable */}
      {error ? (
        <div className="flex justify-center w-screen h-screen py-9  items-center">
          <p className="text-gray-500 w-96 bg-gray-100 py-10 px-20 shadow">
            {error}
          </p>
        </div>
      ) : (
        <>
          <ItemsList
            title="All Movies"
            items={movies}
            loading={loading}
            onItemClick={handleMovieClick}
            loadMore={loadMore}
          />

          <ItemsList
            title="Now Playing"
            items={nowPlayingMovies}
            loading={loading}
            onItemClick={handleMovieClick}
            loadMore={loadMore}
          />

          <ItemsList
            title="Trending"
            items={trendingMovies}
            loading={loading}
            onItemClick={handleMovieClick}
            loadMore={loadMore}
          />

          <ItemsList
            title="Popular"
            items={popularMovies}
            loading={loading}
            onItemClick={handleMovieClick}
            loadMore={loadMore}
          />

          <ItemsList
            title="Upcoming"
            items={upcomingMovies}
            loading={loading}
            onItemClick={handleMovieClick}
            loadMore={loadMore}
          />

          <ItemsList
            title="Top Rated"
            items={topRatedMovies}
            loading={loading}
            onItemClick={handleMovieClick}
            loadMore={loadMore}
          />
        </>
      )}
    </div>
  );
};

export default Movie;
