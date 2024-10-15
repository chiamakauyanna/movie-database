import React from "react";

const ItemsCard = React.memo(({
  id,
  poster_path,
  title,
  release_date,
  vote_average,
  onClick,
}) => {
  return (
    <li
      className="rounded cursor-pointer flex flex-col w-[92px] md:w-[154px] lg:w-[185px] flex-shrink-0 shadow-lg pb-6 "
      onClick={() => onClick(id)} // Navigate to details on click
      tabIndex={0} // Allow keyboard navigation
      onKeyPress={(e) => {
        if (e.key === 'Enter') onClick(id);
      }} // Handle Enter key for accessibility
      aria-label={`View details for ${title}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w185${poster_path}`}
        alt={title || 'Poster'}
        loading="lazy"
        className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
        onError={(e) => {
          e.target.src = 'https://placehold.co/600x400?text=Default+Image';
        }}
      />
      <div className="shadow truncate ">
        <h2 className="text-gray-100 font-medium py-3 md:text-base lg:text-1xl text-xs">
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
});

export default ItemsCard