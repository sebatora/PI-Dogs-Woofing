const { Temperament } = require("../db")
const getAllDogs = require("./getAllDogs")

// Trae los temperamentos de la api y los guarda en la DB

const getAllTemperaments = async () => {
  const allDogs = await getAllDogs();
  if(!allDogs) throw Error("Sorry! The dogs went to the park")

  // Guardo todos los temperamentos separados por coma en un solo array
  const temperamentString = (allDogs.map(dog => dog.temperament).toString()).split(",");
  
  // En caso de tenerlos, elimino espacios innecesarios adelante y atras
  const temperamentList = temperamentString.map(temp => {
    if(temp[0] === " ") temp.trim()
    return temp;
  })

  // Elimina los elementos vacios
  const allTemperaments = temperamentList.filter((el) => el !== "");

  // Guardo los temperamentos en la DB ya filtrados para que no se repitan
  allTemperaments.forEach(temp =>{
    Temperament.findOrCreate({
      where: { name: temp },
    });
  });

return "Temperaments created";

};

module.exports = getAllTemperaments;