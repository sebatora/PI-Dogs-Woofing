import React from "react";
import { Link } from "react-router-dom";

function Dog({ id, image, name, temperaments, weight }) {
  return (
    <div>
        <img src={image} alt={name} />
      <Link to={`/detail/${id}`} >
        <h2>NAME | {name}</h2>
        <h3>WEIGHT | {weight}</h3>
        {
          temperaments?.map(temp => {
            return <div key={temp}>{temp}</div>
          })
      }
      </Link>
    </div>
  );
}

export default Dog;
