import axios from 'axios';

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// movies

// Fetch movies with pagination
export const fetchMovies = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${apiKey}&page=${page}&language=en-US`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

// Fetch top rated movies with pagination
export const fetchTopRatedMovies = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
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
    console.error('Error fetching popular movies:', error);
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
    console.error('Error fetching upcoming movies:', error);
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
    console.error('Error fetching now playing movies:', error);
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
    console.error('Error fetching trending movies:', error);
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
    console.error('Error fetching tv shows:', error);
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
    console.error('Error fetching popular tv shows:', error);
    throw error;
  }
};

// Fetch top rated tvshows with pagination
export const fetchTopRatedTvShows = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/top_rated?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching top rated tv shows:', error);
    throw error;
  }
};

// Fetch top trending tvshows with pagination
export const fetchTrendingTvShows = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/tv/day?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching trending tv shows:', error);
    throw error;
  }
};

// Fetch on the air tvshows with pagination
export const fetchOnTheAirTvShows = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/on_the_air?api_key=${apiKey}&language=en-US&page=${page}`
    );
    return response.data.results; // Return the array of movies
  } catch (error) {
    console.error('Error fetching on the air tv shows:', error);
    throw error;
  }
};

// Fetch Details (for both movies and TV shows)
export const fetchDetails = async (id, type) => {
  try {
    // Fetch movie or TV show details
    const response = await axios.get(`${BASE_URL}/${type}/${id}`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        include_adult: false,
      },
    });
    const details = response.data;

    // Fetch cast information
    const castResponse = await axios.get(`${BASE_URL}/${type}/${id}/credits`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        include_adult: false,
      },
    });
    const cast = castResponse.data.cast.slice(0, 5); // Get top 5 cast members

    // Fetch trailer (videos) information
    const trailerResponse = await axios.get(
      `${BASE_URL}/${type}/${id}/videos`,
      {
        params: {
          api_key: apiKey,
          language: 'en-US',
          include_adult: false,
        },
      }
    );
    const trailers = trailerResponse.data.results.filter(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    ); // Filter for trailers hosted on YouTube

    const trailer = trailers.length > 0 ? trailers[0] : null; // Get the first available trailer

    return { details, cast, trailer };
  } catch (err) {
    console.error('Error fetching details:', err.response?.data || err.message);
    throw new Error('Error fetching content. Please try again later.');
  }
};
