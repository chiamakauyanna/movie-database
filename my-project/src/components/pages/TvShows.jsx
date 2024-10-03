import { useState, useEffect } from 'react';
import { fetchTvShows } from '../api/apiConfig';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../common/MovieCard';
import LoadMoreButton from '../common/LoadMoreButton';
import Navbar from '../common/Navbar';

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
      <Navbar />
      <div className="flex mx-auto">
        <div>
          <ul className="flex flex-wrap gap-4 border-2 ">
            {loading ? (
              <p className="text-white">Loading...</p>
            ) : error ? (
              <p className="text-white">{error}</p>
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
        </div>
      </div>
      <LoadMoreButton onClick={loadMore} />
    </div>
  );
};

export default TvShows;
