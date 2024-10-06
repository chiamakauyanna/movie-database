import { useState } from 'react';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import { FaBars } from 'react-icons/fa6';
import Logo from './Logo';

const Navbar = () => {
  // State to control sidebar visibility
  const [toggle, setToggle] = useState(false);

  // Function to toggle the sidebar
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex flex-col w-screen">
      <div className="flex justify-between mx-10 items-center my-6">
        <Logo />
        <div className="text-white cursor-pointer" onClick={toggleMenu}>
          <FaBars className="text-yellow-500 lg:text-2xl md:text-md text-1xl" />
        </div>
      </div>
      <div>
        <SideBar toggle={toggle} toggleMenu={toggleMenu} />
        {/* When "menu" is clicked, toggleMenu is called */}
      </div>
      <div className="flex justify-center mb-6">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
