import { useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';
import useFetchMovies from '../../hooks/useFetchMovies';
import MovieList from '../common/MovieList'; 

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
    <div className="container mx-auto">
      <Navbar />
      <div>
        <p className="pb-1 text-md text-gray-100 pl-4">All Movies</p>
        <div>
          <MovieList
            movies={movies}
            loading={loading}
            error={error}
            onMovieClick={handleMovieClick}
            loadMore={loadMore}
          />
        </div>
      </div>

      <div>
        <p className="pb-1 text-md text-gray-100 pl-4">Now Playing</p>
        <div>
          <MovieList
            movies={nowPlayingMovies}
            loading={loading}
            error={error}
            onMovieClick={handleMovieClick}
            loadMore={loadMore}
          />
        </div>
      </div>

      <div>
        <p className="pb-1 text-md text-gray-100 pl-4">Top Rated Movies</p>
        <div>
          <MovieList
            movies={topRatedMovies}
            loading={loading}
            error={error}
            onMovieClick={handleMovieClick}
            loadMore={loadMore}
          />
        </div>
      </div>

      <div>
        <p className="pb-1 text-md text-gray-100 pl-4">Trending Movies</p>
        <div>
          <MovieList
            movies={trendingMovies}
            loading={loading}
            error={error}
            onMovieClick={handleMovieClick}
            loadMore={loadMore}
          />
        </div>
      </div>

      <div>
        <p className="pb-1 text-md text-gray-100 pl-4">Upcoming Movies</p>
        <div>
          <MovieList
            movies={upcomingMovies}
            loading={loading}
            error={error}
            onMovieClick={handleMovieClick}
            loadMore={loadMore}
          />
        </div>
      </div>

      <div>
        <p className="pb-1 text-md text-gray-100 pl-4">Popular Movies</p>
        <div>
          <MovieList
            movies={popularMovies}
            loading={loading}
            error={error}
            onMovieClick={handleMovieClick}
            loadMore={loadMore}
          />
        </div>
      </div>
    </div>
  );
};

export default Movie;
