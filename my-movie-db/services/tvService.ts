import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetchFromAPI = async (endpoint: string, page: number) => {
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


export const fetchTvSeries = (page: number) => fetchFromAPI('discover/tv', page)
export const fetchAiringTvSeries = (page: number) => fetchFromAPI('tv/airing_today', page);
export const fetchOnAirTvSeries = (page: number) => fetchFromAPI('tv/on_the_air', page);
export const fetchTopRatedTvSeries = (page: number) => fetchFromAPI('tv/top_rated', page);
export const fetchPopularTvSeries = (page: number) => fetchFromAPI('tv/popular', page);
export const fetchTrendingTvSeries = (page: number) => fetchFromAPI("trending/tv/day", page);