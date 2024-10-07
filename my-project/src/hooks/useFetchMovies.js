import { useState, useEffect } from 'react';
import { fetchMovies } from '../components/api/apiConfig';
import { fetchNowplayingMovies } from '../components/api/apiConfig';
import { fetchTopRatedMovies } from '../components/api/apiConfig';
import { fetchTrendingMovies } from '../components/api/apiConfig';
import { fetchPopularMovies } from '../components/api/apiConfig';
import { fetchUpcomingMovies } from '../components/api/apiConfig';


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
    const getMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const moviesData = await fetchMovies(page);
        setMovies((prevMovies) => [...prevMovies, ...moviesData]);

        const nowPlayingData = await fetchNowplayingMovies(page);
        setNowPlayingMovies((prevMovies) => [...prevMovies, ...nowPlayingData]);

        const topRatedData = await fetchTopRatedMovies(page);
        setTopRatedMovies((prevMovies) => [...prevMovies, ...topRatedData]);

        const popularData = await fetchPopularMovies(page);
        setPopularMovies((prevMovies) => [...prevMovies, ...popularData]);

        const trendingData = await fetchTrendingMovies(page);
        setTrendingMovies((prevMovies) => [...prevMovies, ...trendingData]);

        const upcomingData = await fetchUpcomingMovies(page);
        setUpcomingMovies((prevMovies) => [...prevMovies, ...upcomingData]);
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

  return { movies, nowPlayingMovies, popularMovies, trendingMovies, upcomingMovies, topRatedMovies, loading, error, loadMore };
};

export default useFetchMovies;
