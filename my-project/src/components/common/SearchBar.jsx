import { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaMagnifyingGlass } from 'react-icons/fa6';


const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  const handleSearch = useCallback(async (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    setLoading(true);
    setError(null);

    try {
      const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

      // Define the base URL and parameters
      const baseURL = 'https://api.themoviedb.org/3/search';
      const params = {
        api_key: apiKey,
        query: trimmedQuery,
        language: 'en-US',
        include_adult: false,
      };

      // Fetch Movies and TV Shows simultaneously
      const [moviesResult, tvShowsResult] = await Promise.all([
        axios.get(`${baseURL}/movie`, { params }),
        axios.get(`${baseURL}/tv`, { params }),
      ]);

      const searchResults = {
        movies: moviesResult.data.results,
        tvShows: tvShowsResult.data.results,
      };

      // Navigate to the SearchResults component and pass the search results as state
      navigate('/search-results', { state: { searchResults, query: trimmedQuery } });
    } catch (err) {
      console.error('Error fetching search results:', err);
      setError("Sorry, something went wrong while searching. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [query, navigate]);

  return (
    <form onSubmit={handleSearch} className="flex mt-2 md:mt-0 lg:mt-0" aria-label="Search Form">
      <label htmlFor="search-input" className="sr-only">Search for a movie or TV show</label>
      <input
        id="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie or TV show..."
        className="px-4 lg:w-80 md:w-80 w-60 py-2 bg-black shadow text-gray-100 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
        aria-label="Search Input"
      />
      <button
        type="submit"
        className={`flex items-center justify-center text-gray-100 px-4 bg-yellow-500 border border-[#1E1E1E] rounded-r-lg transition ${
          loading ? 'cursor-not-allowed opacity-50' : 'hover:bg-yellow-600'
        }`}
        disabled={loading} // Disable button while loading
        aria-label="Search Button"
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        ) : (
          <FaMagnifyingGlass className="text-black" />
        )}
      </button>
      {/* Display error message */}
      {error && (
        <p className="text-red-500 mt-2 text-sm" role="alert">
          {error}
        </p>
      )}
    </form>
  );
};

export default SearchBar;
