import React from "react";
import StarRating from "./StarRating";

const Movies = ({ movielists }) => {
  return (
    <div className="names">
      <img className="img" src={movielists.image} alt="" />
      <div>
        <StarRating rating={movielists.rating} />
      </div>
      <h2>{movielists.name}</h2>
      <h3>
        {movielists.Genre} {movielists.date}
      </h3>
    </div>
  );
};

export default Movies;
