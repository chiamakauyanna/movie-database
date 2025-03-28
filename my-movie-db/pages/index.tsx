import Logo from "@/components/common/Logo";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen bg-[url('/background.jpg')]"
      >
        <div className="flex flex-col justify-center items-center h-screen bg-black bg-opacity-70 absolute top-0 w-screen">
          <Logo />
          <h2 className="text-gray-200 font-bold text-2xl mt-8 mb-4">
            Enjoy the newest movies
          </h2>

          <button className="mt-4 mb-4 px-10 py-2 bg-accent text-black font-bold rounded">
            <Link href="/movies">View Site</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

//  Disable the global layout for this page
Home.getLayout = function getLayout(page: React.ReactNode) {
  return <>{page}</>; 
};

