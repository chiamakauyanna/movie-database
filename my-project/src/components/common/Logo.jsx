import { FaVideo } from 'react-icons/fa6'

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <FaVideo className="text-yellow-500 lg:text-3xl md:text-2xl text-sm" />
      <h2 className="lg:text-3xl md:text-2xl text-lg text-yellow-500">
        Moviez
      </h2>
    </div>
  );
}

export default Logo