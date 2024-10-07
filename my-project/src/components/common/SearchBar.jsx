import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

      // Fetch Movies and TV Shows
      const moviesResult = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );
      const tvShowsResult = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`
      );

      const searchResults = {
        movies: moviesResult.data.results,
        tvShows: tvShowsResult.data.results
      };

      // Navigate to the SearchResults component and pass the search results as state
      navigate('/search-results', { state: { searchResults, query } });
    } catch (err) {
      console.error('Error fetching search results:', err);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex mt-7 md:mt-0 lg:mt-0">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie or TV show..."
        className="px-10 lg:w-80 md:w-80 w-60 py-2 bg-black shadow text-gray-100 rounded-l-lg focus:outline-none  focus:ring-1 focus:ring-yellow-500"
      />
      <button
        type="submit"
        className="text-gray-100 px-4 bg-yellow-500 border border-[#1E1E1E] rounded-r-lg"
      >
        <FaMagnifyingGlass className="text-black" />
      </button>
    </form>
  );
};

export default SearchBar;
