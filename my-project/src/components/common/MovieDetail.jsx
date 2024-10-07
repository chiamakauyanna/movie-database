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
          <div className="absolute bg-[#1E1E1E] mt-72 flex justify-center gap-5 md:flex-row-reverse flex-col w-screen md:justify-between p-7 lg:justify-around lg:flex-row-reverse lg:items-start md:items-start items-center">
            <div className="">
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.original_title}
                className="rounded-full w-[300px] h-[300px]"
              />
            </div>
            <div className="w-4/5 lg:w-1/2 flex flex-col flex-wrap p-4 lg:text-left md:text-left text-center">
              <h2 className="text-2xl top-7 lg:text-3xl mb-7 text-gray-100 font-bold">
                {movie.original_title}
              </h2>
              <p className="bg-yellow-500 py-2 rounded w-48 text-center px-2">
                <strong>Rating -</strong> {movie.vote_average.toFixed(1)}
              </p>
              <p className="text-gray-200 mt-4 text-sm text-justify">
                {movie.overview || 'No description available.'}
              </p>
              <p className="text-yellow-500 mt-8">
                <strong className="text-gray-400 ">Released -</strong>{' '}
                {movie.release_date}
              </p>
              <p className="text-yellow-500 mt-2">
                <strong className="text-gray-400 ">Duration -</strong>{' '}
                {movie.runtime} minutes
              </p>
              <p className="text-yellow-500 mt-2">
                <strong className="text-gray-400 ">Genres -</strong>{' '}
                {movie.genres.map((genre) => genre.name).join(', ')}
              </p>
              <p className="text-yellow-500 mt-2">
                <strong className="text-gray-400 ">Language -</strong>{' '}
                {movie.original_language}
              </p>
              {/* Cast */}
              <div className="border border-yellow-500 mt-8 px-9 pb-3">
                <h3 className="text-gray-400 text-2xl text-center font-bold mt-3">
                  Casts
                </h3>
                <ul className="flex flex-col gap-5 mt-5">
                  {cast.map((actor) => (
                    <li
                      key={actor.cast_id}
                      className="text-gray-300 text-sm flex items-center gap-5 border-b-2 pb-6 border-yellow-500"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w45${actor.profile_path}`}
                        alt={actor.name}
                        loading="lazy"
                        className="rounded-full"
                      />
                      <p>
                        {actor.name} as {actor.character}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-sm text-gray-100 mt-5 flex gap-4 justify-center lg:justify-left md:justify-left">
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
