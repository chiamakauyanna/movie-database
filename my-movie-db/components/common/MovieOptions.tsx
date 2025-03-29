import { MovieOptionsProps } from "@/interfaces/interfaces";
import React from "react";

const MovieOptions: React.FC<MovieOptionsProps> = ({onChange, value}) => { 
  return (
    <div className="text-text">
      <select
        name="sort"
        id="sort"
        className="bg-foreground py-3 rounded-lg outline-0 focus:ring focus:ring-accent px-6 lg:text-base md:text-base text-sm"
        onChange={onChange}
        value={value}
      >
        <option value="all" >Show All</option>
        <option value="trending">Trending</option>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </div>
  );
};

export default MovieOptions;
