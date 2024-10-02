import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieCard from './common/MovieCard';
import ShowDetails from './common/ShowDetails'; // Ensure you import your ShowDetails component

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to navigate back to the main page

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

        // Fetch similar movies
        const similarResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`
        );
        setSimilarMovies(similarResponse.data.results);
      } catch (err) {
        setError('Failed to fetch movie details.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  // Handle navigation to movie details
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`); // Navigate to the movie details page with the movie ID
  };

  if (loading)
    return <p className="flex justify-center items-center">Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container min-w-full">
      <ShowDetails show={movie} cast={cast} />
      {/* Similar TV Shows */}
      <div>
        <h3 className="text-gray-300 font-bold text-lg p-2">
          You may also like
        </h3>
        <ul className="flex flex-wrap gap-4">
          {similarMovies.map((similarMovie) => (
            <MovieCard
              key={similarMovie.id}
              id={similarMovie.id}
              poster_path={similarMovie.poster_path}
              title={similarMovie.title}
              release_date={similarMovie.release_date}
              vote_average={similarMovie.vote_average}
              onClick={handleMovieClick} // Pass the onClick handler
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
