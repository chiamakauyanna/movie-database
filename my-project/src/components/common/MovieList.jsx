import MovieCard from '../common/MovieCard';
import LoadMoreButton from '../common/LoadMoreButton';
import Loading from '../common/Loading';

const MovieList = ({ movies = [], tvshow = [], loading, error, onMovieClick, loadMore }) => {
  return (
    <div className='w-screen'>
      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 px-2 mx-4">
        {loading ? (
          <Loading />
        ) : error ? (
          <p className="text-red-500 w-52">{error}</p>
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
        </div>
      )}
    </div>
  );
};

export default MovieList;
