const TvShowCard = ({ show, onClick }) => {
  return (
    <li
      key={show.id}
      className="rounded cursor-pointer flex flex-col"
      onClick={() => onClick(show.id)} // Navigate to details on click
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
        alt={show.name}
        loading="lazy"
        className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
      />
      <h2 className="text-white font-medium py-3 w-52">{show.name}</h2>
      <div className="text-xs flex justify-between px-1">
        <p className="text-gray-400 ">
          {show.first_air_date
            ? new Date(show.first_air_date).getFullYear()
            : 'N/A'}
        </p>
        <p className="text-yellow-500">
          {show.vote_average ? show.vote_average.toFixed(1) : '0.0'}
        </p>
      </div>
    </li>
  );
};

export default TvShowCard;
