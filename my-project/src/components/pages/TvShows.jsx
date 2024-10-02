import { useState, useEffect } from 'react';
import { fetchTvShows } from '../api/apiConfig'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../common/SearchBar';
import MovieCard from '../common/MovieCard';
import SideBar from '../common/SideBar';
import LoadMoreButton from '../common/LoadMoreButton';

const TvShows = () => {
  const [Tvshow, setTvShow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // State for pagination
  const navigate = useNavigate(); // Hook to navigate to different routes

  useEffect(() => {
    const getTvShows = async () => {
      setLoading(true);
      setError(null);
      try {
        const TvShowsData = await fetchTvShows(page);
        setTvShow((prevTvShows) => [...prevTvShows, ...TvShowsData]);
      } catch (err) {
        setError('Failed to fetch tvShows.');
      } finally {
        setLoading(false);
      }
    };

    getTvShows();
  }, [page]);

  // Function to handle clicking on a movie card
  const handleShowClick = (id) => {
    navigate(`/tvshows/${id}`); // Navigate to the movie details page with the movie ID
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1); // Increment the page number
  };

  return (
    <div className="container mx-auto flex flex-col max-w-none">
      <SearchBar />
      <div className="flex">
        <SideBar />
        <div className="w-4/5">
          <ul className="flex flex-wrap gap-4">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              Tvshow.map((show) => (
                <MovieCard
                  id={show.id}
                  poster_path={show.poster_path}
                  title={show.original_name}
                  release_date={show.first_air_date}
                  vote_average={show.vote_average}
                  onClick={handleShowClick}
                />
              ))
            )}
          </ul>
          {/* Pass loadMoreTvShows to LoadMoreButton */}
          <LoadMoreButton onClick={loadMore} />
        </div>
      </div>
    </div>
  );
};

export default TvShows;
