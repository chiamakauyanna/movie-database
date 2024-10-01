import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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
    // Function to fetch movie details by ID
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
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p className="flex justify-center items-center">Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container min-w-full">
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="mb-4 text-yellow-500 z-10 top-4 left-11 font-bold px-4 py-2 rounded absolute"
      >
        Back Home
      </button>
      {movie && (
        <div className="flex flex-col">
          {movie.backdrop_path && (
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.original_title}
              loading="lazy"
              className="relative border-2 h-screen opacity-15 w-screen"
            />
          )}
          <div className="absolute bg-black mt-72 p-6 flex justify-center gap-5 md:flex-row md:flex-wrap md:justify-start lg:gap-14 lg:flex-row flex-col ">
            <div className=" ">
              <img
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                alt={movie.original_title}
                className="rounded-md"
              />
            </div>
            <div className="w-4/5 lg:w-1/2 flex flex-col flex-wrap p-2">
              <h2 className="text-2xl lg:text-text-3xl mb-7 text-gray-100 font-bold">
                {movie.original_title}
              </h2>
              <p className="bg-yellow-500 w-24 py-2 text-center rounded">
                <strong>Rating:</strong> {movie.vote_average.toFixed(1)}
              </p>
              <p className="text-gray-200 mt-4 text-sm">
                {movie.overview || "No description available."}
              </p>
              <p className="text-yellow-500 mt-3">
                <strong>Released:</strong> {movie.release_date}
              </p>
              <p className="text-yellow-500 mt-1">
                <strong>Duration:</strong> {movie.runtime} minutes
              </p>
              <p className="text-yellow-500 mt-1">
                <strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}
              </p>
               {/* Cast */}
            <div className="">
              <h3 className="text-yellow-500 text-md font-bold mt-3">Casts</h3>
              <ul className="">
                {cast.map((actor) => (
                  <li key={actor.cast_id} className="text-gray-300 text-sm">
                    {actor.name} as {actor.character}
                  </li>
                ))}
              </ul>
            </div>
            </div>
            <div className="text-sm text-gray-100 mt-5 space-x-6">
              <button className="ring ring-yellow-500 px-3 py-2 rounded">+</button>
              <button className="bg-yellow-500 text-black font-bold px-3 py-2 rounded">
                Watch Trailer
              </button>
            </div>

           

            {/* Similar Movies */}
            <div className="">
              <h3 className="text-gray-300 font-bold text-lg p-2">You may also like</h3>
              <ul className="flex flex-wrap gap-4 justify-center">
                {similarMovies.map((similarMovie) => (
                  <li key={similarMovie.id} className="">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${similarMovie.poster_path}`}
                      alt={similarMovie.title}
                      loading="lazy"
                      className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
                    />
                    <p className="text-white font-medium py-3 w-52 flex flex-wrap">{similarMovie.title}</p>
                    <div className="text-xs flex justify-between">
                      <p className="text-gray-400 ">
                        {similarMovie.release_date ? new Date(similarMovie.release_date).getFullYear() : "N/A"}
                      </p>
                      <p className="text-yellow-500">
                        {similarMovie.vote_average ? similarMovie.vote_average.toFixed(1) : "0.0"}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
