import { SearchStore } from "@/interfaces/interfaces";
import {
  fetchMoviesSearch,
  fetchTvSeriesSearch,
} from "@/services/searchService";
import { create } from "zustand";

export const useSearchStore = create<SearchStore>((set) => ({
  searchResults: [],
  loading: false,
  error: null,

  getSearchDetails: async (query) => {
    set({ loading: true, error: null });

    try {
      const movies = await fetchMoviesSearch(query);
      const tvShows = await fetchTvSeriesSearch(query);

      set({ searchResults: [...movies, ...tvShows], loading: false });
    } catch (error) {
      set({ loading: false, error: "Failed to fetch search results" });
    }
  },
}));
