import React from "react";


const StarRating = ({ rating, handleRating }) => {
  let stars = (rating) => {
    let tab = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        tab.push(
          <span
            onClick={() => handleRating(i)}
            className="starss"
            style={{ color: "gold", fontSize: "20px" }}
          >
            ★{" "}
          </span>
        );
      } else {
        tab.push(
          <span
            className="starss"
            onClick={() => handleRating(i)}
            style={{ color: "white", fontSize: "20px" }}
          >
            ★
          </span>
        );
      }
    }
    return tab;
  };
  return <div className="starss">{stars(rating)}</div>;
};
StarRating.defaultProps = { handleRating: () => {} };
export default StarRating;
