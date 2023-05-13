import React from 'react'

import { useSelector } from 'react-redux'
import Dog from '../Dog/Dog';

function Dogs() {

  const allDogs = useSelector((state) => state.allDogs)

  return (
    <div>
      {allDogs.map(
        ({ id, image, name, temperaments, weight }) => {
          return (
            <Dog 
              key={id}
              id={id}
              image={image}
              name={name}
              temperaments={temperaments}
              weight={weight}
            />
          );
        }
      )}
    </div>
  )
}

export default Dogs