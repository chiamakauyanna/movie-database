import { Details } from "@/interfaces/interfaces";;
import { fetchMoviesSearch, fetchTvSeriesSearch } from "@/services/SearchService";
import { create } from "zustand";

interface DetailsStore {
  details: Details | null;
  loading: boolean;
  error: string | null;
  getSearchDetails: (type: "movie" | "tv", query: string) => Promise<void>;
}

export const useSearchStore = create<DetailsStore>((set) => ({
  details: null,
  loading: false,
  error: null,

  getSearchDetails: async (type, query) => {
    set({ loading: true, error: null });
    try {
      const details =
        type === "movie"
          ? await fetchMoviesSearch(query)
          : await fetchTvSeriesSearch(query);
      set({ details, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: `Failed to fetch ${type} details` });
    }
  },
}));
