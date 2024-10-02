import axios from "axios";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch movies with pagination support
export const fetchMovies = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${apiKey}&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchTvShows = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/popular?api_key=${apiKey}&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching TvShows:', error);
    throw error;
  }
};

