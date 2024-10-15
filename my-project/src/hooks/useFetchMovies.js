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

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    let isMounted = true; // Flag to check if component is mounted

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
          upcomingData,
        ] = await Promise.all([
          fetchMovies(page),
          fetchNowplayingMovies(page),
          fetchTopRatedMovies(page),
          fetchPopularMovies(page),
          fetchTrendingMovies(page),
          fetchUpcomingMovies(page),
        ]);

        if (isMounted) {
          // Only update state if component is still mounted
          setMovies((prev) => [...prev, ...moviesData]);
          setNowPlayingMovies((prev) => [...prev, ...nowPlayingData]);
          setTopRatedMovies((prev) => [...prev, ...topRatedData]);
          setPopularMovies((prev) => [...prev, ...popularData]);
          setTrendingMovies((prev) => [...prev, ...trendingData]);
          setUpcomingMovies((prev) => [...prev, ...upcomingData]);
        }
      } catch (err) {
        if (isMounted) {
          if (err.response) {
            // Server responded with a status other than 2xx
            setError(
              `Server Error: ${err.response.status} ${err.response.statusText}`
            );
          } else if (err.request) {
            // Request was made but no response received
            setError('Network Error: Please check your internet connection.');
          } else {
            // Something else caused the error
            setError('An unexpected error occurred.');
          }
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getMovies();

    // Cleanup function to set isMounted to false when component unmounts
    return () => {
      isMounted = false;
    };
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
    loadMore,
  };
};

export default useFetchMovies;
