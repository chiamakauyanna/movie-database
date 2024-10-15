import { useState, useEffect } from 'react';
import { fetchDetails } from '../api/apiConfig';

const useFetchDetails = (type, id) => {
  const [details, setDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to check if component is mounted
    const fetchData = async () => {
      // Prevent fetching if no ID is provided
      if (!id) return;

      setLoading(true);
      setError(null);
      try {
        // Call the fetchDetails function to get details, cast, and trailer
        const data = await fetchDetails(id, type);
        if (isMounted) {
          // Only update state if component is still mounted

          // Destructure the returned data to set each state
          setDetails(data.details);
          setCast(data.cast);
          setTrailer(data.trailer);
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

    fetchData();
    // Cleanup function to set isMounted to false when component unmounts
    return () => {
      isMounted = false;
    };
  }, [type, id]);

  return { details, cast, trailer, loading, error }; // Return trailer along with other data
};

export default useFetchDetails;
