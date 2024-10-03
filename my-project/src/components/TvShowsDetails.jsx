import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ShowDetails from './common/ShowDetails'; // Ensure you import your ShowDetails component

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

const TvShowsDetails = () => {
  const { id } = useParams(); // Get the show ID from the URL
  const [show, setShow] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    // Function to fetch tv shows details by ID
    const fetchTvShowsDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch tv shows details
        const showsResponse = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`
        );
        setShow(showsResponse.data);

        // Fetch tv shows cast
        const castResponse = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`
        );
        setCast(castResponse.data.cast.slice(0, 5)); // Get top 5 cast members

      } catch (err) {
        setError('Failed to fetch TV show details.');
      } finally {
        setLoading(false);
      }
    };

    fetchTvShowsDetails();
  }, [id]);

 

  if (loading) {
    return <p className="flex justify-center items-center">Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container min-w-full">
      {/* Show Details Component */}
      <ShowDetails show={show} cast={cast} />
    </div>
  );
};

export default TvShowsDetails;
