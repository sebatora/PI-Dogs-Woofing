const { Dog } = require("../db")

// Crea un nuevo perro y lo guarda en la DB

const postNewDog = async (name, image, height, weight, life_span, temperaments) => {

  if(!name || !image || !height || !weight || !life_span || !temperaments) throw Error ("Woof! Missing Dog Information!")

  const newDog = await Dog.create({
    name,
    image,
    height,
    weight,
    life_span,
  })
  await newDog.addTemperaments(temperaments)

  return newDog;
}

module.exports = postNewDog;