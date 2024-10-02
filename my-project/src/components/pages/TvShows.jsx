import { useState, useEffect } from 'react';
import { fetchTvShows } from '../api/apiConfig';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../common/SearchBar';
import SideBar from '../common/SideBar';

const TvShows = () => {
  const [tvshows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // State for pagination
  const navigate = useNavigate(); // Hook to navigate to different routes

  useEffect(() => {
    const getShows = async () => {
      setLoading(true);
      setError(null);
      try {
        const showsData = await fetchTvShows(page);
        setTvShows((prevShows) => [...prevShows, ...showsData]);
      } catch (err) {
        setError('Failed to fetch Shows.');
      } finally {
        setLoading(false);
      }
    };

    getShows();
  }, [page]);

  // Function to handle clicking on a shows card
  const handleShowsClick = (id) => {
    navigate(`/tvshows/${id}`); // Navigate to the shows details page with the shows ID
  };

  // Function to load more Shows
  const loadMoreShows = () => {
    setPage((prevPage) => prevPage + 1); // Increment the page number
  };

  return (
    <div className="container mx-auto flex flex-col max-w-none">
      <SearchBar />
      {loading && page === 1 ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : tvshows.length > 0 ? (
        <>
          <div className="flex gap-4">
            <div className="w-[20%]">
              <SideBar />
            </div>
            <ul className="flex flex-wrap gap-4 w-[80%]">
              {tvshows.map((show) => (
                <li
                  key={show.id}
                  className="rounded cursor-pointer flex flex-col"
                  onClick={() => handleShowsClick(show.id)} // Navigate to details on click
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
                    alt={show.original_title}
                    loading="lazy"
                    className="rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
                  />
                  <h2 className="text-white font-medium py-3 w-52">
                    {show.original_name}
                  </h2>
                  <div className="text-xs flex justify-between px-1">
                    <p className="text-gray-400 ">
                      {show.first_air_date
                        ? new Date(show.first_air_date).getFullYear()
                        : 'N/A'}
                    </p>
                    <p className="text-yellow-500">
                      {show.vote_average
                        ? show.vote_average.toFixed(1)
                        : '0.0'}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Button to load more Shows */}
          <button
            onClick={loadMoreShows}
            className="mt-4 mb-4  px-4 py-2 bg-yellow-400 text-black font-bold rounded mx-auto"
          >
            Load More
          </button>
        </>
      ) : (
        <p>No shows found.</p>
      )}
    </div>
  );
};

export default TvShows;
