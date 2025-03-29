import Link from "next/link";
import { useRouter } from "next/router";
import { FaFilm, FaHouse, FaTv } from "react-icons/fa6";
import Logo from "../common/Logo";
import { useToggle } from "@/store/toggleStore";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

const SideBar = () => {
  const router = useRouter();
  const toggle = useToggle((state) => state.toggle);
  const setToggle = useToggle((state) => state.setToggle);

  const menuItems = [
    { name: "Home", icon: <FaHouse />, route: "/" },
    { name: "Movie", icon: <FaFilm />, route: "/movies" },
    { name: "TV Shows", icon: <FaTv />, route: "/tv" },
  ];

  useEffect(() => {
    setToggle(false);
  }, [router.pathname, setToggle]);

  return (
    <div
      className={`flex-initial fixed bg-background h-screen transform transition-transform duration-500 ease-out
    ${toggle ? "translate-x-0" : "-translate-x-full"} 
    lg:relative md:relative lg:translate-x-0 md:translate-x-0 lg:w-lg md:w-md w-52`}
    >
      <div className="flex items-center justify-around pt-12">
        <Logo />
        <div
          className="lg:hidden md:hidden flex text-accent"
          onClick={() => setToggle(false)}
        >
          <IoClose size={24}/>
        </div>
      </div>

      <ul className="text-gray-400 flex flex-col gap-8 mt-20">
        {menuItems.map((item, index) => {
          const isActive = router.pathname === item.route;

          return (
            <li
              key={index}
              className={`ml-8 font-bold text-md flex items-center gap-4 transition duration-100 ease-in-out lg:text-base md:text-sm text-sm
                ${isActive ? "text-accent" : "hover:text-accent"}`}
            >
              {item.icon}
              <Link href={item.route}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
