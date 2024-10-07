import axios from "axios";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch movies with pagination
export const fetchMovies = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${apiKey}&page=${page}&language=en-US`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

// Fetch tvshows with pagination
export const fetchTvShows = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching TvShows:', error);
    throw error;
  }
};

// Fetch popular tvshows with pagination
export const fetchPopularTvShows = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/popular?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching TvShows:', error);
    throw error;
  }
};

// Fetch top rated tvshows with pagination
export const fetchTvToprated = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching TvShows:', error);
    throw error;
  }
};

// Fetch top rated movies with pagination
export const fetchTopratedMovies = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching Movies:', error);
    throw error;
  }
};

// Fetch trending movies with pagination
export const fetchTrendingMovies = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching Movies:', error);
    throw error;
  }
};

// Fetch top trending tvshows with pagination
export const fetchTrendingTvshows = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/tv/day?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching TvShows:', error);
    throw error;
  }
};

// Fetch now playing movies with pagination
export const fetchNowplayingMovies = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching Movies:', error);
    throw error;
  }
};

// Fetch on the air tvshows with pagination
export const fetchOnTheAirTvshows = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/on_the_air?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching TvShows:', error);
    throw error;
  }
};

// Fetch popular movies with pagination
export const fetchPopularMovies = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching Movies:', error);
    throw error;
  }
};

// Fetch upcoming movies with pagination
export const fetchUpcomingMovies = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching Movies:', error);
    throw error;
  }
};


