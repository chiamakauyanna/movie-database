import { useNavigate } from 'react-router-dom';
import Header from '../common/Header';
import useFetchTvShows from '../../hooks/useFetchTvShows';
import ItemsList from '../common/ItemsList';

const TvShows = () => {
  const navigate = useNavigate();
  const {
    tvshows,
    onTheAirTvShows,
    topRatedTvShows,
    trendingTvShows,
    popularTvShows,
    loading,
    error,
    loadMore,
  } = useFetchTvShows();

  const handleTvShowClick = (id) => {
    navigate(`/tvshows/${id}`);
  };
  

  return (
    <div className="container max-w-none">
      <Header
     />
      {/* Display a single error message if applicable */}
      {error ? (
        <div className="flex justify-center w-screen h-screen py-9  items-center">
          <p className="text-gray-500 w-96 bg-gray-100 py-10 px-20 shadow">{error}</p>
        </div>
      ) : (
        <>
          <ItemsList
            title="All TV Shows"
            items={tvshows}
            loading={loading}
            onItemClick={handleTvShowClick}
            loadMore={loadMore}
          />

          <ItemsList
            title="Airing"
            items={onTheAirTvShows}
            loading={loading}
            onItemClick={handleTvShowClick}
            loadMore={loadMore}
          />

          <ItemsList
            title="Trending"
            items={trendingTvShows}
            loading={loading}
            onItemClick={handleTvShowClick}
            loadMore={loadMore}
          />

          <ItemsList
            title="Popular"
            items={popularTvShows}
            loading={loading}
            error={error}
            onItemClick={handleTvShowClick}
            loadMore={loadMore}
          />
          <ItemsList
            title="Top Rated"
            items={topRatedTvShows}
            loading={loading}
            onItemClick={handleTvShowClick}
            loadMore={loadMore}
          />
        </>
      )}
    </div>
  );
};

export default TvShows;
