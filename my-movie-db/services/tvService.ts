import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetchFromAPI = async (endpoint: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${endpoint}?api_key=${API_KEY}`
    );
    return response.data.results;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw new Error("Failed to fetch data");
  }
};


export const fetchTvSeries = () => fetchFromAPI('discover/tv')
export const fetchAiringTvSeries = () => fetchFromAPI('tv/airing_today');
export const fetchOnAirTvSeries = () => fetchFromAPI('tv/on_the_air')
export const fetchTopRatedTvSeries = () => fetchFromAPI('tv/top_rated')
export const fetchPopularTvSeries = () => fetchFromAPI('tv/popular')