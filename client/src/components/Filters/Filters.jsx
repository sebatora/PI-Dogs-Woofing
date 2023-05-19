import React, { useState } from "react";
import style from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterByOrigin, filterByTemp, orderAlphabetic } from "../../redux/actions";
import ordericon from "../../assets/ordericon.png"


function Filters({setCurrentPage}) {

  const dispatch = useDispatch();
  const { allTemperaments } = useSelector(state => state)

  const handleFilterByTemp = (event) => {
    const temp = event.target.value;
    dispatch(filterByTemp(temp));
    setCurrentPage(1)
  };

  const handleFilterByOrigin = (event) => {
    const origin = event.target.value;
    dispatch(filterByOrigin(origin));
    setCurrentPage(1)
  };

  const [orderAlphabeticState, setOrderAlphabeticState] = useState(false)
  // const [auxAlphabetic, setAuxAlphabetic] = useState("")

  const handleOrderAlphabetic = () => {
    dispatch(orderAlphabetic(orderAlphabeticState))
    setCurrentPage(1)
    orderAlphabeticState ? setOrderAlphabeticState(false) : setOrderAlphabeticState(true)
    // setAuxAlphabetic(`Ordenar ${order}`)
  };

  const [orderWeightState, setOrderWeightState] = useState(false)
  // const [auxAlphabetic, setAuxAlphabetic] = useState("")

  const handleOrderWeight = () => {
    dispatch(orderAlphabetic(orderWeightState))
    setCurrentPage(1)
    orderWeightState ? setOrderWeightState(false) : setOrderWeightState(true)
    // setAuxAlphabetic(`Ordenar ${order}`)
  };

  return (
    <div className={style.FilterContainer}>

      {/* FILTRO POR TEMPERAMENTO */}
      <div className={style.FilterTemperaments}>
        <select onChange={handleFilterByTemp}>
          <option value="All">Temperamentos</option>
          {allTemperaments?.map((temp) => {
            return (
              <option key={temp.id} name={temp.id} value={temp.name}>
                {temp.name}
              </option>
            );
          })}
        </select>
      </div>

      {/* FILTRO POR ORIGEN */}
      <div className={style.FilterCreated}>
        <form>
          <fieldset>
            <legend>Filtrar por origen</legend>
            <input type="radio" id="All" name="filterOrigin" value="All" onClick={event => handleFilterByOrigin(event)}/>
            <label htmlFor="All">All</label>

            <input type="radio" id="API" name="filterOrigin" value="API" onClick={handleFilterByOrigin}/>
            <label htmlFor="API">API</label>

            <input type="radio" id="Creados" name="filterOrigin" value="Creados" onClick={handleFilterByOrigin}/>
            <label htmlFor="Creados">Creados</label>
          </fieldset>
        </form>
      </div>

      {/* ORDEN */}
      <div className={style.FilterOrder}>

        {/* ORDEN ALFABETICO */}
        <div className={style.FilterOrderAlphabetic} onClick={handleOrderAlphabetic}>
          <img src={ordericon}/><aside>{orderAlphabeticState ? "A-Z" : "Z-A"}</aside>
        </div>

        {/* ORDEN POR PESO */}
        <div className={style.FilterOrderWeight} onClick={handleOrderWeight}>
          <img src={ordericon}/><aside>{orderWeightState ? "Weight +" : "Weight -"}</aside>
        </div>

      </div>
    </div>
  );
}

export default Filters;
