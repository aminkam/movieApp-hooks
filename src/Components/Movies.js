// import Button from "@restart/ui/esm/Button";
import React from "react";
import StarRating from "./StarRating";
import {  Link } from "react-router-dom";

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
     {/* <Router> */}
     <Link to={`/info/${movielists.id}`}>
     <button className="info-button">info</button>
     </Link>
     {/* </Router> */}
      
      
      
     
    </div>
  );
};

export default Movies;
