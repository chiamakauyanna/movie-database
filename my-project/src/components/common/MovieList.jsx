import MovieCard from '../common/MovieCard';
import LoadMoreButton from '../common/LoadMoreButton';
import Loading from '../common/Loading';

const MovieList = ({
  movies = [],
  nowPlayingMovies = [],
  topRatedMovies = [],
  trendingMovies = [],
  upcomingMovies = [],
  popularMovies = [],
  
  tvshow = [],
  onTheAirTvShows = [],
  topRatedTvShows = [],
  trendingTvShows = [],
  popularTvshows = [],
  loading,
  error,
  onMovieClick,
  loadMore,
}) => {
  return (
    <div className="relative">
      <div className="overflow-x-auto no-scrollbar">
        <ul className="flex gap-3 ml-5 py-4">
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
              {nowPlayingMovies.map((nowPlaying) => (
                <MovieCard
                  key={nowPlaying.id}
                  id={nowPlaying.id}
                  poster_path={nowPlaying.poster_path}
                  title={nowPlaying.title}
                  release_date={nowPlaying.release_date}
                  vote_average={nowPlaying.vote_average}
                  onClick={onMovieClick}
                />
              ))}
              {upcomingMovies.map((upcoming) => (
                <MovieCard
                  key={upcoming.id}
                  id={upcoming.id}
                  poster_path={upcoming.poster_path}
                  title={upcoming.title}
                  release_date={upcoming.release_date}
                  vote_average={upcoming.vote_average}
                  onClick={onMovieClick}
                />
              ))}
              {popularMovies.map((popular) => (
                <MovieCard
                  key={popular.id}
                  id={popular.id}
                  poster_path={popular.poster_path}
                  title={popular.title}
                  release_date={popular.release_date}
                  vote_average={popular.vote_average}
                  onClick={onMovieClick}
                />
              ))}
              {topRatedMovies.map((topRatedMovie) => (
                <MovieCard
                  key={topRatedMovie.id}
                  id={topRatedMovie.id}
                  poster_path={topRatedMovie.poster_path}
                  title={topRatedMovie.title}
                  release_date={topRatedMovie.release_date}
                  vote_average={topRatedMovie.vote_average}
                  onClick={onMovieClick}
                />
              ))}
              {trendingMovies.map((trending) => (
                <MovieCard
                  key={trending.id}
                  id={trending.id}
                  poster_path={trending.poster_path}
                  title={trending.title}
                  release_date={trending.release_date}
                  vote_average={trending.vote_average}
                  onClick={onMovieClick}
                />
              ))}
              {onTheAirTvShows.map((airing) => (
                <MovieCard
                  key={airing.id}
                  id={airing.id}
                  poster_path={airing.poster_path}
                  title={airing.name}
                  release_date={airing.first_air_date}
                  vote_average={airing.vote_average}
                  onClick={onMovieClick}
                />
              ))}
              {topRatedTvShows.map((topRatedTvShow) => (
                <MovieCard
                  key={topRatedTvShow.id}
                  id={topRatedTvShow.id}
                  poster_path={topRatedTvShow.poster_path}
                  title={topRatedTvShow.name}
                  release_date={topRatedTvShow.first_air_date}
                  vote_average={topRatedTvShow.vote_average}
                  onClick={onMovieClick}
                />
              ))}
              {trendingTvShows.map((trendingTvShow) => (
                <MovieCard
                  key={trendingTvShow.id}
                  id={trendingTvShow.id}
                  poster_path={trendingTvShow.poster_path}
                  title={trendingTvShow.name}
                  release_date={trendingTvShow.first_air_date}
                  vote_average={trendingTvShow.vote_average}
                  onClick={onMovieClick}
                />
              ))}
              {popularTvshows.map((popularTvshow) => (
                <MovieCard
                  key={popularTvshow.id}
                  id={popularTvshow.id}
                  poster_path={popularTvshow.poster_path}
                  title={popularTvshow.name}
                  release_date={popularTvshow.first_air_date}
                  vote_average={popularTvshow.vote_average}
                  onClick={onMovieClick}
                />
              ))}
            </>
          )}{' '}
          {!loading && !error && (movies.length > 0 || tvshow.length > 0) && (
            <LoadMoreButton onClick={loadMore} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
