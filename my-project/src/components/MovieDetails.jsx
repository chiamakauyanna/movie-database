import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to navigate back to the main page

  useEffect(() => {
    // Function to fetch movie details by ID
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        setMovie(response.data);
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
              <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
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
              <p className="text-gray-100 mt-4">
                {movie.overview || "No description available."}
              </p>
              <p className="text-yellow-500 mt-3">
                <strong>Released:</strong> {movie.release_date}
              </p>
            </div>  
               <div className="text-sm text-gray-100 mt-5 space-x-6">
                <button className="ring ring-yellow-500 px-3 py-2 rounded">+</button>
                <button className="bg-yellow-500 text-black font-bold px-3 py-2 rounded">Watch Trailer</button>
               </div>
          </div>
            
            
           
          
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
