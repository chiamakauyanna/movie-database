import { FaThList } from 'react-icons/fa';
import { FaBookmark, FaFilm, FaHouse, FaTv, FaXmark } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

const SideBar = ({ toggle, toggleMenu }) => {
   const location = useLocation();

   const menuItems = [
     { name: 'Home', icon: <FaHouse />, route: '/' },
     { name: 'Movie', icon: <FaFilm />, route: '/movie' },
     { name: 'TV Shows', icon: <FaTv />, route: '/tvshows' },
     { name: 'Watchlist', icon: <FaBookmark />, route: '/watchlist' },
     { name: 'Genre', icon: <FaThList />, route: '/genre' },
   ];

  return (
    <div
      className={`w-44 md:w-60 h-screen fixed top-0 left-0 z-50 bg-black transform transition-transform duration-500 ease-out ${
        toggle ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Close Button */}
      <div
        aria-label="Close Sidebar"
        className="text-gray-500 font-bold text-xl p-4 cursor-pointer flex justify-end transition duration-100 ease-in-out hover:text-yellow-500"
        onClick={toggleMenu}
      >
        <FaXmark />
      </div>

      <ul className="text-gray-500 flex flex-col gap-8 mt-10">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`ml-6 font-bold text-md flex items-center gap-4 transition duration-100 ease-in-out hover:text-yellow-500 ${
              location.pathname === item.route
                ? 'text-yellow-500'
                : 'text-gray-500'
            }`}
          >
            {item.icon}
            <Link to={item.route} onClick={toggleMenu}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
