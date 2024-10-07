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
      className="rounded cursor-pointer flex flex-col w-[92px] md:w-[154px] max-w-[185px] flex-shrink-0 shadow-lg pb-6"
      onClick={() => onClick(id)} // Navigate to details on click
    >
      <img
        src={`https://image.tmdb.org/t/p/w185${poster_path}`}
        alt={title || 'Poster'}
        loading="lazy"
        className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
      />
      <div className="px-2 shadow truncate ">
        <h2 className="text-white font-medium py-3 lg:text-lg md:text-1xl text-xs flex ">
          {title}
        </h2>
        <div className="text-xs flex justify-between">
          <p className="text-gray-400 text-xs">
            {release_date ? new Date(release_date).getFullYear() : 'N/A'}
          </p>
          <p className="bg-yellow-500 font-bold rounded px-1 text-xs">
            {vote_average ? vote_average.toFixed(1) : '0.0'}
          </p>
        </div>
      </div>
    </li>
  );
};

export default MovieCard