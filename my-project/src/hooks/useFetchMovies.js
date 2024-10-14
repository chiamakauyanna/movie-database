import { useState, useEffect } from 'react';
import { fetchMovies } from '../api/apiConfig';
import { fetchNowplayingMovies } from '../api/apiConfig';
import { fetchTopRatedMovies } from '../api/apiConfig';
import { fetchTrendingMovies } from '../api/apiConfig';
import { fetchPopularMovies } from '../api/apiConfig';
import { fetchUpcomingMovies } from '../api/apiConfig';

const useFetchMovies = (initialPage = 1) => {
  const [movies, setMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      setError(null);

      // Use Promise.all to fetch all data in parallel to reduce total loading time.
      try {
        const [
          moviesData,
          nowPlayingData,
          topRatedData,
          popularData,
          trendingData,
          upcomingData
        ] = await Promise.all([
          fetchMovies(page),
          fetchNowplayingMovies(page),
          fetchTopRatedMovies(page),
          fetchPopularMovies(page),
          fetchTrendingMovies(page),
          fetchUpcomingMovies(page),
        ]);

        setMovies((prev) => [...prev, ...moviesData]);
        setNowPlayingMovies((prev) => [...prev, ...nowPlayingData]);
        setTopRatedMovies((prev) => [...prev, ...topRatedData]);
        setPopularMovies((prev) => [...prev, ...popularData]);
        setTrendingMovies((prev) => [...prev, ...trendingData]);
        setUpcomingMovies((prev) => [...prev, ...upcomingData]);
      } catch (err) {
        setError(
          "Uh-oh! We couldn't load the content. Please check your connection or try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [page]);

  return {
    movies,
    nowPlayingMovies,
    popularMovies,
    trendingMovies,
    upcomingMovies,
    topRatedMovies,
    loading,
    error,
    setPage
  };
};

export default useFetchMovies;
