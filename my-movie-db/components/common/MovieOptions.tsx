import React from "react";

const MovieOptions = ({onChange, value}) => { 
  return (
    <div className="text-text">
      <select
        name="sort"
        id="sort"
        className="bg-foreground py-3 rounded-lg outline-0 focus:ring focus:ring-accent px-6"
        onChange={onChange}
        value={value}
      >
        <option value="all" >Show All</option>
        <option value="popular">Popular</option>
        <option value="top-rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </div>
  );
};

export default MovieOptions;
