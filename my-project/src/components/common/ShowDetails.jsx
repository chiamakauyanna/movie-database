// ShowDetails.js
import React from 'react';
import { FaAngleLeft, FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const ShowDetails = ({ show, cast }) => {
  const navigate = useNavigate(); 

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center text-center gap-5 text-yellow-500 z-10 top-4 left-11 font-bold px-4 py-2 rounded absolute"
      >
        <FaAngleLeft/> Back
      </button>
      {show && (
        <div className="flex flex-col">
          {show.backdrop_path && (
            <img
              src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
              alt={show.original_name}
              loading="lazy"
              className="relative border-2 h-screen opacity-10 w-screen"
            />
          )}
          <div className="absolute bg-[#1E1E1E] mt-72 p-6 flex justify-center gap-5 md:flex-row md:justify-start lg:gap-14 lg:flex-row flex-col w-screen">
            <div className="">
              <img
                src={`https://image.tmdb.org/t/p/w342${show.poster_path}`}
                alt={show.original_name}
                className="rounded-md -translate-y-32"
              />
            </div>
            <div className="w-4/5 lg:w-1/2 flex flex-col flex-wrap p-2">
              <h2 className="text-2xl lg:text-text-3xl mb-7 text-gray-100 font-bold">
                {show.original_name}
              </h2>
              <p className="bg-yellow-500 w-24 py-2 text-center rounded">
                <strong>Rating:</strong> {show.vote_average.toFixed(1)}
              </p>
              <p className="text-gray-200 mt-4 text-sm">
                {show.overview || 'No description available.'}
              </p>
              <p className="text-yellow-500 mt-3">
                <strong>Aired:</strong> {show.first_air_date}
              </p>
              <p className="text-yellow-500 mt-1">
                <strong>Duration:</strong> {show.episode_run_time[0]} minutes
              </p>
              <p className="text-yellow-500 mt-1">
                <strong>Genres:</strong>{' '}
                {show.genres.map((genre) => genre.name).join(', ')}
              </p>
              {/* Cast */}
              <div className="">
                <h3 className="text-yellow-500 text-md font-bold mt-3">
                  Casts
                </h3>
                <ul className="">
                  {cast.map((actor) => (
                    <li key={actor.cast_id} className="text-gray-300 text-sm">
                      {actor.name} as {actor.character}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-sm text-gray-100 mt-5 space-x-6">
                <button className="ring ring-yellow-500 px-3 py-2 rounded">
                  <FaPlus />
                </button>
                <button className="bg-yellow-500 text-black font-bold px-3 py-2 rounded">
                  View Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
