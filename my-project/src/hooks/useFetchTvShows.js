import { useState, useEffect } from 'react';
import { fetchTvShows } from '../components/api/apiConfig';
import { fetchOnTheAirTvshows } from '../components/api/apiConfig';
import { fetchTvToprated } from '../components/api/apiConfig';
import { fetchTrendingTvshows } from '../components/api/apiConfig';
import { fetchPopularTvShows } from '../components/api/apiConfig';

const useFetchTvShows = (initialPage = 1) => {
  const [tvshow, setTvShow] = useState([]);
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

  useEffect(() => {
    const getTvShows = async () => {
      setLoading(true);
      setError(null);
      try {
        const TvShowsData = await fetchTvShows(page);
        setTvShow((prevTvShow) => [...prevTvShow, ...TvShowsData]);

        const OnTheAirData = await fetchOnTheAirTvshows(page);
        setOnTheAirTvShows((prevTvShow) => [...prevTvShow, ...OnTheAirData]);

        const TopRatedData = await fetchTvToprated(page);
        setTopRatedTvShows((prevTvShow) => [...prevTvShow, ...TopRatedData]);

        const trendingTvShowsData = await fetchTrendingTvshows(page);
        setTrendingTvShows((prevTvShow) => [
          ...prevTvShow,
          ...trendingTvShowsData,
        ]);

        const popularData = await fetchPopularTvShows(page);
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
    tvshow,
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
