import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetchFromAPI = async (endpoint: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/genre/${endpoint}/list?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API Error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected Error:", (error as Error).message);
    }
    throw new Error("Failed to fetch data");
  }
};

export const fetchTvSeriesGenre = () => fetchFromAPI("tv");
export const fetchMoviesGenre = () => fetchFromAPI("movie");
