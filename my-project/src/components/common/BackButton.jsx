const BackButton = () => {
  return (
    <div>
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="mb-4 text-yellow-500 z-10 top-4 left-11 font-bold px-4 py-2 rounded absolute"
      >
        Back Home
      </button>
    </div>
  );
};

export default BackButton;
