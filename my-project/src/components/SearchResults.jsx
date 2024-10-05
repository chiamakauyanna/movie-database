import { useLocation, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa'; 
import MovieCard from './common/MovieCard';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Fallback for search results and query if none exists
  const { searchResults, query } = location.state || {
    searchResults: { movies: [], tvShows: [] },
    query: '',
  };

  const { movies, tvShows } = searchResults;

  return (
    <div className="container">
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="mb-4 flex items-center text-center gap-5 text-yellow-500 font-bold px-4 py-2 rounded mt-9 ml-9"
      >
        <FaAngleLeft /> Back
      </button>
      <h2 className="text-yellow-500 font-bold text-2xl my-7 ml-10">
        Search Results for "{query}"
      </h2>

      {movies.length === 0 && tvShows.length === 0 ? (
        <p>No results found</p>
      ) : (
        <ul className="flex flex-wrap gap-4 justify-center">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
            />
          ))}

          {tvShows.map((show) => (
            <MovieCard
              key={show.id}
              id={show.id}
              poster_path={show.poster_path}
              title={show.name}
              release_date={show.first_air_date}
              vote_average={show.vote_average}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
