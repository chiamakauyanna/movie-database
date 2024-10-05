import { useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';
import useFetchTvShows from '../../hooks/useFetchTvShows';
import MovieList from '../common/MovieList';

const TvShows = () => {
  const navigate = useNavigate();
  const { tvshow, loading, error, loadMore } = useFetchTvShows();
  useFetchTvShows();

   const handleShowClick = (id) => {
     navigate(`/tvshows/${id}`);
   };

  return (
    <div className="container flex flex-col max-w-none overflow-hidden border">
      <Navbar />
      <MovieList
        tvshow={tvshow}
        loading={loading}
        error={error}
        onMovieClick={handleShowClick}
        loadMore={loadMore}
      />
    </div>
  );
};

export default TvShows;
