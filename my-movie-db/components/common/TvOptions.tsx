import React from "react";

const TvOptions = ({ onChange, value }) => {
  return (
    <div className="text-text">
      <select
        name="sort"
        id="sort"
        className="bg-foreground py-3 rounded-lg outline-0 focus:ring focus:ring-accent px-6"
        onChange={onChange}
        value={value}
      >
        <option value="all">Show All</option>
        <option value="popular">Popular</option>
        <option value="airing">Airing Today</option>
        <option value="on-air">On TV</option>
        <option value="top-rated">Top Rated</option>
      </select>
    </div>
  );
};

export default TvOptions;
