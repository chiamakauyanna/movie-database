import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Helper function to fetch data from API
const fetchFromAPI = async (endpoint: string, page: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${endpoint}?api_key=${API_KEY}&page=${page}`
    );
    return response.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API Error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected Error:", (error as Error).message);
    }
    throw new Error("Failed to fetch data");
  }
};

// Exported API functions
export const fetchMovies = (page: number) => fetchFromAPI("discover/movie", page);
export const fetchPopular = (page: number) => fetchFromAPI("movie/popular", page);
export const fetchUpcoming = (page: number) => fetchFromAPI("movie/upcoming", page);
export const fetchTopRated = (page: number) => fetchFromAPI("movie/top_rated", page);
export const fetchTrending = (page: number) => fetchFromAPI("trending/movie/day", page);
