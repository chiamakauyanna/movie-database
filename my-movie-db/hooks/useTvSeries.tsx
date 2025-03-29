import { useTvStore } from "@/store/tvStore";
import { useSearchStore } from "@/store/searchStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useTvSeries = () => {
  const router = useRouter();
  const loading = useTvStore((state) => state.loading);
  const error = useTvStore((state) => state.error);
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
  const searchResults = useSearchStore((state) => state.searchResults);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    getTvSeries();
    getAiringTvSeries();
    getPopularTvSeries();
    getTopRatedTvSeries();
    getOnAirTvSeries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categoryMap: Record<string, typeof tvSeries> = {
    airing: airingTvSeries,
    popular: popularTvSeries,
    top_rated: topRatedTvSeries,
    on_air: onAirTvSeries,
  };

  const displayedTvSeries = categoryMap[selectedCategory] || tvSeries;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleClick = (id: number, type: "movie" | "tv") => {
    router.push(`/tv/${id}?type=${type}`);
  };

  return {
    handleChange,
    handleClick,
    displayedTvSeries,
    searchResults,
    selectedCategory,
    loading,
    error,
  };
};

export default useTvSeries;
