import React, { useEffect } from 'react'
import { useState } from "react";
import style from "./SearchBar.module.css"
import { useDispatch } from 'react-redux';
import { getDogByName } from '../../redux/actions';

function Searchbar() {

  const dispatch = useDispatch()

  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    let { value } = event.target;
    setName(value);
  };
  
  useEffect(() => {
    dispatch(getDogByName(name));
  }, [name, dispatch]);

  return (
    <div className={style.searchContainer}>
      <input type="text" onChange={handleInputChange} value={name} placeholder="Enter a breed" />
  </div>
  );
}

export default Searchbar;