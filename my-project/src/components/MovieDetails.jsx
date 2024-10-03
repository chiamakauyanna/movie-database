import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieDetail from './common/MovieDetail'; // Ensure you import your ShowDetails component

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch movie details
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        setMovie(movieResponse.data);

        // Fetch movie cast
        const castResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
        );
        setCast(castResponse.data.cast.slice(0, 5)); // Get top 5 cast members
      } catch (err) {
        setError('Failed to fetch movie details.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading)
    return <p className="flex justify-center items-center">Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container min-w-full">
      <MovieDetail movie={movie} cast={cast} />
    </div>
  );
};

export default MovieDetails;
