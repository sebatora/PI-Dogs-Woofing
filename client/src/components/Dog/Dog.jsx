import React from "react";
import { Link } from "react-router-dom";
import style from "./Dog.module.css"

function Dog({ id, image, name, temperaments, weight }) {
  return (
    <div className={style.dogContainer}>
      <Link to={`/detail/${id}`} className={style.dogLink}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <h3>Peso | {weight}</h3>
        <h3>Temperamentos</h3>
        <div className={style.dogTemperaments}>
          {
            temperaments?.map(temp => {
              return <div key={temp}>{temp}</div>
            })
          }
      </div>
      </Link>
    </div>
  );
}

export default Dog;
