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
    handleLoadMore,
  } = useMovie();

  return (
    <section>
      {loading && <Loader />}

      {error && (
        <div className="min-h-screen">
          <p className="text-red-500 text-center mt-4">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          {searchResults.length < 1 && (
            <div className="mb-3 mx-6">
              <MovieOptions onChange={handleChange} value={selectedCategory} />
            </div>
          )}

          <ul className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-3 bg-foreground lg:p-6 md:p-4 p-2 mx-6 rounded-lg">
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
          <div className="flex justify-center gap-4 text-text py-4 lg:text-base md:text-sm text-sm">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="bg-accent text-white px-4 py-2 rounded"
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Movies;
