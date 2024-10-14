import Loading from './Loading';
import ItemsDetails from './ItemsDetails';

const ItemsDetailsList = ({ details, cast, trailer, loading, error }) => {
  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="flex justify-center my-28 min-h-screen">
          <p className="text-gray-500 w-96 bg-gray-100 py-10 px-20 shadow">{error}</p>
        </div>
      ) : (
        details && (
          <ItemsDetails
            backdrop_path={details.backdrop_path}
            poster_path={details.poster_path}
            title={details.title || details.name}
            overview={details.overview}
            number_of_seasons={details.number_of_seasons}
            number_of_episodes={details.number_of_episodes}
            first_air_date_year={
              details.first_air_date
            }
            last_air_date={details.last_air_date}
            episode_run_time={details.episode_run_time}
            release_date={details.release_date}
            vote_average={details.vote_average}
            original_language={details.original_language}
            runtime={details.runtime}
            genres={details.genres}
            cast={cast}
            trailer={trailer}
          />
        )
      )}
    </div>
  );
};

export default ItemsDetailsList;
