import { DetailsStore } from "@/interfaces/interfaces";
import { fetchMoviesGenre, fetchTvSeriesGenre } from "@/services/genreService";

import { create } from "zustand";

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
