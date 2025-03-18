import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

const BackButton = () => {
  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="mb-4 hover:text-yellow-500 text-gray-100 z-10 top-4 left-11 font-bold px-4 py-2 rounded absolute transition duration-100 ease-in-out"
      >
        Back Home
      </button>
    </div>
  );
};

export default BackButton;
