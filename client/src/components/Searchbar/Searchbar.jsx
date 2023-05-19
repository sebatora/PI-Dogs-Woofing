import React from 'react'
import { useState } from "react";
import style from "./SearchBar.module.css"
import { useDispatch } from 'react-redux';
import { getDogByName } from '../../redux/actions';
import search from "../../assets/search.png"

function Searchbar() {

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
      <input id={style.searchInput} type="text" onChange={handleInputChange} value={name} placeholder="Enter a breed" />
      <button onClick={() => onSearch()}>
        <img src={search} alt="Search" />
      </button>
  </div>
  );
}

export default Searchbar;