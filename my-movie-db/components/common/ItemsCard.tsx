import { Movie } from "@/interfaces/interfaces";
import Image from "next/image";

const ItemsCard = ({
  poster_path,
  title,
  release_date,
  vote_average,
  onClick,
  first_air_date,
}: Movie) => {
  return (
    <li
      className="rounded cursor-pointer flex flex-col flex-shrink-0 shadow-lg pb-6"
      onClick={onClick}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={`picture of ${title}`}
        loading="lazy"
        width={300}
        height={200}
        className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
      />
      <div className="shadow-lg shadow-background truncate px-2 pb-2">
        <h2 className="text-text hover:text-accent font-medium py-3 md:text-sm lg:text-1xl text-sm transition duration-100 ease-in-out">
          {title}
        </h2>
        <div className="text-xs flex justify-between">
          <p className="text-gray-400 text-xs">
            {release_date ? new Date(release_date).getFullYear() : "N/A"}
          </p>
          {first_air_date && (
            <p className="text-gray-400 text-xs">
              {first_air_date ? first_air_date : "N/A"}
            </p>
          )}
          <p className="bg-yellow-500 font-bold rounded px-1 text-xs">
            {vote_average ? Number(vote_average).toFixed(1) : "0.0"}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ItemsCard;
