import ItemsCard from "@/components/common/ItemsCard";
import Loader from "@/components/common/Loader";
import MovieOptions from "@/components/common/MovieOptions";
import useMovie from "@/hooks/useMovie";

const Movies = () => {
  const {
    handleClick,
    handleChange,
    displayedMovies,
    searchResults,
    selectedCategory,
    loading,
    error,
  } = useMovie();

  return (
    <section>
    
      {loading && <Loader />}

      {error && <p className="text-red-500 text-center mt-12">{error}</p>}

      {!loading && !error && (
        <>
          {searchResults.length < 1 && (
            <div className="mb-3 ml-1">
              <MovieOptions onChange={handleChange} value={selectedCategory} />
            </div>
          )}
    
        <ul className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-3 bg-foreground p-6">
          {(searchResults.length > 0 ? searchResults : displayedMovies).map(
            (movie) => (
              <li key={movie.id}>
                <ItemsCard
                  poster_path={movie.poster_path}
                  title={movie.title || movie.name}
                  release_date={movie.release_date || movie.first_air_date}
                  vote_average={movie.vote_average}
                  onClick={() => handleClick(movie.id as number, "movie")}
                />
              </li>
            )
          )}
        </ul>
        </>
      )}
    </section>
  );
};

export default Movies;
