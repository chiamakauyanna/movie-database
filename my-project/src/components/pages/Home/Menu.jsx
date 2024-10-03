import { FaBookmark, FaFilm, FaTv } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div
      className='w-[20%] h-screen shadow fixed top-0 left-0 z-50 bg-black '
      
    >

      <ul className="text-gray-500 flex flex-col gap-8 mt-10">
        <li className="ml-6 font-bold text-md flex items-center gap-4">
          <FaFilm />
          <Link to="/movie">
            Movie
          </Link>
        </li>
        <li className="ml-6 font-bold text-md flex items-center gap-4">
          <FaTv />
          <Link to="/tvshows">
            TV Shows
          </Link>
        </li>
        <li className="ml-6 font-bold text-md flex items-center gap-4">
          <FaBookmark />
          <Link to="/watchlist">
            Watchlist
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
