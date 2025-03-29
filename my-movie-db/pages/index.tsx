import Logo from "@/components/common/Logo";
import Link from "next/link";
import { FaFilm, FaTv, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" text-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative flex flex-col justify-center items-center h-screen p-6 text-center">
          <Logo />
          <h2 className="text-gray-200 font-bold text-4xl mt-6 mb-4">
            Discover & Stay Updated on Movies & TV Shows
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-lg">
            Explore trending movies and TV shows, get recommendations, and never miss out on the latest releases.
          </p>
          <Link href="/movies">
            <button className="px-10 py-3 bg-accent text-black font-bold rounded text-lg shadow-lg hover:bg-red-700 transition">
              Explore Now
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 px-8 text-center">
        <h3 className="text-3xl font-bold text-accent mb-8">
          Why Use CineTrack?
        </h3>
        <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg w-72 text-center shadow-lg">
            <FaFilm className="text-accent text-4xl mb-4 mx-auto" />
            <h4 className="text-xl font-bold mb-2">Explore Movies</h4>
            <p className="text-gray-400">
              Browse through a vast collection of movies, from blockbusters to hidden gems.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg w-72 text-center shadow-lg">
            <FaTv className="text-accent text-4xl mb-4 mx-auto" />
            <h4 className="text-xl font-bold mb-2">Discover TV Shows</h4>
            <p className="text-gray-400">
              Stay up to date with the latest and most popular TV shows.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg w-72 text-center shadow-lg">
            <FaStar className="text-accent text-4xl mb-4 mx-auto" />
            <h4 className="text-xl font-bold mb-2">Get Recommendations</h4>
            <p className="text-gray-400">
              Find movies and shows based on your preferences and trending picks.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent text-black py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Start Exploring with CineTrack!</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Dive into a world of movies and TV shows, and stay informed on what&apos;s trending.
        </p>
        <Link href="/movies">
          <button className="px-10 py-3 bg-black text-gray-100 font-bold rounded text-lg shadow-lg hover:bg-gray-800 transition">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
}

// Disable the global layout for this page
Home.getLayout = function getLayout(page: React.ReactNode) {
  return <>{page}</>;
};
