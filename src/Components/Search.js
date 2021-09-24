import React from "react";
import { FaSistrix } from "react-icons/fa";
import StarRating from "./StarRating";

const Search = ({ text, rating, handleChange, handleRating }) => {
  return (
    <div>
      <form className="search" action="">
        <FaSistrix />
        <input type="text" value={text} onChange={handleChange} />
        <StarRating rating={rating} handleRating={handleRating} />
      </form>
    </div>
  );
};

export default Search;
