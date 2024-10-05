// Function to load more movies
const LoadMoreButton = ({ onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="mt-4 mb-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded"
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
