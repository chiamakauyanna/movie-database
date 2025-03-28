import { Details } from "@/interfaces/interfaces";
import { fetchMoviesGenre, fetchTvSeriesGenre } from "@/services/GenreService";

import { create } from "zustand";

interface DetailsStore {
  genre: Details | null;
  loading: boolean;
  error: string | null;
  getGenre: (type: "movie" | "tv") => Promise<void>;
}

export const useGenreStore = create<DetailsStore>((set) => ({
  genre: null,
  loading: false,
  error: null,

  getGenre: async (type) => {
    set({ loading: true, error: null });
    try {
      const genre =
        type === "movie"
          ? await fetchMoviesGenre()
          : await fetchTvSeriesGenre();
      set({ genre, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: `Failed to fetch genre` });
    }
  },
}));
