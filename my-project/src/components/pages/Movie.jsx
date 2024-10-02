import { useState, useEffect } from 'react';
import { fetchMovies } from '../api/apiConfig';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../common/SearchBar';
import MovieCard from '../common/MovieCard';
import SideBar from '../common/SideBar';
import LoadMoreButton from '../common/LoadMoreButton';

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
  const loadMoreMovies = () => {
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
              movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={handleMovieClick}
                />
              ))
            )}
          </ul>
          {/* Pass loadMoreMovies to LoadMoreButton */}
          <LoadMoreButton onClick={loadMoreMovies} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
