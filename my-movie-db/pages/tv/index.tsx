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
    handleLoadMore,
  } = useTvSeries();

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
              <TvOptions onChange={handleChange} value={selectedCategory} />
            </div>
          )}

          <ul className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-3 bg-foreground lg:p-6 md:p-4 p-2 mx-6 rounded-lg">
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

export default TvShows;
