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
    let isMounted = true; 

    const getMovies = async () => {
      setLoading(true);
      setError(null);

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
            setError(
              `Server Error: ${err.response.status} ${err.response.statusText}`
            );
          } else if (err.request) {
            setError('Network Error: Please check your internet connection.');
          } else {
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
