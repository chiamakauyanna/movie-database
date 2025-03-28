import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetchFromAPI = async (endpoint: string, query: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/${endpoint}?api_key=${API_KEY}&query=${query}`
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

export const fetchTvSeriesSearch = (query: string) => fetchFromAPI("tv", query);
export const fetchMoviesSearch = (query: string) =>
  fetchFromAPI("movie", query);
