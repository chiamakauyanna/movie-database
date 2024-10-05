const MovieCard = ({
  id,
  poster_path,
  title,
  release_date,
  vote_average,
  onClick,
}) => {
  return (
    <li
      className="rounded cursor-pointer flex flex-col"
      onClick={() => onClick(id)} // Navigate to details on click
    >
      <img
        src={`https://image.tmdb.org/t/p/w154${poster_path}`}
        alt={title || 'Poster'}
        loading="lazy"
        className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 duration-300 w-30"
      />
      <div className="px-2 shadow">
      <h2 className="text-white font-medium py-3 lg:text-lg md:text-1xl text-sm">
        {title}
      </h2>
      <div className="text-xs flex justify-between">
        <p className="text-gray-400 text-xs">
          {release_date ? new Date(release_date).getFullYear() : 'N/A'}
        </p>
        <p className="text-yellow-500 text-xs">
          {vote_average ? vote_average.toFixed(1) : '0.0'}
        </p>
      </div>
      </div>
    </li>
  );
};

export default MovieCard;
