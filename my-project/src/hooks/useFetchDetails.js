import { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

const useFetchDetails = (type, id) => {
  const [details, setDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      // Prevent fetching if no ID is provided
      if (!id) return;

      setLoading(true);
      setError(null);
      try {
        // Fetch details (movie or TV show based on type)
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}`,
          {
            params: {
              api_key: apiKey,
              language: 'en-US',
            },
          }
        );
        setDetails(response.data);

        // Fetch cast
        const castResponse = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}/credits`,
          {
            params: {
              api_key: apiKey,
              language: 'en-US',
            },
          }
        );
        setCast(castResponse.data.cast.slice(0, 5)); // Get top 5 cast members
      } catch (err) {
        console.error(
          'Error fetching details:',
          err.response?.data || err.message
        );
        setError(
          "Uh-oh! We couldn't load the content. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [type, id]);

  return { details, cast, loading, error };
};

export default useFetchDetails;
