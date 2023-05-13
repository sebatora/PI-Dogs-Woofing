import React from 'react'
import { getDogs } from '../../redux/actions'
import { useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import Dog from '../Dog/Dog';

function Dogs() {

  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs)

  useEffect(() => {
    dispatch(getDogs());
  }, [])


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