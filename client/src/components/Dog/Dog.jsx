import React from "react";
import { Link } from "react-router-dom";
import style from "./Dog.module.css";
import { deleteDog, filterByOrigin, getDogs } from "../../redux/actions";
import { useDispatch } from "react-redux";

function Dog({ id, image, name, temperaments, weight, createInDb }) {

  const dispatch = useDispatch()

  const handleDeleteDog = async (id) => {
    await dispatch(deleteDog(id))
    .then(() => getDogs())
    window.location.reload()
  }

  return (
    <div className={style.dogContainer}>
      {createInDb && (
        <button className={style.dogDelete} onClick={() => {if (window.confirm("Are you sure you want to delete this breed?. This cannot be reversed.")) {handleDeleteDog(id)}}}>
          X
        </button>
      )}
      <Link to={`/detail/${id}`} className={style.dogLink}>


        <div className={style.dogName}>
          <h2>{name}</h2>
        </div>

        <img src={image} alt={name} />

        <div className={style.dogDetail}>
          <h4>Peso | {weight} kg</h4>
          <h4>Temperamentos</h4>
          <div className={style.dogTemperaments}>
            {temperaments?.map((temp) => {
              return <div key={temp}>{temp}</div>;
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Dog;