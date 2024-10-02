import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './common/MovieCard';
import ShowDetails from './common/ShowDetails'; // Ensure you import your ShowDetails component

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

const TvShowsDetails = () => {
  const { id } = useParams(); // Get the show ID from the URL
  const [show, setShow] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarShows, setSimilarShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to navigate back to the main page

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

        // Fetch similar shows
        const similarResponse = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${apiKey}`
        );
        setSimilarShows(similarResponse.data.results);
      } catch (err) {
        setError('Failed to fetch TV show details.');
      } finally {
        setLoading(false);
      }
    };

    fetchTvShowsDetails();
  }, [id]);

  // Handle navigation to show details
  const handleShowClick = (showId) => {
    navigate(`/tvshows/${showId}`); // Navigate to the TV show details page with the TV show ID
  };

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

      {/* Similar TV Shows */}
      <div>
        <h3 className="text-gray-300 font-bold text-lg p-2">
          You may also like
        </h3>
        <ul className="flex flex-wrap gap-4 justify-center">
          {similarShows.map((similarShow) => (
            <MovieCard
              key={similarShow.id} // Add a key prop for list rendering
              id={similarShow.id}
              poster_path={similarShow.poster_path}
              title={similarShow.original_name}
              release_date={similarShow.first_air_date}
              vote_average={similarShow.vote_average}
              onClick={() => handleShowClick(similarShow.id)} // Use the correct click handler
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TvShowsDetails;
