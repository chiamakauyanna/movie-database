import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetchFromAPI = async (endpoint: string, id: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${endpoint}/${id}?api_key=${API_KEY}`
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

export const fetchTvSeriesDetails = (id: number) => fetchFromAPI("tv", id);
export const fetchMoviesDetails = (id: number) => fetchFromAPI("movie", id);
