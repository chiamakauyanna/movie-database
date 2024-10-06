import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { DiVim } from 'react-icons/di';

const Home = () => {
  return (
    <div>
      <img
        src="/src/assets/image/Background_image.jpg"
        alt="background image"
        className="h-screen bg-cover bg-center bg-no-repeat relative w-screen"
      />
      <div className="flex flex-col justify-center items-center h-screen bg-black bg-opacity-70 absolute top-0 w-screen">
        <Logo />
        <h2 className="text-gray-200 font-bold text-2xl">
          Enjoy the newest movies
        </h2>

        <button className="mt-4 mb-4 px-10 py-2 bg-yellow-500 text-black font-bold rounded">
          <Link to="/movie">Log in</Link>
        </button>
        <p className="text-gray-100">
          no account?<strong className="text-yellow-500"> Sign up</strong>{' '}
        </p>
      </div>
    </div>
  );
};

export default Home;
