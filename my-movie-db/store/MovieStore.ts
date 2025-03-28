import { create } from "zustand";
import { MovieState } from "../interfaces/interfaces";
import {
  fetchMovies,
  fetchPopular,
  fetchTopRated,
  fetchUpcoming,
} from "../services/movieService";

export const useMovieStore = create<MovieState>((set) => ({
  movie: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  loading: false,
  error: null,

  getMovies: async () => {
    set({ loading: true, error: null });
    try {
      const movies = await fetchMovies();
      set({ movie: movies, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch movies" });
    }
  },

  getPopularMovies: async () => {
    set({ loading: true, error: null });
    try {
      const popularMovies = await fetchPopular();
      set({ popularMovies: popularMovies, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch popular movies" });
    }
  },

  getTopRatedMovies: async () => {
    set({ loading: true, error: null });
    try {
      const topRatedMovies = await fetchTopRated();
      set({ topRatedMovies: topRatedMovies, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch top rated movies" });
    }
  },

  getUpcomingMovies: async () => {
    set({ loading: true, error: null });
    try {
      const upcomingMovies = await fetchUpcoming();
      set({ upcomingMovies: upcomingMovies, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch upcoming movies" });
    }
  },
}));
