import { useState, useEffect } from 'react';
import { fetchTvShows } from '../components/api/apiConfig';
import { fetchOnTheAirTvshows } from '../components/api/apiConfig';
import { fetchTvTopRatedTvShows } from '../components/api/apiConfig';
import { fetchTrendingTvshows } from '../components/api/apiConfig';
import { fetchPopularTvShows } from '../components/api/apiConfig';

const useFetchTvShows = (initialPage = 1) => {
  const [tvshows, setTvShows] = useState([]);
  const [onTheAirTvShows, setOnTheAirTvShows] = useState([]);
  const [topRatedTvShows, setTopRatedTvShows] = useState([]);
  const [trendingTvShows, setTrendingTvShows] = useState([]);
  const [popularTvshows, setPopularTvshows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Use Promise.all to fetch all data in parallel to reduce total loading time.

  useEffect(() => {
    const getTvShows = async () => {
      setLoading(true);
      setError(null);
      try {
        const [
          TvShowsData,
          OnTheAirData,
          trendingTvShowsData,
          TopRatedData,
          popularData,
        ] = await Promise.all([
          fetchTvShows(page),
          fetchOnTheAirTvshows(page),
          fetchTvTopRatedTvShows(page),
          fetchTrendingTvshows(page),
          fetchPopularTvShows(page),
        ]);

        setTvShows((prev) => [...prev, ...TvShowsData]);
        setOnTheAirTvShows((prev) => [...prev, ...OnTheAirData]);
        setTopRatedTvShows((prev) => [...prev, ...TopRatedData]);
        setTrendingTvShows((prev) => [...prev, ...trendingTvShowsData]);
        setPopularTvshows((prevTvShow) => [...prevTvShow, ...popularData]);
      } catch (err) {
        setError(
          "Uh-oh! We couldn't load the content. Please check your connection or try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    getTvShows();
  }, [page]);

  return {
    tvshows,
    onTheAirTvShows,
    topRatedTvShows,
    trendingTvShows,
    popularTvshows,
    loading,
    error,
    loadMore,
  };
};

export default useFetchTvShows;
