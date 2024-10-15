import { useLocation, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import ItemsCard from './common/ItemsCard';
import Loading from './common/Loading';
import { useState, useEffect } from 'react'; // Import useEffect

const SearchResults = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure searchResults and query from location.state with fallbacks
  const { searchResults, query } = location.state || {
    searchResults: { movies: [], tvShows: [] },
    query: '',
  };

  const { movies, tvShows } = searchResults;

  // Function to handle item clicks, navigating based on type
  const onItemClick = (id, type) => {
    if (type === 'movie') {
      navigate(`/movie/${id}`);
    } else if (type === 'tv') {
      navigate(`/tvshows/${id}`);
    }
  };

  // useEffect to set loading to false after data is available
  useEffect(() => {
    console.log('SearchResults component mounted with:', {
      searchResults,
      query,
    });

    if (searchResults && query) {
      setLoading(false);
      console.log('Loading set to false');
    } else {
      console.log('No search data, redirecting to home');
      // Optionally, inform the user before redirecting
      alert('No search data found. Redirecting to the search page.');
      navigate('/', {
        replace: true,
        state: { message: 'Please perform a search first.' },
      });
    }
  }, [searchResults, query, navigate]);

  return (
    <div className="container max-w-none p-4 bg-gray-900 min-h-screen">
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)} // Navigate back to the previous page
            className="mb-4 flex items-center text-center gap-5 text-yellow-500 font-bold mt-9 ml-9 hover:text-yellow-600 transition-colors duration-200"
            aria-label="Go Back to Previous Page"
          >
            <FaAngleLeft /> Back
          </button>

          {/* Search Query Title */}
          <h2 className="text-gray-200 font-bold text-lg my-7 ml-6">
            Search Results for "{' '}
            <span className="text-yellow-500">{query}</span> "
          </h2>

          {/* Movies Section */}
          {movies.length > 0 && (
            <div className="flex flex-col mb-8 mx-auto">
              <h3 className="text-xl text-gray-100 pl-4 mb-4">Movies</h3>
              <ul className="items-center flex justify-center gap-3 flex-wrap">
                {movies.map((movie) => (
                  <ItemsCard
                    key={`movie-${movie.id}`}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title || movie.name}
                    release_date={movie.release_date || movie.first_air_date}
                    vote_average={movie.vote_average}
                    onClick={() => onItemClick(movie.id, 'movie')}
                  />
                ))}
              </ul>
            </div>
          )}

          {/* TV Shows Section */}
          {tvShows.length > 0 && (
            <div>
              <h3 className="text-xl text-gray-100 pl-4 mb-4">TV Shows</h3>
              <ul className="items-center flex justify-center gap-3 flex-wrap">
                {tvShows.map((show) => (
                  <ItemsCard
                    key={`tv-${show.id}`}
                    id={show.id}
                    poster_path={show.poster_path}
                    title={show.title || show.name}
                    release_date={show.release_date || show.first_air_date}
                    vote_average={show.vote_average}
                    onClick={() => onItemClick(show.id, 'tv')}
                  />
                ))}
              </ul>
            </div>
          )}

          {/* No Results Found */}
          {movies.length === 0 && tvShows.length === 0 && (
            <div className="w-full flex justify-center my-28 h-screen">
              <p className="text-gray-500 w-96 bg-gray-100 py-10 px-20 shadow rounded">
                No results found for "{query}". Please try a different search
                term.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
