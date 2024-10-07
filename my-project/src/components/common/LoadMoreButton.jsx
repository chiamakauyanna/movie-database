import { FaChevronRight } from "react-icons/fa6";

// Function to load more movies
const LoadMoreButton = ({ onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="text-yellow-500 font-bold text-2xl"
      >
        <FaChevronRight/>
      </button>
    </div>
  );
};

export default LoadMoreButton;
