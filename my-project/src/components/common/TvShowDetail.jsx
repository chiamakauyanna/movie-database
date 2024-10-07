import { FaAngleLeft, FaPlay, FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const TvShowDetail = ({ show, cast }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center text-center gap-5 text-yellow-500 z-10 top-4 left-11 font-bold px-4 py-2 rounded absolute"
      >
        <FaAngleLeft /> Back
      </button>
      {show && (
        <div className="flex flex-col">
          {show.backdrop_path && (
            <img
              src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
              alt={show.original_name}
              loading="lazy"
              className="relative h-screen opacity-10 w-screen"
            />
          )}
          <div className="absolute bg-[#1E1E1E] mt-72 flex justify-center gap-5 md:flex-row-reverse flex-col w-screen md:justify-between p-7 lg:justify-around lg:flex-row-reverse lg:items-start md:items-start items-center">
            <div className="">
              <img
                src={`https://image.tmdb.org/t/p/w342${show.poster_path}`}
                alt={show.original_name}
                className="rounded-full w-[300px] h-[300px]"
              />
            </div>
            <div className="w-4/5 lg:w-1/2 flex flex-col flex-wrap p-4 lg:text-left md:text-left text-center">
              <h2 className="text-2xl top-7 lg:text-3xl mb-7 text-gray-100 font-bold">
                {show.original_name}
              </h2>
              <p className="bg-yellow-500 py-2 rounded w-48 text-center px-2">
                <strong>Rating -</strong> {show.vote_average.toFixed(1)}
              </p>
              <p className="text-gray-200 mt-4 text-sm text-justify">
                {show.overview || 'No description available.'}
              </p>
              <div className="flex justify-between mt-4 border border-yellow-500 p-6">
                <p className="text-yellow-500 mt-2">
                  <strong className="text-gray-400 ">Seasons - </strong>{' '}
                  {show.number_of_seasons}
                </p>
                <p className="text-yellow-500 mt-2">
                  <strong className="text-gray-400 ">Episodes -</strong>{' '}
                  {show.number_of_episodes}
                </p>
              </div>
              <p className="text-yellow-500 mt-8">
                <strong className="text-gray-400 ">First aired -</strong>{' '}
                {show.first_air_date_year}
              </p>
              <p className="text-yellow-500 mt-2">
                <strong className="text-gray-400 ">Last aired -</strong>{' '}
                {show.last_air_date}
              </p>
              <p className="text-yellow-500 mt-2">
                <strong className="text-gray-400 ">Duration -</strong>{' '}
                {show.episode_run_time[0]} minutes
              </p>
              <p className="text-yellow-500 mt-2">
                <strong className="text-gray-400 ">Genres -</strong>{' '}
                {show.genres.map((genre) => genre.name).join(', ')}
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
                  <FaPlay />
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

export default TvShowDetail;
