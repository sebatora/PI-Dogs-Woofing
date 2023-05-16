import React from "react";
import style from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterByOrigin, filterByTemp, getDogs } from "../../redux/actions";


function Filters() {

  const dispatch = useDispatch();
  const { allTemperaments } = useSelector(state => state)

  const handleSelect = (event) => {
    const temp = event.target.value;
    dispatch(filterByTemp(temp));
  };

  const handleFilterByOrigin = (event) => {
    const origin = event.target.value;
    dispatch(filterByOrigin(origin));
  };

  return (
    <div className={style.FilterContainer}>

      <div className={style.FilterTemperaments}>
        <select onChange={handleSelect}>
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

      <div className={style.FilterCreated}>
        <form>
          <fieldset>
            <legend>Filtrar por origen</legend>
            <input type="radio" id="All" name="filterOrigin" value="All" onClick={handleFilterByOrigin}/>
            <label htmlFor="All">All</label>

            <input type="radio" id="API" name="filterOrigin" value="API" onClick={handleFilterByOrigin}/>
            <label htmlFor="API">API</label>

            <input type="radio" id="Creados" name="filterOrigin" value="Creados" onClick={handleFilterByOrigin}/>
            <label htmlFor="Creados">Creados</label>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Filters;
