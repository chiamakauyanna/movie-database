import { Details } from "@/interfaces/interfaces";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FaAngleLeft, FaPlus } from "react-icons/fa6";

const ItemsDetails = (props: Details) => {
  const router = useRouter();

  return (
    <div className="relative">
      <button
        aria-label="Go back"
        onClick={() => router.back()}
        className="mb-4 flex items-center text-center gap-5 text-gray-100 hover:text-accent transition delay-150 ease-in-out z-10 top-4 left-11 font-bold px-4 py-2 rounded absolute"
      >
        <FaAngleLeft /> Back
      </button>

      <div className="flex flex-col">
        {props.backdrop_path && (
          <Image
            src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`}
            alt={props.title || "Backdrop"}
            loading="lazy"
            width={300}
            height={200}
            className="relative h-screen opacity-10 w-screen"
          />
        )}

        <div className="absolute bg-[#1E1E1E] mt-72 flex justify-center gap-5 md:flex-row-reverse flex-col w-screen md:justify-between p-7 lg:justify-around lg:flex-row-reverse lg:items-start md:items-start items-center">
          <div>
            {props.poster_path && (
              <Image
                src={`https://image.tmdb.org/t/p/w342${props.poster_path}`}
                alt={props.title || "Poster"}
                className="rounded"
                width={300}
                height={200}
                loading="lazy"
              />
            )}
          </div>

          <div className="w-4/5 lg:w-1/2 flex flex-col flex-wrap p-4 lg:text-left md:text-left text-center">
            <h2 className="text-2xl top-7 lg:text-3xl mb-3 text-gray-100 font-bold">
              {props.title || props.original_name}
            </h2>

            {props.tagline && (
              <p className="text-gray-400 italic text-sm mb-6">
                {props.tagline}
              </p>
            )}

            {props.vote_average !== undefined && (
              <p className="bg-accent py-2 rounded w-48 text-center px-2">
                Rating - {props.vote_average ? props.vote_average.toFixed(1)  : "N/A"}
              </p>
            )}

            {props.homepage && (
              <p className="text-accent mt-4">
                <a
                  href={props.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400"
                >
                  Official Website
                </a>
              </p>
            )}

            {props.imdb_id && (
              <p className="text-accent mt-2">
                <a
                  href={`https://www.imdb.com/title/${props.imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-yellow-400"
                >
                  View on IMDb
                </a>
              </p>
            )}

            <div className="text-sm text-gray-100 mt-5 flex flex-col-reverse gap-4 justify-center lg:justify-left md:justify-left">
              <div>
                <h3 className="mb-3 text-accent text-base">Add to WatchList</h3>
                <button
                  className="border border-accent px-3 py-2 rounded w-10"
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            <div className="py-4 mt-6">
              <p className="mb-3 text-accent text-base">Overview</p>
              <p className="text-gray-200 mt-4 text-sm">
                {props.overview || "No description available."}
              </p>
            </div>

            {props.release_date && (
              <p className="text-accent mt-2">
                Released - {props.release_date}
              </p>
            )}

            {props.status && (
              <p className="text-accent mt-2">Status - {props.status}</p>
            )}

            {props.revenue !== undefined && (
              <p className="text-accent mt-2">
                Revenue - ${props.revenue ? props.revenue.toLocaleString() : "N/A"}
              </p>
            )}

            {props.runtime !== undefined && (
              <p className="text-accent mt-2">
                Duration - {props.runtime} minutes
              </p>
            )}

            {props.original_language && (
              <p className="text-accent mt-2">
                Language - {props.original_language.toUpperCase()}
              </p>
            )}

            {(props.number_of_seasons || props.number_of_episodes) && (
              <div className="flex justify-between mt-4 border border-accent p-6">
                {props.number_of_seasons && (
                  <p className="text-accent mt-2">
                    Seasons - {props.number_of_seasons}
                  </p>
                )}
                {props.number_of_episodes && (
                  <p className="text-accent mt-2">
                    Episodes - {props.number_of_episodes}
                  </p>
                )}
              </div>
            )}

            {props.first_air_date && (
              <p className="text-accent mt-8">
                First aired - {props.first_air_date}
              </p>
            )}

            {props.last_air_date && (
              <p className="text-accent mt-2">
                Last aired - {props.last_air_date}
              </p>
            )}

            {props.episode_run_time && props.episode_run_time.length > 0 && (
              <p className="text-accent mt-2">
                Episode Duration - {props.episode_run_time[0]} minutes
              </p>
            )}

            {props.genres?.length ? (
              <p className="text-accent mt-2">
                Genres - {props.genres.map((genre) => genre.name).join(", ")}
              </p>
            ) : (
              <p className="text-accent mt-2">Genres - N/A</p>
            )}

            <div className="border border-accent mt-8 px-9 pb-3">
              <h3 className="text-gray-400 text-2xl text-center font-bold mt-3">
                Cast
              </h3>
              <ul className="flex flex-col gap-5 mt-5">
                {props.cast?.length ? (
                  props.cast.map((actor) => (
                    <li
                      key={actor.id || actor.cast_id || actor.credit_id}
                      className="text-gray-300 text-sm flex items-center gap-5 border-b-2 pb-6 border-accent"
                    >
                      {actor.profile_path ? (
                        <Image
                          src={`https://image.tmdb.org/t/p/w45${actor.profile_path}`}
                          alt={`picture of ${actor.name}`}
                          loading="lazy"
                          className="rounded-full"
                          width={50}
                          height={50}
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                          N/A
                        </div>
                      )}
                      <p>
                        {actor.name} as {actor.character}
                      </p>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-300">
                    No cast information available.
                  </p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsDetails;
