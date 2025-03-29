import { TvState } from "@/interfaces/interfaces";
import {
  fetchAiringTvSeries,
  fetchOnAirTvSeries,
  fetchPopularTvSeries,
  fetchTopRatedTvSeries,
  fetchTrendingTvSeries,
  fetchTvSeries,
} from "@/services/tvService";
import { create } from "zustand";

export const useTvStore = create<TvState>((set, get) => ({
  tv: [],
  popularTvSeries: [],
  topRatedTvSeries: [],
  airingTvSeries: [],
  onAirTvSeries: [],
  trendingTvSeries: [],
  loading: false,
  error: null,
  currentPage: {
    tv: 1,
    popular: 1,
    topRated: 1,
    onAir: 1,
    airing: 1,
    trending: 1,
  },

  getTvSeries: async (page) => {
    set({ loading: true, error: null });
    try {
      const tvSeries = await fetchTvSeries(page);
      set({
        tv: page === 1 ? tvSeries : [...get().tv, ...tvSeries],
        loading: false,
        currentPage: { ...get().currentPage, tv: page },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch tv series" });
    }
  },
  getPopularTvSeries: async (page) => {
    set({ loading: true, error: null });
    try {
      const popularTvSeries = await fetchPopularTvSeries(page);
      set({
        popularTvSeries:
          page === 1
            ? popularTvSeries
            : [...get().popularTvSeries, ...popularTvSeries],
        loading: false,
        currentPage: { ...get().currentPage, popular: page },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch tv series" });
    }
  },
  getAiringTvSeries: async (page) => {
    set({ loading: true, error: null });
    try {
      const airingTvSeries = await fetchAiringTvSeries(page);
      set({
        airingTvSeries:
          page === 1
            ? airingTvSeries
            : [...get().airingTvSeries, ...airingTvSeries],
        loading: false,
        currentPage: { ...get().currentPage, airing: page },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch tv series" });
    }
  },
  getTopRatedTvSeries: async (page) => {
    set({ loading: true, error: null });
    try {
      const topRatedTvSeries = await fetchTopRatedTvSeries(page);
      set({
        topRatedTvSeries:
          page === 1
            ? topRatedTvSeries
            : [...get().topRatedTvSeries, ...topRatedTvSeries],
        loading: false,
        currentPage: { ...get().currentPage, topRated: page },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch tv series" });
    }
  },
  getOnAirTvSeries: async (page) => {
    set({ loading: true, error: null });
    try {
      const onAirTvSeries = await fetchOnAirTvSeries(page);
      set({
        onAirTvSeries:
          page === 1
            ? onAirTvSeries
            : [...get().onAirTvSeries, ...onAirTvSeries],
        loading: false,
        currentPage: { ...get().currentPage, onAir: page },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch tv series" });
    }
  },
  getTrendingTvSeries: async (page) => {
    set({ loading: true, error: null });
    try {
      const trendingTvSeries = await fetchTrendingTvSeries(page);
      set({
        trendingTvSeries:
          page === 1
            ? trendingTvSeries
            : [...get().trendingTvSeries, ...trendingTvSeries],
        loading: false,
        currentPage: { ...get().currentPage, trending: page },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch trending tv series" });
    }
  },

  loadMoreTv: () => {
    const nextPage = get().currentPage.tv + 1;
    get().getTvSeries?.(nextPage);
  },

  loadMorePopularTv: () => {
    const nextPage = get().currentPage.popular + 1;
    get().getPopularTvSeries?.(nextPage);
  },

  loadMoreTopRatedTv: () => {
    const nextPage = get().currentPage.topRated + 1;
    get().getTopRatedTvSeries?.(nextPage);
  },

  loadMoreTrendingTv: () => {
    const nextPage = get().currentPage.trending + 1;
    get().getTrendingTvSeries?.(nextPage);
  },

  loadMoreOnAirTv: () => {
    const nextPage = get().currentPage.onAir + 1;
    get().getOnAirTvSeries?.(nextPage);
  },
  loadMoreAiringTv: () => {
    const nextPage = get().currentPage.airing + 1;
    get().getAiringTvSeries?.(nextPage);
  },
}));
