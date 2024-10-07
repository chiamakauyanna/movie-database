import MovieCard from '../common/MovieCard';
import LoadMoreButton from '../common/LoadMoreButton';
import Loading from '../common/Loading';

const MovieList = ({ movies = [], tvshow = [], loading, error, onMovieClick, loadMore }) => {
  return (
    <div className="relative">
      <div className="overflow-x-auto no-scrollbar">
        <ul className="flex gap-3">
          {loading ? (
            <Loading />
          ) : error ? (
            <div className="flex justify-center my-28 min-h-screen">
              <p className="text-red-500">{error}</p>
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
                 {tvshow.map((show) => (
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
      {!loading && !error && (movies.length > 0 || tvshow.length > 0) && (
          <LoadMoreButton onClick={loadMore} /> 
      )}
    </div>
   </div>
  );
};

export default MovieList;
