import { FaBookmark, FaFilm, FaHouse, FaTv, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SideBar = ({ toggle, toggleMenu }) => {
  return (
    <div
      className={`w-[20%] h-screen shadow fixed top-0 left-0 z-50 bg-black transform transition-transform duration-300 ease-in-out ${
        toggle ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Close Button */}
      <div
        className="text-gray-500 font-bold text-xl p-4 cursor-pointer flex justify-end"
        onClick={toggleMenu}
      >
        <FaXmark />
      </div>

      <ul className="text-gray-500 flex flex-col gap-8 mt-10">
        <li className="ml-6 font-bold text-md flex items-center gap-4">
          <FaHouse/>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li className="ml-6 font-bold text-md flex items-center gap-4 focus:text-yellow-500">
          <FaFilm />
          <Link to="/movie" onClick={toggleMenu}>
            Movie
          </Link>
        </li>
        <li className="ml-6 font-bold text-md flex items-center gap-4 focus:text-yellow-500">
          <FaTv />
          <Link to="/tvshows" onClick={toggleMenu}>
            TV Shows
          </Link>
        </li>
        <li className="ml-6 font-bold text-md flex items-center gap-4 focus:text-yellow-500">
          <FaBookmark />
          <Link to="/watchlist" onClick={toggleMenu}>
            Watchlist
          </Link>
        </li>
          <li className="ml-6 font-bold text-md flex items-center gap-4 focus:text-yellow-500">
          <FaBookmark />
          <Link to="/watchlist" onClick={toggleMenu}>
            Genre
          </Link>
          </li>
      </ul>
    </div>
  );
};

export default SideBar;
