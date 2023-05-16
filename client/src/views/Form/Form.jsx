import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, postDog } from '../../redux/actions'
import validation from './validation';
import style from "./Form.module.css"
import { useNavigate } from 'react-router-dom';

function Form () {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allTemperaments } = useSelector(state => state)


  // Lo cargo nuevamente por si no se pasa por el home
  useEffect(() => {
    dispatch(getTemperaments())
  }, [dispatch])

  // Estado para data del formulario
  const [formData, setFormData] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
    image: ""
  });

  // Estado para errores
  const [errors, setErrors] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
    image: ""
  });

  // control de cambios en los imput
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({...formData, [name]: value})
    setErrors(validation({...formData, [name]: value})); // si no lo paso asi, la validacion esta un paso atrasada
  }

  // Maneja los temperamentos
  const handleSelect = (event) => {
    const newTemp = event.target.value;
    if(formData.temperaments.includes(newTemp)) {
      alert(`${newTemp} ya se encuentra en la lista`)
      return;
    }

    setFormData({...formData, temperaments: [...formData.temperaments, newTemp]});
    event.target.value= "";
  }

  const handleSubmit = (event) =>{

    event.preventDefault();
    dispatch(postDog(formData))
    alert("Perro añadido exitosamente")

    setFormData({
      name: "",
      height: "",
      weight: "",
      life_span: "",
      temperaments: [],
      image: ""
    });

    navigate("/home")
  }

  const disableSubmit = () => {
    if(!formData.name || !formData.height || !formData.weight || !formData.life_span || formData.temperaments.length === 0 || !formData.image) return false;
    if(errors.name || errors.height || errors.weight || errors.life_span || errors.temperaments || errors.image) return false;
    return true
  }

  return (

      <div>
        <h2>Completa el formulario para añadir tu perro</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" placeholder="Ingrese el nombre" autoComplete="off" value={formData.name} onChange={handleInputChange}/>
            {errors.name && <p className={style.error}>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="height">Altura</label>
            <input type="text" name="height" id="height" autoComplete="off" value={formData.height} onChange={handleInputChange}/>
            {errors.height && <span className={style.error}>{errors.height}</span>}
          </div>

          <div>
            <label htmlFor="weight">Peso</label>
            <input type="text" name="weight" id="weight" autoComplete="off" value={formData.weight} onChange={handleInputChange}/>
            {errors.weight && <span className={style.error}>{errors.weight}</span>}
          </div>

          <div>
            <label htmlFor="life_span">Años de Vida</label>
            <input type="text" name="life_span" id="life_span" autoComplete="off" value={formData.life_span} onChange={handleInputChange}/>
            {errors.life_span && <span className={style.error}>{errors.life_span}</span>}
          </div>

          <div>
            <select onChange={handleSelect}>
              <option value="">Temperamentos</option>
              {allTemperaments?.map(temp => {
                return (
                  <option key={temp.id} name={temp.id} value={temp.name}>{temp.name}</option>
                );
              })}
            </select>
            <ul>
              <li>
                {formData.temperaments.map(temp => temp + " ")}
              </li>
            </ul>
          </div>

          <div>
            <label htmlFor="image">Imagen</label>
            <input type="text" name="image" id="image" value={formData.image} onChange={handleInputChange}/>
            {/* <input type="file" accept='image/jpeg' name="image" id="image" value={formData.image} onChange={handleInputChange}/> */}
            {errors.image && <span className={style.error}>{errors.image}</span>}
          </div>

          <div>
            <button className='btn' type="submit" disabled={!disableSubmit()}>¡WOOF!</button>
          </div>
        </form>

      </div>
  )
}

export default Form