import React from 'react'
import style from "./Landing.module.css"
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={style.landingBack}>
        <h1>BIENVENIDOS A LA DOG APP</h1>
        <h3>Aqui encontraras toda la informacion acerca de las razas de perros existentes</h3>
        <Link to="/home">
          <button>INGRESAR</button>
        </Link>
    </div>
  )
}

export default Landing