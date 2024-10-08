import { useLocation, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa'; 
import ItemsCard from './common/ItemsCard';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Fallback for search results and query if none exists
  const { searchResults, query } = location.state || {
    searchResults: { items: [] },
    query: '',
  };

  const { movies, tvShows } = searchResults;

  const onItemClick = (id) => {
    navigate(`/search-results/${id}`);
  };

  return (
    <div className="container max-w-none ">
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="mb-4 flex items-center text-center gap-5 text-yellow-500 font-bold px-4 py-2 rounded mt-9 ml-9"
      >
        <FaAngleLeft /> Back
      </button>
      <h2 className="text-yellow-500 font-bold text-2xl my-7 ml-10">
        Search Results for "{query}"
      </h2>
      <div className="w-screen">
        <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 px-2 mx-4">
          {items.length === 0 ? (
            <div className="w-screen flex justify-center my-28 h-screen">
              <p className="text-red-500 w-72 text-center">{error}</p>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <ItemsCard
                  key={`item-${item.id}`}
                  id={item.id}
                  poster_path={item.poster_path}
                  title={item.title || item.name}
                  release_date={item.release_date || item.first_air_date}
                  vote_average={item.vote_average}
                  onClick={onItemClick}
                />
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
