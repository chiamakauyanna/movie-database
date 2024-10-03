import Menu from './Menu';
import HomeSearchBar from './HomeSearchBar';

const Home = () => {
  return (
    <div className="border-2 container max-w-none h-screen">
      <div>
        <Menu/>
      </div>
      <div>
        <HomeSearchBar />
      </div>
    </div>
  );
};

export default Home;
