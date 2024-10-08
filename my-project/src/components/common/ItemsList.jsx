import ItemsCard from './ItemsCard';
import LoadMoreContent from './LoadMoreContent';
import Loading from './Loading';

// handling single array at the same time
const ItemsList = ({
  title,
  items = [],
  loading,
  error,
  onItemClick,
  loadMore,
}) => {
  return (
    <div className="relative">
      <h2 className="pb-1 text-md text-gray-100 pl-4">{title}</h2>
      <div className="overflow-x-auto no-scrollbar">
        <ul className="flex gap-3 ml-5 py-4">
          {loading ? (
            <Loading />
          ) : error ? (
            <div className="flex justify-center my-28 min-h-screen">
              <p className="text-red-500">{error}</p>
            </div>
          ) : (
            <>
              {items.map((item, index) => (
                <ItemsCard
                  key={`${index}-${item.id}`}
                  id={item.id}
                  poster_path={item.poster_path}
                  title={item.title || item.name}
                  release_date={item.release_date || item.first_air_date}
                  vote_average={item.vote_average}
                  onClick={onItemClick}
                />
              ))}
            </>
          )}{' '}
          {!loading && !error && (items.length > 0) && (
            <LoadMoreContent onClick={loadMore} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default ItemsList;
