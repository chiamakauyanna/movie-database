import { useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';
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
      <Navbar />
      <ItemsList
        title="All TV Shows"
        items={tvshows}
        loading={loading}
        error={error}
        onItemClick={handleTvShowClick}
        loadMore={loadMore}
      />

      <ItemsList
        title="Airing"
        items={onTheAirTvShows}
        loading={loading}
        error={error}
        onItemClick={handleTvShowClick}
        loadMore={loadMore}
      />

      <ItemsList
        title="Trending"
        items={trendingTvShows}
        loading={loading}
        error={error}
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
        error={error}
        onItemClick={handleTvShowClick}
        loadMore={loadMore}
      />

    </div>
  );
};

export default TvShows;
