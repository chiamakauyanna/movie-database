
import { useState, useEffect } from 'react';
import { fetchTvShows } from '../components/api/apiConfig';

const useFetchTvShows = (initialPage = 1) => {

  const [tvshow, setTvShow] = useState([]);
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

  return { tvshow, loading, error, loadMore };
};

export default useFetchTvShows;
