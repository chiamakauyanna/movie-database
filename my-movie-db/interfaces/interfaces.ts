import { ReactNode } from "react";

/** ====== Layout Interface ====== */
export interface LayoutProp {
  children: ReactNode;
}

/** ====== Movie Interfaces ====== */
export interface Movie {
  id?: number;
  title?: string;
  name?: string;
  overview?: string;
  poster_path: string;
  release_date?: number | string;
  first_air_date?: string | number;
  vote_average?: number | string;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
}

export interface MovieState {
  movie: Movie[];
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  upcomingMovies: Movie[];
  loading: boolean;
  error: string | null;
  getMovies?: () => Promise<void>;
  getPopularMovies?: () => Promise<void>;
  getUpcomingMovies?: () => Promise<void>;
  getTopRatedMovies?: () => Promise<void>;
}

/** ====== TV Series Interfaces ====== */
export interface Tv {
  id?: number;
  name?: string;
  title?: string;
  overview?: string;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string | number;
  release_date?: number | string;
  vote_average: number;
  onClick?: unknown;
}

export interface TvState {
  tv: Tv[];
  popularTvSeries: Tv[];
  topRatedTvSeries: Tv[];
  airingTvSeries: Tv[];
  onAirTvSeries: Tv[];
  loading: boolean;
  error: string | null;
  getTvSeries?: () => Promise<void>;
  getPopularTvSeries?: () => Promise<void>;
  getAiringTvSeries?: () => Promise<void>;
  getTopRatedTvSeries?: () => Promise<void>;
  getOnAirTvSeries?: () => Promise<void>;
}

/** ====== Movie & TV Details Interfaces ====== */
export interface Genre {
  id: number;
  name: string;
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path?: string;
  cast_id?: number;
  credit_id?: string;
}

export interface Details {
  id?: number;
  title?: string;
  original_name?: string;
  original_title?: string;
  overview?: string;
  homepage?: string;
  imdb_id?: string;
  original_language?: string;
  popularity?: number;
  poster_path?: string;
  backdrop_path?: string;
  release_date?: string;
  first_air_date?: string;
  last_air_date?: string;
  runtime?: number;
  episode_run_time?: number[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  revenue?: number;
  status?: string;
  tagline?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  genres?: Genre[];
  belongs_to_collection?: string;
  cast?: Cast[];
}

/** ====== Store Interfaces ====== */
export interface SearchStore {
  searchResults: Movie[];
  loading: boolean;
  error: string | null;
  getSearchDetails: (query: string) => Promise<void>;
}

export interface DetailsStore {
  details?: Details | null;
  genre?: Details | null;
  credits?: Details | null;
  loading: boolean;
  error: string | null;
  getGenre?: (type: "movie" | "tv") => Promise<void>;
  getDetails?: (type: "movie" | "tv", id: number) => Promise<void>;
  getCredits?: (type: "movie" | "tv", id: number) => Promise<void>;
}

/** ====== UI & Toggle State ====== */
export interface MovieOptionsProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface ToggleState {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}
