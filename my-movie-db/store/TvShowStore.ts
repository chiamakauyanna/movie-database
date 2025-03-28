import { TvState } from "@/interfaces/interfaces";
import { fetchAiringTvSeries, fetchOnAirTvSeries, fetchPopularTvSeries, fetchTopRatedTvSeries, fetchTvSeries } from "@/services/tvService";
import { create } from "zustand";

export const useTvStore = create<TvState>((set) => ({
  tv: [],
  popularTvSeries: [],
  topRatedTvSeries: [],
  airingTvSeries: [],
  onAirTvSeries: [],
  loading: false,
  error: null,
  getTvSeries: async () => {
    set({ loading: true, error: null });
    try {
      const tvSeries = await fetchTvSeries();
      set({ tv: tvSeries, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch tv series" });
    }
  },
  getPopularTvSeries: async () => {
    set({ loading: true, error: null });
    try {
      const popularTvSeries = await fetchPopularTvSeries();
      set({ popularTvSeries: popularTvSeries, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch tv series" });
    }
  },
  getAiringTvSeries: async () => {
    set({ loading: true, error: null });
    try {
      const airingTvSeries = await fetchAiringTvSeries();
      set({ airingTvSeries: airingTvSeries, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch tv series" });
    }
  },
  getTopRatedTvSeries: async () => {
    set({ loading: true, error: null });
    try {
      const topRatedTvSeries = await fetchTopRatedTvSeries()
      set({ topRatedTvSeries: topRatedTvSeries, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch tv series" });
    }
  },
  getOnAirTvSeries: async () => {
    set({ loading: true, error: null });
    try {
      const onAirTvSeries = await fetchOnAirTvSeries();
      set({ onAirTvSeries: onAirTvSeries, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch tv series" });
    }
  },
}));
