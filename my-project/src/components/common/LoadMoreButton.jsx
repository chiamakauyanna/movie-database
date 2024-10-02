// Function to load more movies
const LoadMoreButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 mb-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded mx-auto"
    >
      Load More
    </button>
  );
};

export default LoadMoreButton;
