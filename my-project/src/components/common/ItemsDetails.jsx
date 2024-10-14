import { useNavigate } from 'react-router-dom';
import { FaPlay, FaPlus, FaAngleLeft } from 'react-icons/fa6';
import YoutubeTrailerEmbed from './YoutubeTrailerEmbed';

const ItemsDetails = ({
  backdrop_path,
  poster_path,
  title,
  overview,
  number_of_seasons,
  number_of_episodes,
  first_air_date_year,
  last_air_date,
  episode_run_time,
  release_date,
  vote_average,
  original_language,
  runtime,
  genres = [],
  cast = [],
  trailer, 
}) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center text-center gap-5 text-gray-100 hover:text-yellow-500 transition delay-150 ease-in-out z-10 top-4 left-11 font-bold px-4 py-2 rounded absolute"
      >
        <FaAngleLeft /> Back
      </button>
      <div className="flex flex-col">
        {backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt={title || 'Backdrop'}
            loading="lazy"
            className="relative h-screen opacity-10 w-screen"
          />
        )}
        <div className="absolute bg-[#1E1E1E] mt-72 flex justify-center gap-5 md:flex-row-reverse flex-col w-screen md:justify-between p-7 lg:justify-around lg:flex-row-reverse lg:items-start md:items-start items-center">
          <div>
            {poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                alt={title || 'Poster'}
                className="rounded"
                loading="lazy"
              />
            )}
          </div>
          <div className="w-4/5 lg:w-1/2 flex flex-col flex-wrap p-4 lg:text-left md:text-left text-center">
            <h2 className="text-2xl top-7 lg:text-3xl mb-7 text-gray-100 font-bold">
              {title}
            </h2>
            {vote_average !== undefined && (
              <p className="bg-yellow-500 py-2 rounded w-48 text-center px-2">
                Rating - {vote_average.toFixed(1)}
              </p>
            )}
            {/* WatchList */}
            <div className="text-sm text-gray-100 mt-5 flex flex-col-reverse gap-4 justify-center lg:justify-left md:justify-left">
              <div>
                <h3 className="mb-3 text-yellow-500 text-base">Add to WatchList</h3>
                <button className="border border-yellow-500 px-3 py-2 rounded w-10">
                  <FaPlus />
                </button>
              </div>

              {/* Show View Trailer button only if trailer exists */}
              {trailer ? (
                <TrailerEmbed trailer={trailer?.key} />
              ) : (
                <button
                  disabled
                  className="bg-gray-600 text-gray-400 font-bold px-3 py-2 rounded flex items-center gap-3 cursor-not-allowed"
                >
                  <FaPlay />
                  No Trailer Available
                </button>
              )}
            </div>
            <div className='py-4 mt-6'>
              <p className="mb-3 text-yellow-500 text-base">Overview </p>
              <p className="text-gray-200 mt-4 text-sm text-justify">
                {overview || 'No description available.'}
              </p>
            </div>
            {release_date && (
              <p className="text-yellow-500 mt-2">Released - {release_date}</p>
            )}
            {runtime !== undefined && (
              <p className="text-yellow-500 mt-2">
                Duration - {runtime} minutes
              </p>
            )}
            {original_language && (
              <p className="text-yellow-500 mt-2">
                Language - {original_language.toUpperCase()}
              </p>
            )}
            {(number_of_seasons || number_of_episodes) && (
              <div className="flex justify-between mt-4 border border-yellow-500 p-6">
                {number_of_seasons && (
                  <p className="text-yellow-500 mt-2">
                    Seasons - {number_of_seasons}
                  </p>
                )}
                {number_of_episodes && (
                  <p className="text-yellow-500 mt-2">
                    Episodes - {number_of_episodes}
                  </p>
                )}
              </div>
            )}
            {first_air_date_year && (
              <p className="text-yellow-500 mt-8">
                First aired - {first_air_date_year}
              </p>
            )}
            {last_air_date && (
              <p className="text-yellow-500 mt-2">
                Last aired - {last_air_date}
              </p>
            )}
            {episode_run_time && (
              <p className="text-yellow-500 mt-2">
                Episode Duration - {episode_run_time[0] || 'N/A'} minutes
              </p>
            )}
            {genres.length > 0 ? (
              <p className="text-yellow-500 mt-2">
                Genres - {genres.map((genre) => genre.name).join(', ')}
              </p>
            ) : (
              <p className="text-yellow-500 mt-2">Genres - N/A</p>
            )}

            {/* Cast */}
            <div className="border border-yellow-500 mt-8 px-9 pb-3">
              <h3 className="text-gray-400 text-2xl text-center font-bold mt-3">
                Cast
              </h3>
              <ul className="flex flex-col gap-5 mt-5">
                {cast.length > 0 ? (
                  cast.map((actor) => (
                    <li
                      key={actor.id || actor.cast_id || actor.credit_id}
                      className="text-gray-300 text-sm flex items-center gap-5 border-b-2 pb-6 border-yellow-500"
                    >
                      {actor.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w45${actor.profile_path}`}
                          alt={actor.name}
                          loading="lazy"
                          className="rounded-full"
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
