import { useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';
import useFetchTvShows from '../../hooks/useFetchTvShows';
import MovieList from '../common/MovieList';

const TvShows = () => {
  const navigate = useNavigate();
  const {
    tvshow,
    onTheAirTvShows,
    topRatedTvShows,
    trendingTvShows,
    popularTvshows,
    loading,
    error,
    loadMore,
  } = useFetchTvShows();

  const handleShowClick = (id) => {
    navigate(`/tvshows/${id}`);
  };

  return (
    <div className="container mx-auto">
      <Navbar />
      <div>
        <p className="pb-1 text-md text-gray-100 pl-4">All Tv Shows</p>
        <div>
          <MovieList
            tvshow={tvshow}
            loading={loading}
            error={error}
            onMovieClick={handleShowClick}
            loadMore={loadMore}
          />
        </div>
      </div>

      <div>
        <p className="pb-1 text-md text-gray-100 pl-4">On The Air</p>
        <div>
          <MovieList
            tvshow={onTheAirTvShows}
            loading={loading}
            error={error}
            onMovieClick={handleShowClick}
            loadMore={loadMore}
          />
        </div>
      </div>

      <div>
        <p className="pb-1 text-md text-gray-100 pl-4">Top Rated</p>
        <div>
          <MovieList
            tvshow={topRatedTvShows}
            loading={loading}
            error={error}
            onMovieClick={handleShowClick}
            loadMore={loadMore}
          />
        </div>
      </div>

      <div>
        <p className="pb-1 text-md text-gray-100 pl-4">Trending</p>
        <div>
          <MovieList
            tvshow={trendingTvShows}
            loading={loading}
            error={error}
            onMovieClick={handleShowClick}
            loadMore={loadMore}
          />
        </div>
      </div>

      <div>
        <p className="pb-1 text-md text-gray-100 pl-4">Popular</p>
        <div>
          <MovieList
            tvshow={popularTvshows}
            loading={loading}
            error={error}
            onMovieClick={handleShowClick}
            loadMore={loadMore}
          />
        </div>
      </div>
    </div>
  );
};

export default TvShows;
