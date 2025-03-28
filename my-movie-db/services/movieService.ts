import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Helper function to fetch data from API
const fetchFromAPI = async (endpoint: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${endpoint}?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw new Error("Failed to fetch data");
  }
};

// Exported API functions
export const fetchMovies = () => fetchFromAPI("discover/movie");
export const fetchPopular = () => fetchFromAPI("movie/popular");
export const fetchUpcoming = () => fetchFromAPI("movie/upcoming");
export const fetchTopRated = () => fetchFromAPI("movie/top_rated");
