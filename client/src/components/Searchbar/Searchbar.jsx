import React from 'react'
import { useState } from "react";
import style from "./SearchBar.module.css"
import { useDispatch } from 'react-redux';
import { getDogByName } from '../../redux/actions';

function SearchBar() {

  const dispatch = useDispatch()

  const [name, setName] = useState("")

  const handleInputChange = (event) => {
      let { value } = event.target;
      setName(value);
  }

  const onSearch = () => {
    dispatch(getDogByName(name))
    setName("")
  }

  return (
    <div className={style.SearchContainer}>
      <input id={style.searchInput} type="search" onChange={handleInputChange} value={name} placeholder="Ingrese una raza" />
      <button className="btn" onClick={() => onSearch()}>
        Buscar
      </button>
  </div>
  );
}

export default SearchBar;