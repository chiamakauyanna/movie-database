import { useState } from 'react';
import SearchBar from './SearchBar';
import Auth from './Auth';
import SideBar from './SideBar';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
  // State to control sidebar visibility
  const [toggle, setToggle] = useState(false);

  // Function to toggle the sidebar
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex justify-between h-24 items-center mx-10">
      <SideBar toggle={toggle} toggleMenu={toggleMenu} />
      {/* When "menu" is clicked, toggleMenu is called */}

      <div className="text-white cursor-pointer" onClick={toggleMenu}>
         <FaBars/>
          
      </div>
      <SearchBar />
      <Auth />
    </div>
  );
};

export default Navbar;
