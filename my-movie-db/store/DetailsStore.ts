import { Details } from "@/interfaces/interfaces";
import {
  fetchMoviesDetails,
  fetchTvSeriesDetails,
} from "@/services/DetailsService";
import { create } from "zustand";

interface DetailsStore {
  details: Details | null;
  loading: boolean;
  error: string | null;
  getDetails: (type: "movie" | "tv", id: number) => Promise<void>;
}

export const useDetailsStore = create<DetailsStore>((set) => ({
  details: null,
  loading: false,
  error: null,

  getDetails: async (type, id) => {
    set({ loading: true, error: null });
    try {
      const details =
        type === "movie"
          ? await fetchMoviesDetails(id)
          : await fetchTvSeriesDetails(id);
      set({ details, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: `Failed to fetch ${type} details` });
    }
  },
}));
