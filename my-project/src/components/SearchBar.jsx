import { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const [movies, setMovies] = useState([]); // State for storing fetched movies
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Function to handle search input changes
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to fetch movies based on the search term
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
    if (searchTerm.trim()) {
      fetchMovies(searchTerm); // Fetch movies only if search term is not empty
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
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

      {!loading && !error && movies.length === 0 && searchTerm && (
        <p>No movies found for "{searchTerm}".</p>
      )}
    </div>
  );
};

export default SearchBar