import { FaVideo } from "react-icons/fa6";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <FaVideo className="text-accent lg:text-3xl md:text-2xl text-sm" />
      <h2 className="lg:text-3xl md:text-2xl text-lg text-accent font-bold">CineTrack</h2>
    </div>
  );
};

export default Logo;
