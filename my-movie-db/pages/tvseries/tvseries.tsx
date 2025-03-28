import ItemsCard from "@/components/common/ItemsCard";
import TvOptions from "@/components/common/TvOptions";
import useTvSeries from "@/hooks/useTvSeriex";

const TvShows = () => {
  const {
    handleChange,
    handleClick,
    displayedTvSeries,
    searchResults,
    selectedCategory,
  } = useTvSeries();

  return (
    <section>
      {searchResults.length < 1 && (
        <div className="mb-3 ml-1">
          <TvOptions onChange={handleChange} value={selectedCategory} />
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
          : displayedTvSeries.map((tvSeries) => (
              <ul key={tvSeries.id}>
                <ItemsCard
                  poster_path={tvSeries.poster_path}
                  title={tvSeries.name}
                  first_air_date={tvSeries.first_air_date}
                  vote_average={tvSeries.vote_average}
                  onClick={() => handleClick(tvSeries.id as number, "tv")}
                />
              </ul>
            ))}
      </section>
    </section>
  );
};

export default TvShows;
