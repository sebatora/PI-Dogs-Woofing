const { Dog } = require("../db")
const { API_URL, API_KEY } = process.env;
const axios = require("axios");

// Trae los datos de la api y la DB de todos los perros

const getAllDogs = async () => {

  // Busqueda en la api
  const response = await axios.get(`${API_URL}?api_key=${API_KEY}`);
  if(!response.data) throw Error("Sorry! The dogs went to the park")

  const dogsApi = response.data.map(dog => {
    const temperamentArr = dog.temperament ? dog.temperament.split(/(?:,| )+/) : [];
    return {
      id: dog.id,
      name: dog.name,
      image: dog.image.url,
      height: dog.height.metric,
      weight: dog.weight.metric,
      life_span: dog.life_span,
      temperament: temperamentArr,
    }
  });

  // Busqueda en la DB
  const dogsDB = await Dog.findAll()

  const allDogs = []

  // Guardo ambas respuestas en un array
  dogsApi.forEach(dog => allDogs.push(dog));
  dogsDB.forEach(dog => allDogs.push(dog));

  return allDogs;
}

module.exports = getAllDogs;