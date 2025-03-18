import { useState, useEffect } from 'react';
import { fetchDetails } from '../api/apiConfig';

const useFetchDetails = (type, id) => {
  const [details, setDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; 
    const fetchData = async () => {
      if (!id) return;

      setLoading(true);
      setError(null);
      try {
        const data = await fetchDetails(id, type);
        if (isMounted) {
          setDetails(data.details);
          setCast(data.cast);
          setTrailer(data.trailer);
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

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [type, id]);

  return { details, cast, trailer, loading, error }; 
};

export default useFetchDetails;
