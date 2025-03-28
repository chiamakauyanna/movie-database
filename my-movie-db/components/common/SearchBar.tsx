import { useSearchStore } from "@/store/SearchStore";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const search = useSearchStore((state) => state.details);
  const getSearch = useSearchStore((state) => state.getSearchDetails);

  useEffect(() => {
    if(query){
      getSearch(query)
    } 
  }, [getSearch, query])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  };

  return (
    <form className="flex mt-2 md:mt-0 lg:mt-0">
      <input
        id="search-input"
        type="text"
        placeholder="Search for a movie or TV show..."
        className="px-4 lg:w-80 md:w-80 w-60 py-2 bg-foreground shadow text-gray-100 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-accent"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="flex items-center justify-center text-gray-100 px-4 bg-accent border border-[#1E1E1E] rounded-r-lg transition"
      >
        <FaMagnifyingGlass />
      </button>
    </form>
  );
};

export default SearchBar;
