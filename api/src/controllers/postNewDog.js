const { Dog, Temperament } = require("../db")

// Crea un nuevo perro y lo guarda en la DB

const postNewDog = async (name, image, height, weight, life_span, temperament) => {

  if(!name || !image || !height || !weight || !life_span || !temperament) throw Error ("Woof! Missing Dog Information!")

  const newDog = await Dog.create({
    name,
    image,
    height,
    weight,
    life_span,
    temperament
  })

  return newDog;
}

module.exports = postNewDog;