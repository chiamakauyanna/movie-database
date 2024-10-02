import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="">
      <ul className="text-gray-500 flex flex-col h-screen gap-4">
        <li className="ml-6 font-bold mt-8 text-md">
          <Link to="/">Movies</Link>
        </li>
        <li className="ml-6 font-bold mt-2 text-md">
          <Link to="/tvshows">Tvshows</Link>
        </li>
        <li className="ml-6 font-bold mt-2 text-md">
          <Link to="/watchlist">Watchlist</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
