// Function to load more movies
const loadMore = () => {
  setPage((prevPage) => prevPage + 1); // Increment the page number
};

const LoadMoreButton = () => {
  return (
    <div>
      <button
        onClick={loadMore}
        className="mt-4 mb-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded mx-auto"
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
