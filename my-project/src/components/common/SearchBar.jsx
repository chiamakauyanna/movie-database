import { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [searchMovie, setSearchMovie] = useState(""); // State for the search Movie
  const [movies, setMovies] = useState([]); // State for storing fetched movies
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Function to handle search input changes
  const handleInputChange = (e) => {
    setSearchMovie(e.target.value);
  };

  // Function to fetch movies based on the search Movie
  const fetchMovies = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const apiKey =  import.meta.env.VITE_MOVIE_API_KEY;
      // Fetch movies from TMDB API based on search query
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );

      setMovies(response.data.results);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    if (searchMovie.trim()) {
      fetchMovies(searchMovie); // Fetch movies only if search Movie is not empty
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}
        className="flex justify-center my-7">
        <input
          type="text"
          value={searchMovie}
          onChange={handleInputChange}
          placeholder="Search for a movie..."
          className="px-4 py-2 bg-[#1E1E1E] outline outline-gray-700 text-gray-100 rounded-l-lg focus:ring-gray-700"
        />
        <button 
          type="submit"
          className="bg-gray-500 text-gray-100 px-2 py rounded-r-lg ml-1"
          >Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {movie.original_title}
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.original_title}
                  loading="lazy"
                />
              )}
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && movies.length === 0 && searchMovie && (
        <p>No movies found for "{searchMovie}".</p>
      )}
    </div>
  );
};

export default SearchBar