import { ReactNode } from "react";

export interface LayoutProp {
  children: ReactNode;
}

export interface Movie {
  name?: string;
  id?: number;
  title?: string;
  overview?: string;
  poster_path: string;
  release_date?: number | string;
  vote_average?: number | string;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
  first_air_date?: string | number;
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

export interface Tv {
  backdrop_path: string;
  id?: number;
  name: string;
  overview?: string;
  poster_path: string;
  first_air_date: string | number;
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
  backdrop_path?: string;
  belongs_to_collection?: string;
  genres?: Genre[];
  id?: number;
  homepage?: string;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  revenue?: number;
  runtime?: number;
  status?: string;
  tagline?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  cast?: Cast[];
  episode_run_time?: number[];
  first_air_date?: string;
  last_air_date?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  original_name?: string;
  title?: string;
}

export interface MovieOptionsProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}
