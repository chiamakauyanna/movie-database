import { useState, useEffect } from 'react';
import { fetchMovies } from '../api/apiConfig';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../common/MovieCard';
import LoadMoreButton from '../common/LoadMoreButton';
import Navbar from '../common/Navbar';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // State for pagination
  const navigate = useNavigate(); // Hook to navigate to different routes

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const moviesData = await fetchMovies(page);
        setMovies((prevMovies) => [...prevMovies, ...moviesData]);
      } catch (err) {
        setError('Failed to fetch movies.');
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [page]);

  // Function to handle clicking on a movie card
  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`); // Navigate to the movie details page with the movie ID
  };

  // Function to load more movies
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1); // Increment the page number
  };

  return (
    <div className="container flex flex-col max-w-none">
      <Navbar />
      <div className="flex flex-col">
        <div className=''>
          <ul className="flex flex-wrap gap-4 justify-center">
            {loading ? (
              <p className="text-white">Loading...</p>
            ) : error ? (
              <p className="text-white">{error}</p>
            ) : (
              movies.map((movie) => (
                <MovieCard
                  id={movie.id}
                  poster_path={movie.poster_path}
                  title={movie.title}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average}
                  onClick={handleMovieClick}
                />
              ))
            )}
          </ul>
        </div>

        <LoadMoreButton onClick={loadMore} />
      </div>
    </div>
  );
};

export default Movie;
