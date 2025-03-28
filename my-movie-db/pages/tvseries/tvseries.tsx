import ItemsCard from "@/components/common/ItemsCard";
import TvOptions from "@/components/common/TvOptions";
import { useTvStore } from "@/store/TvShowStore";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";

const TvShows = () => {
  const router = useRouter();
  const tvSeries = useTvStore((state) => state.tv);
  const popularTvSeries = useTvStore((state) => state.popularTvSeries);
  const topRatedTvSeries = useTvStore((state) => state.topRatedTvSeries);
  const airingTvSeries = useTvStore((state) => state.airingTvSeries);
  const onAirTvSeries = useTvStore((state) => state.onAirTvSeries);

  const getTvSeries = useTvStore((state) => state.getTvSeries ?? (() => {}));
  const getPopularTvSeries = useTvStore(
    (state) => state.getPopularTvSeries ?? (() => {})
  );
  const getTopRatedTvSeries = useTvStore(
    (state) => state.getTopRatedTvSeries ?? (() => {})
  );
  const getAiringTvSeries = useTvStore(
    (state) => state.getAiringTvSeries ?? (() => {})
  );
  const getOnAirTvSeries = useTvStore(
    (state) => state.getOnAirTvSeries ?? (() => {})
  );
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    getTvSeries();
    getAiringTvSeries();
    getPopularTvSeries();
    getTopRatedTvSeries();
    getOnAirTvSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let displayedTvSeries;

  switch (selectedCategory) {
    case "airing":
      displayedTvSeries = airingTvSeries;
      break;
    case "popular":
      displayedTvSeries = popularTvSeries;
      break;
    case "top-rated":
      displayedTvSeries = topRatedTvSeries;
      break;
    case "on-air":
      displayedTvSeries = onAirTvSeries;
      break;
    default:
      displayedTvSeries = tvSeries;
      break;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleClick = (id: number, type: "movie" | "tv") => {
    router.push(`/tvseries/${id}?type=${type}`);
  };

  return (
    <div>
      <div className="mb-3 ml-1">
        <TvOptions onChange={handleChange} value={selectedCategory} />
      </div>
      <section className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-3 bg-foreground p-6">
        {displayedTvSeries.map((tvSeries) => (
          <ul key={tvSeries.id}>
            <ItemsCard
              poster_path={tvSeries.poster_path}
              title={tvSeries.name}
              first_air_date={tvSeries.first_air_date}
              vote_average={tvSeries.vote_average}
              onClick={() => handleClick(tvSeries.id, "tv")}
            />
          </ul>
        ))}
      </section>
    </div>
  );
};

export default TvShows;
