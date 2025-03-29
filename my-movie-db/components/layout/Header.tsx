import { useToggle } from "@/store/toggleStore";
import SearchBar from "../common/SearchBar";
import { RiMenu2Fill } from "react-icons/ri";

const Header = () => {
  const setToggle = useToggle((state) => state.setToggle);

  
  return (
    <header className="flex lg:justify-center md:justify-center justify-around mb-6 py-9 items-center">
      <div onClick={() => setToggle(true)} className="lg:hidden md:hidden flex text-accent">
        <RiMenu2Fill size={24}/>  
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
