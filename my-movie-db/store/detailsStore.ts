import { DetailsStore } from "@/interfaces/interfaces";
import {
  fetchMoviesDetails,
  fetchTvSeriesDetails,
} from "@/services/detailsService";
import { create } from "zustand";

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
