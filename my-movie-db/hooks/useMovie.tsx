import { useMovieStore } from "@/store/MovieStore";
import { useSearchStore } from "@/store/SearchStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useMovie = () => {
  const router = useRouter();
  const loading = useMovieStore((state) => state.loading);
  const error = useMovieStore((state) => state.error);
  const movies = useMovieStore((state) => state.movie);
  const popularMovies = useMovieStore((state) => state.popularMovies);
  const topRatedMovies = useMovieStore((state) => state.topRatedMovies);
  const upcomingMovies = useMovieStore((state) => state.upcomingMovies);
  const getMovies = useMovieStore((state) => state.getMovies ?? (() => {}));
  const getPopularMovies = useMovieStore((state) => state.getPopularMovies ?? (() => {}));
  const getTopRatedMovies = useMovieStore((state) => state.getTopRatedMovies ?? (() => {}));
  const getUpcomingMovies = useMovieStore((state) => state.getUpcomingMovies ?? (() => {}));
  const searchResults = useSearchStore((state) => state.searchResults);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    getMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
  }, [getMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const categoryMap: Record<string, typeof movies> = {
    popular: popularMovies,
    top_rated: topRatedMovies,
    upcoming: upcomingMovies,
  };
  const displayedMovies = categoryMap[selectedCategory] || movies;

  const handleClick = (id: number, type: "movie" | "tv") => {
    router.push(`/movies/${id}?type=${type}`);
  };

  return {
    handleClick,
    handleChange,
    displayedMovies,
    searchResults,
    selectedCategory,
    loading,
    error,
  };
};

export default useMovie;
