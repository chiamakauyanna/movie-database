import Loading from './Loading';
import ItemsDetailsCard from './ItemsDetailsCard';

const ItemsDetailsList = ({ details, cast, loading, error }) => {
  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="flex justify-center my-28 min-h-screen">
          <p className="text-red-500 max-w-md text-center px-4">{error}</p>
        </div>
      ) : (
        details && (
          <ItemsDetailsCard
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
          />
        )
      )}
    </div>
  );
};

export default ItemsDetailsList;
