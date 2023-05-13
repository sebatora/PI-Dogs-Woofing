import React from "react";
import { Link } from "react-router-dom";

function Dog({ id, image, name, temperaments, weight }) {
  return (
    <div>
        <img src={image} alt={name} />
      <Link to={`/detail/${id}`} >
        <h2>NAME | {name}</h2>
        <h2>TEMPERAMENTS | {temperaments?.join(", ")}</h2>
        <h2>WEIGHT | {weight}</h2>
      </Link>
    </div>
  );
}

export default Dog;
