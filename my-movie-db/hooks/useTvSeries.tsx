import { useTvStore } from "@/store/tvStore";
import { useSearchStore } from "@/store/searchStore";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const useTvSeries = () => {
  const router = useRouter();
  const loading = useTvStore((state) => state.loading);
  const error = useTvStore((state) => state.error);
  const tvSeries = useTvStore((state) => state.tv);
  const popularTvSeries = useTvStore((state) => state.popularTvSeries);
  const topRatedTvSeries = useTvStore((state) => state.topRatedTvSeries);
  const trendingTvSeries = useTvStore((state) => state.trendingTvSeries);
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
  const getTrendingTvSeries = useTvStore(
    (state) => state.getTrendingTvSeries ?? (() => {})
  );

  const loadMoreTv = useTvStore((state) => state.loadMoreTv ?? (() => {}));
  const loadMorePopularTv = useTvStore(
    (state) => state.loadMorePopularTv ?? (() => {})
  );
  const loadMoreTopRatedTv = useTvStore(
    (state) => state.loadMoreTopRatedTv ?? (() => {})
  );
  const loadMoreAiringTv = useTvStore(
    (state) => state.loadMoreAiringTv ?? (() => {})
  );
  const loadMoreOnAirTv = useTvStore(
    (state) => state.loadMoreOnAirTv ?? (() => {})
  );
  const loadMoreTrendingTv = useTvStore(
    (state) => state.loadMoreTrendingTv ?? (() => {})
  );

  const searchResults = useSearchStore((state) => state.searchResults);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    getTvSeries(1);
    getAiringTvSeries(1);
    getPopularTvSeries(1);
    getTopRatedTvSeries(1);
    getOnAirTvSeries(1);
    getTrendingTvSeries(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categoryMap: Record<string, typeof tvSeries> = {
    airing: airingTvSeries,
    popular: popularTvSeries,
    top_rated: topRatedTvSeries,
    on_air: onAirTvSeries,
    trending: trendingTvSeries,
  };

  const displayedTvSeries = categoryMap[selectedCategory] || tvSeries;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleClick = (id: number, type: "movie" | "tv") => {
    router.push(`/tv/${id}?type=${type}`);
  };

  const loadMore = () => {
    if (selectedCategory === "popular") {
      loadMorePopularTv();
    } else if (selectedCategory === "top_rated") {
      loadMoreTopRatedTv();
    } else if (selectedCategory === "airing") {
      loadMoreAiringTv();
    } else if (selectedCategory === "on_air") {
      loadMoreOnAirTv();
    } else if (selectedCategory === "trending") {
      loadMoreTrendingTv();
    } else {
      loadMoreTv();
    }
  };

  const scrollRef = useRef<number>(0);
  const handleLoadMore = () => {
    scrollRef.current = window.scrollY;
    loadMore();
  };

  useEffect(() => {
    window.scrollTo({ top: scrollRef.current, behavior: "instant" });
  }, [displayedTvSeries.length]);

  return {
    handleChange,
    handleClick,
    displayedTvSeries,
    searchResults,
    selectedCategory,
    loading,
    error,
    handleLoadMore,
  };
};

export default useTvSeries;
