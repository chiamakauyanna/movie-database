import { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import Loading from './Loading';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = useCallback(
   async (e) => {
      e.preventDefault();
      // Trim the search query and exits early if it's empty
      const trimmedQuery = query.trim();
      if (!trimmedQuery) return;

      setLoading(true);
      setError(null);

      try {
        const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
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
        navigate('/search-results', {
          state: { searchResults, query: trimmedQuery },
        });
      } catch (err) {
        if (err.response) {
          // Server responded with a status other than 2xx
          setError(
            `Server Error: ${err.response.status} ${err.response.statusText}`
          );
        } else if (err.request) {
          // Request was made but no response received
          setError('Network Error: Please check your internet connection.');
        } else if (
          searchResults.movies.length === 0 &&
          searchResults.tvShows.length === 0
        ) {
          setError('No results found for your search.');
        } else {
          // Something else caused the error
          setError('An unexpected error occurred.');
        }
      } finally {
        setLoading(false);
      }
    },
    [query, navigate]
  );

  return (
    <form
      onSubmit={handleSearch}
      className="flex mt-2 md:mt-0 lg:mt-0"
      aria-label="Search Form"
    >
      <label htmlFor="search-input" className="sr-only">
        Search for a movie or TV show
      </label>
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
          <Loading/>
        ) : (
          <FaMagnifyingGlass className="text-black" />
        )}
      </button>
      {/* Display error message */}
      {error && (
        <div className="flex justify-center mt-4">
          <p className="text-red-500 bg-gray-100 py-2 px-4 rounded shadow">
            {error}
          </p>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
