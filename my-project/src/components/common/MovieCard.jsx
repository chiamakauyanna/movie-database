const MovieCard = ({ movie, onClick }) => {
  return (
    <li
      key={movie.id}
      className="rounded cursor-pointer flex flex-col"
      onClick={() => onClick(movie.id)} // Navigate to details on click
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        loading="lazy"
        className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
      />
      <h2 className="text-white font-medium py-3 w-52">{movie.title}</h2>
      <div className="text-xs flex justify-between px-1">
        <p className="text-gray-400 ">
          {movie.release_date
            ? new Date(movie.release_date).getFullYear()
            : 'N/A'}
        </p>
        <p className="text-yellow-500">
          {movie.vote_average ? movie.vote_average.toFixed(1) : '0.0'}
        </p>
      </div>
    </li>
  );
};

export default MovieCard;
