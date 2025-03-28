import ItemsCard from "@/components/common/ItemsCard";
import MovieOptions from "@/components/common/MovieOptions";
import useMovie from "@/hooks/useMovie";

const Movies = () => {
  const {
    handleClick,
    handleChange,
    displayedMovies,
    searchResults,
    selectedCategory,
  } = useMovie();

  return (
    <section>
      {searchResults.length < 1 && (
        <div className="mb-3 ml-1">
          <MovieOptions onChange={handleChange} value={selectedCategory} />
        </div>
      )}

      <section className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-3 bg-foreground p-6">
        {searchResults.length > 0
          ? searchResults.map((item) => (
              <ul key={item.id}>
                <ItemsCard
                  poster_path={item.poster_path}
                  title={item.title || item.name}
                  release_date={item.release_date || item.first_air_date}
                  vote_average={item.vote_average}
                  onClick={() => handleClick(item.id as number, "movie")}
                />
              </ul>
            ))
          : displayedMovies.map((movie) => (
              <ul key={movie.id}>
                <ItemsCard
                  poster_path={movie.poster_path}
                  title={movie.title}
                  release_date={movie.release_date}
                  vote_average={movie.vote_average}
                  onClick={() => handleClick(movie.id as number, "movie")}
                />
              </ul>
            ))}
      </section>
    </section>
  );
};

export default Movies;
