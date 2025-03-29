import ItemsCard from "@/components/common/ItemsCard";
import Loader from "@/components/common/Loader";
import TvOptions from "@/components/common/TvOptions";
import useTvSeries from "@/hooks/useTvSeries";

const TvShows = () => {
  const {
    handleChange,
    handleClick,
    displayedTvSeries,
    searchResults,
    selectedCategory,
    loading,
    error,
  } = useTvSeries();

  return (
    <section>
      {loading && <Loader />}

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {!loading && !error && (
        <>
          {searchResults.length < 1 && (
            <div className="mb-3 ml-1">
              <TvOptions onChange={handleChange} value={selectedCategory} />
            </div>
          )}

          <ul className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-3 bg-foreground p-6">
            {(searchResults.length > 0 ? searchResults : displayedTvSeries).map(
              (tvSeries) => (
                <li key={tvSeries.id}>
                  <ItemsCard
                    poster_path={tvSeries.poster_path}
                    title={tvSeries.title || tvSeries.name}
                    release_date={
                      tvSeries.release_date || tvSeries.first_air_date
                    }
                    vote_average={tvSeries.vote_average}
                    onClick={() => handleClick(tvSeries.id as number, "tv")}
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

export default TvShows;
