import { useState } from 'react';
import axios from 'axios';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const HomeSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query (movies + tv shows)
  const [results, setResults] = useState([]); // State for storing fetched movies and TV shows
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Function to handle search input changes
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to fetch movies and TV shows based on the search query
  const fetchResults = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

      // Fetch movies from TMDB API
      const moviesResponse = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );

      // Fetch TV shows from TMDB API
      const tvShowsResponse = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`
      );

      // Combine movie and TV show results
      const combinedResults = [
        ...moviesResponse.data.results.map((movie) => ({
          ...movie,
          type: 'movie', // Adding type for identification
        })),
        ...tvShowsResponse.data.results.map((show) => ({
          ...show,
          type: 'tv', // Adding type for identification
        })),
      ];

      setResults(combinedResults);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch movies and TV shows. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    if (searchQuery.trim()) {
      fetchResults(searchQuery); // Fetch results only if search query is not empty
    }
  };

  return (
    <div className=''>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search for a movie or TV show..."
          className="px-10 w-80 py-2 bg-black outline-gray-700 text-gray-100 rounded-l-lg focus:ring-gray-700"
        />
        <button
          type="submit"
          className="text-gray-100 px-2 bg-[#1E1E1E] border border-[#1E1E1E] rounded-r-lg"
        >
          <FaMagnifyingGlass />
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {results.length > 0 && (
        <ul className="flex flex-wrap gap-4 justify-center w-screen">
          {results.map((item) => (
            <li key={item.id} className="rounded cursor-pointer flex flex-col">
              {item.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  alt={item.type === 'movie' ? item.original_title : item.name}
                  loading="lazy"
                  className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
                />
              )}
              <h2 className="text-white font-medium py-3 w-52">
                {item.type === 'movie' ? item.original_title : item.name}
              </h2>
              <div className="text-xs flex justify-between px-1">
                <p className="text-gray-400 ">
                  {item.release_date || item.first_air_date
                    ? new Date(
                        item.release_date || item.first_air_date
                      ).getFullYear()
                    : 'N/A'}
                </p>
                <p className="text-yellow-500">
                  {item.vote_average ? item.vote_average.toFixed(1) : '0.0'}
                </p>
              </div>
              <p className="text-gray-400 text-xs">
                {item.type === 'movie' ? 'Movie' : 'TV Show'}
              </p>
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && results.length === 0 && searchQuery && (
        <p>No results found for "{searchQuery}".</p>
      )}
    </div>
  );
};

export default HomeSearchBar;
