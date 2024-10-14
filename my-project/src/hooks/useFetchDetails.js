import { useState, useEffect } from 'react';
import { fetchDetails } from '../api/apiConfig';

const useFetchDetails = (type, id) => {
  const [details, setDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
     // Prevent fetching if no ID is provided
      if (!id) return; 

      setLoading(true);
      setError(null);
      try {
        // Call the fetchDetails function to get details, cast, and trailer
        const data = await fetchDetails(id, type);

        // Destructure the returned data to set each state
        setDetails(data.details);
        setCast(data.cast);
        setTrailer(data.trailer);
      } catch (err) {
        console.error(
          'Error fetching details:',
          err.message || err.response?.data
        );
        setError(
          "Uh-oh! We couldn't load the content. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, id]);

  return { details, cast, trailer, loading, error }; // Return trailer along with other data
};

export default useFetchDetails;
