import React from 'react';
import { FaAngleLeft, FaPlay, FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const MovieDetail = ({ movie, cast }) => {
  const navigate = useNavigate(); // Hook to navigate back to the previous page

  return (
    <div>
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="mb-4 flex items-center text-center gap-5 text-yellow-500 z-10 top-4 left-11 font-bold px-4 py-2 rounded absolute"
      >
        <FaAngleLeft /> Back
      </button>
      {movie && (
        <div className="flex flex-col">
          {movie.backdrop_path && (
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.original_title}
              loading="lazy"
              className="relative h-screen opacity-10 w-screen"
            />
          )}
          <div className="absolute bg-[#1E1E1E] mt-72 p-6 flex justify-center gap-5 md:flex-row w-screen md:justify-start lg:gap-14 lg:flex-row flex-col ">
            <div className="">
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.original_title}
                className="rounded-md -translate-y-32"
              />
            </div>
            <div className="w-4/5 lg:w-1/2 flex flex-col flex-wrap p-2">
              <h2 className="text-2xl lg:text-text-3xl mb-7 text-gray-100 font-bold">
                {movie.original_title}
              </h2>
              <p className="bg-yellow-500 w-24 py-2 text-center rounded">
                <strong>Rating:</strong> {movie.vote_average.toFixed(1)}
              </p>
              <p className="text-gray-200 mt-4 text-sm">
                {movie.overview || 'No description available.'}
              </p>
              <p className="text-yellow-500 mt-3">
                <strong>Released:</strong> {movie.release_date}
              </p>
              <p className="text-yellow-500 mt-1">
                <strong>Duration:</strong> {movie.runtime[0]} minutes
              </p>
              <p className="text-yellow-500 mt-1">
                <strong>Genres:</strong>{' '}
                {movie.genres.map((genre) => genre.name).join(', ')}
              </p>
              {/* Cast */}
              <div className="">
                <h3 className="text-yellow-500 text-md font-bold mt-3">
                  Casts
                </h3>
                <ul className="">
                  {cast.map((actor) => (
                    <li key={actor.cast_id} className="text-gray-300 text-sm mt-2">
                      {actor.name} as {actor.character}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-sm text-gray-100 mt-5 flex gap-8">
                <button className="border border-yellow-500 px-3 py-2 rounded">
                  <FaPlus />
                </button>
                <button className="bg-yellow-500 text-black font-bold px-3 py-2 rounded flex items-center gap-3">
                  <FaPlay /> View Trailer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
