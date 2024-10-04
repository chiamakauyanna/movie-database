
import { useState, useEffect } from 'react';
import { fetchMovies } from '../components/api/apiConfig'; 

const useFetchMovies = (initialPage = 1) => {
  const [movies, setMovies] = useState([]);
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

  return { movies, loading, error, loadMore };
};

export default useFetchMovies;
