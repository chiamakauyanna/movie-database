import { useMovieStore } from "@/store/movieStore";
import { useSearchStore } from "@/store/searchStore";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const useMovie = () => {
  const router = useRouter();
  const loading = useMovieStore((state) => state.loading);
  const error = useMovieStore((state) => state.error);
  const movies = useMovieStore((state) => state.movie);
  const popularMovies = useMovieStore((state) => state.popularMovies);
  const topRatedMovies = useMovieStore((state) => state.topRatedMovies);
  const trendingMovies = useMovieStore((state) => state.trendingMovies);
  const upcomingMovies = useMovieStore((state) => state.upcomingMovies);
  const getMovies = useMovieStore((state) => state.getMovies ?? (() => {}));
  const getPopularMovies = useMovieStore(
    (state) => state.getPopularMovies ?? (() => {})
  );
  const getTopRatedMovies = useMovieStore(
    (state) => state.getTopRatedMovies ?? (() => {})
  );
  const getUpcomingMovies = useMovieStore(
    (state) => state.getUpcomingMovies ?? (() => {})
  );
  const getTrendingMovies = useMovieStore(
    (state) => state.getTrendingMovies ?? (() => {})
  );

  const loadMoreMovies = useMovieStore(
    (state) => state.loadMoreMovies ?? (() => {})
  );
  const loadMorePopularMovies = useMovieStore(
    (state) => state.loadMorePopularMovies ?? (() => {})
  );
  const loadMoreTopRatedMovies = useMovieStore(
    (state) => state.loadMoreTopRatedMovies ?? (() => {})
  );
  const loadMoreUpcomingMovies = useMovieStore(
    (state) => state.loadMoreUpcomingMovies ?? (() => {})
  );
  const loadMoreTrendingMovies = useMovieStore(
    (state) => state.loadMoreTrendingMovies ?? (() => {})
  );

  const searchResults = useSearchStore((state) => state.searchResults);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    getMovies(1);
    getPopularMovies(1);
    getTopRatedMovies(1);
    getUpcomingMovies(1);
    getTrendingMovies(1);
  }, [
    getMovies,
    getPopularMovies,
    getTopRatedMovies,
    getTrendingMovies,
    getUpcomingMovies,
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const categoryMap: Record<string, typeof movies> = {
    popular: popularMovies,
    top_rated: topRatedMovies,
    upcoming: upcomingMovies,
    trending: trendingMovies,
  };
  const displayedMovies = categoryMap[selectedCategory] || movies;

  const handleClick = (id: number, type: "movie" | "tv") => {
    router.push(`/movies/${id}?type=${type}`);
  };

  const loadMore = () => {
    if (selectedCategory === "popular") {
      loadMorePopularMovies();
    } else if (selectedCategory === "top_rated") {
      loadMoreTopRatedMovies();
    } else if (selectedCategory === "upcoming") {
      loadMoreUpcomingMovies();
    } else if (selectedCategory === "trending") {
      loadMoreTrendingMovies();
    } else {
      loadMoreMovies();
    }
  };

  const scrollRef = useRef<number>(0);
  const handleLoadMore = () => {
    scrollRef.current = window.scrollY;
    loadMore();
  };

  useEffect(() => {
    window.scrollTo({ top: scrollRef.current, behavior: "instant" });
  }, [displayedMovies.length]);

  return {
    handleClick,
    handleChange,
    displayedMovies,
    searchResults,
    selectedCategory,
    loading,
    error,
    handleLoadMore,
  };
};

export default useMovie;
