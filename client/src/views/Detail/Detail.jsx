import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDogById } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../Loading/Loading";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { image, name, height, weight, temperaments, life_span } = useSelector(state => state.dogById);

  useEffect(() => {
    dispatch(getDogById(id));

    return () => dispatch(cleanDetail())

  }, [id]);

  return (
    <div>
      {name ? (
        <div>
          <img src={image} alt={name} />
          <h2>NAME</h2>
          <h3>{name}</h3>
          <h2>HEIGHT</h2>
          <h3>{height}</h3>
          <h2>WEIGHT</h2>
          <h3>{weight}</h3>
          <h2>LIFE SPAN</h2>
          <h3>{life_span}</h3>
          <h2>TEMPERAMENTS</h2>
          {
              temperaments?.map(temp => {
                return <h3 key={temp}>{temp}</h3>
              })
          }
        </div> )
      : ( <Loading /> )}
    </div>
  );
}

export default Detail;