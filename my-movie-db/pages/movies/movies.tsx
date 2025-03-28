import ItemsCard from "@/components/common/ItemsCard";
import MovieOptions from "@/components/common/MovieOptions";
import { useMovieStore } from "@/store/MovieStore";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";

const Movies = () => {
  const router = useRouter(); 
  const movies = useMovieStore((state) => state.movie);
  const popularMovies = useMovieStore((state) => state.popularMovies);
  const topRatedMovies = useMovieStore((state) => state.topRatedMovies);
  const upcomingMovies = useMovieStore((state) => state.upcomingMovies);
  const getMovies = useMovieStore((state) => state.getMovies ?? (() => {}));
  const getPopularMovies = useMovieStore(
    (state) => state.getPopularMovies ?? (() => {})
  );
  const getTopRatedMovies = useMovieStore(
    (state) => state.getTopRatedMovies ?? (() => {})
  );
  const getUpcomingMovies = useMovieStore(
    (state) => state.getUpcomingMovies ?? (() => {})
  );
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    getMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcomingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value);
  };

  let displayedMovies = [];
  switch (selectedCategory) {
    case "popular":
      displayedMovies = popularMovies;
      break;
    case "top-rated":
      displayedMovies = topRatedMovies;
      break;
    case "upcoming":
      displayedMovies = upcomingMovies;
      break;
    default:
      displayedMovies = movies;
      break;
  }

  const  handleClick = (id: number, type: "movie" | "tv") => {
    router.push(`/movies/${id}?type=${type}`);
  };

  return (
    <div>
      <div className="mb-3 ml-1">
        <MovieOptions onChange={handleChange} value={selectedCategory} />
      </div>

      <section className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 gap-3 bg-foreground p-6">
        {displayedMovies.map((movie) => (
          <ul key={movie.id}>
            <ItemsCard
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              onClick={() => handleClick(movie.id, 'movie')}
            />
          </ul>
        ))}
      </section>
    </div>
  );
};

export default Movies;
