import Link from "next/link";
import { FaThList } from "react-icons/fa";
import { FaBookmark, FaFilm, FaHouse, FaTv } from "react-icons/fa6";
import Logo from "../common/Logo";

const SideBar = () => {
  const menuItems = [
    { name: "Home", icon: <FaHouse />, route: "/" },
    { name: "Movie", icon: <FaFilm />, route: "/movies/movies" },
    { name: "TV Shows", icon: <FaTv />, route: "/tvseries/tvseries" },
    { name: "Watchlist", icon: <FaBookmark />, route: "/watchlist" },
    { name: "Genre", icon: <FaThList />, route: "/genre" },
  ];

  return (
    <div className="flex-initial transform transition-transform duration-500 ease-out lg:w-lg md:w-lg w-52 lg:relative md:relative fixed bg-background h-screen">
      <div className="py-6 px-9">
        <Logo />
      </div>

      <ul className="text-gray-500 flex flex-col gap-8 mt-20">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="ml-8 font-bold text-md flex items-center gap-4 transition duration-100 ease-in-out hover:text-accent"
          >
            {item.icon}
            <Link href={item.route}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
