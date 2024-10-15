import { useState, useEffect } from 'react';
import { fetchTvShows } from '../api/apiConfig';
import { fetchOnTheAirTvShows } from '../api/apiConfig';
import { fetchTopRatedTvShows } from '../api/apiConfig';
import { fetchTrendingTvShows } from '../api/apiConfig';
import { fetchPopularTvShows } from '../api/apiConfig';

const useFetchTvShows = (initialPage = 1) => {
  const [tvshows, setTvShows] = useState([]);
  const [onTheAirTvShows, setOnTheAirTvShows] = useState([]);
  const [topRatedTvShows, setTopRatedTvShows] = useState([]);
  const [trendingTvShows, setTrendingTvShows] = useState([]);
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Use Promise.all to fetch all data in parallel to reduce total loading time.
 useEffect(() => {
   let isMounted = true; // Flag to check if component is mounted

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
         fetchOnTheAirTvShows(page),
         fetchTopRatedTvShows(page),
         fetchTrendingTvShows(page),
         fetchPopularTvShows(page),
       ]);

       if (isMounted) {
         // Only update state if component is still mounted
         setTvShows((prev) => [...prev, ...TvShowsData]);
         setOnTheAirTvShows((prev) => [...prev, ...OnTheAirData]);
         setTopRatedTvShows((prev) => [...prev, ...TopRatedData]);
         setTrendingTvShows((prev) => [...prev, ...trendingTvShowsData]);
         setPopularTvShows((prev) => [...prev, ...popularData]);
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

   getTvShows();

   // Cleanup function to set isMounted to false when component unmounts
   return () => {
     isMounted = false;
   };
 }, [page]);

  return {
    tvshows,
    onTheAirTvShows,
    topRatedTvShows,
    trendingTvShows,
    popularTvShows,
    loading,
    error,
    loadMore,
  };
};

export default useFetchTvShows;
