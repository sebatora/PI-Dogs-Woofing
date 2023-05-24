import React from 'react';
import dogError from "../../assets/dogError.jpg"
import style from "./Error.module.css"


function Error () {
  return (
    <div className={style.errorContainer}>
      <img src={dogError} alt="ERROR" />
      <h3>Sorry, no dogs were found</h3>
      <a className={style.errorLink}  onClick={() => window.location.reload()}>BACK</a>
    </div>
  );
};

export default Error;