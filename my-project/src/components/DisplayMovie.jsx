import { useState, useEffect } from "react";
import { fetchMovies } from "./api/apiConfig";
import { useNavigate } from "react-router-dom";

const DisplayMovie = () => {
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
        setError("Failed to fetch movies.");
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
    <div className="container flex flex-col">
      {loading && page === 1 ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : movies.length > 0 ? (
        <>
          <ul className="flex flex-wrap gap-4 border-green-500 border-2 justify-center w-screen">
            {movies.map((movie) => (
              <li
                key={movie.id}
                className="rounded cursor-pointer"
                onClick={() => handleMovieClick(movie.id)} // Navigate to details on click
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.original_title}
                  loading="lazy"
                  className="rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 duration-300"
                />
                <h2 className="text-white font-medium py-3 w-52">{movie.original_title}</h2>
                <div className="text-xs flex justify-between">
                  <p className="text-gray-400 ">
                    {movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A"}
                  </p>
                  <p className="text-yellow-500">
                    {movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Button to load more movies */}
          <button
            onClick={loadMoreMovies}
            className="mt-4 mx-auto px-4 py-2 bg-yellow-400 text-black font-bold rounded"
          >
            Load More
          </button>
        </>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default DisplayMovie;