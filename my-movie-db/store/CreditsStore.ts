import { Details } from "@/interfaces/interfaces";
import {
  fetchMoviesCredits,
  fetchTvSeriesCredits,
} from "@/services/creditsService";
import { create } from "zustand";

interface DetailsStore {
  credits: Details | null;
  loading: boolean;
  error: string | null;
  getCredits: (type: "movie" | "tv", id: number) => Promise<void>;
}

export const useCreditsStore = create<DetailsStore>((set) => ({
  credits: null,
  loading: false,
  error: null,

  getCredits: async (type, id) => {
    set({ loading: true, error: null });
    try {
      const credits =
        type === "movie"
          ? await fetchMoviesCredits(id)
          : await fetchTvSeriesCredits(id);
      set({ credits, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: `Failed to fetch ${type} credits` });
    }
  },
}));
