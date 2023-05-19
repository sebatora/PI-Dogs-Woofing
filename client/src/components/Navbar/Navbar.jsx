import React from "react";
import style from "./Navbar.module.css"
import { Link, useLocation } from "react-router-dom";
import dogLogo from "../../assets/DogLogo.png"
import { Searchbar } from "../index";

function Navbar() {

  const { pathname } = useLocation();

  return (
    <nav className={style.navContainer}>

      <div className={style.navLogo}>
        <Link to="/home">
          <img src={dogLogo} alt="Logo" />
        </Link>
      </div>

      <div className={style.navLinkContainer}>
        <Link to="/home" className={pathname === "/home" ? style.navActive : style.navLink}>
          Home
        </Link>

        <Link to="/create" className={pathname === "/create" ? style.navActive : style.navLink}>
          Create your breed
        </Link>

        <Link to="/about" className={pathname === "/about" ? style.navActive : style.navLink}>
          About
        </Link>

        <Link to="/exit" className={pathname === "/exit" ? style.navActive : style.navLink}>
          Exit
        </Link>
      </div>

      <div className={style.navSearchbar}>
        { pathname ==="/home" && <Searchbar /> }
        
      </div>
    </nav>
  )
}

export default Navbar