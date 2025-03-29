import { create } from "zustand";
import { MovieState } from "../interfaces/interfaces";
import {
  fetchMovies,
  fetchPopular,
  fetchTopRated,
  fetchTrending,
  fetchUpcoming,
} from "../services/movieService";

export const useMovieStore = create<MovieState>()((set, get) => ({
  movie: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  trendingMovies: [],
  loading: false,
  error: null,
  currentPage: { movies: 1, popular: 1, topRated: 1, upcoming: 1, trending: 1 },

  getMovies: async (page = get().currentPage.movies) => {
    set({ loading: true, error: null });
    try {
      const movies = await fetchMovies(page);
      set({
        movie: page === 1 ? movies : [...get().movie, ...movies], 
        loading: false,
        currentPage: { ...get().currentPage, movies: page },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch movies" });
    }
  },

  getPopularMovies: async (page = get().currentPage.popular) => {
    set({ loading: true, error: null });
    try {
      const movies = await fetchPopular(page);
      set({
        popularMovies:
          page === 1 ? movies : [...get().popularMovies, ...movies],
        loading: false,
        currentPage: { ...get().currentPage, popular: page },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch popular movies" });
    }
  },

  getTopRatedMovies: async (page = get().currentPage.topRated) => {
    set({ loading: true, error: null });
    try {
      const movies = await fetchTopRated(page);
      set({
        topRatedMovies:
          page === 1 ? movies : [...get().topRatedMovies, ...movies],
        loading: false,
        currentPage: { ...get().currentPage, topRated: page },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch top-rated movies" });
    }
  },

  getUpcomingMovies: async (page = get().currentPage.upcoming) => {
    set({ loading: true, error: null });
    try {
      const movies = await fetchUpcoming(page);
      set({
        upcomingMovies:
          page === 1 ? movies : [...get().upcomingMovies, ...movies],
        loading: false,
        currentPage: { ...get().currentPage, upcoming: page },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch upcoming movies" });
    }
  },

  getTrendingMovies: async (page = get().currentPage.trending) => {
    set({ loading: true, error: null });
    try {
      const movies = await fetchTrending(page);
      set({
        trendingMovies:
          page === 1 ? movies : [...get().trendingMovies, ...movies],
        loading: false,
        currentPage: { ...get().currentPage, trending: page },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ loading: false, error: "Failed to fetch trending movies" });
    }
  },
  
  loadMoreMovies: () => {
    const nextPage = get().currentPage.movies + 1;
    get().getMovies?.(nextPage);
  },

  loadMorePopularMovies: () => {
    const nextPage = get().currentPage.popular + 1;
    get().getPopularMovies?.(nextPage);
  },

  loadMoreTopRatedMovies: () => {
    const nextPage = get().currentPage.topRated + 1;
    get().getTopRatedMovies?.(nextPage);
  },

  loadMoreTrendingMovies: () => {
    const nextPage = get().currentPage.trending + 1;
    get().getTrendingMovies?.(nextPage);
  },

  loadMoreUpcomingMovies: () => {
    const nextPage = get().currentPage.upcoming + 1;
    get().getUpcomingMovies?.(nextPage);
  },
}));
