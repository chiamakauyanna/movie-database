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

  const onMovieClick = (id) => {
    navigate(`/search-results/${id}`);
  };

  return (
    <div className="container max-w-none ">
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="mb-4 flex items-center text-center gap-5 text-yellow-500 font-bold px-4 py-2 rounded mt-9 ml-9"
      >
        <FaAngleLeft /> Back
      </button>
      <h2 className="text-yellow-500 font-bold text-2xl my-7 ml-10">
        Search Results for "{query}"
      </h2>
      <div className="w-screen">
        <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 px-2 mx-4">
          {movies.length === 0 && tvShows.length === 0 ? (
            <div className="w-screen flex justify-center my-28 h-screen">
              <p className="text-red-500 w-72 text-center">{error}</p>
            </div>
          ) : (
            <>
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  poster_path={movie.poster_path}
                  title={movie.title}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average}
                  onClick={onMovieClick}
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
                  onClick={onMovieClick}
                />
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
