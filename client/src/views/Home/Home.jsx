import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDogs, getTemperaments } from '../../redux/actions'
import { Dogs, Searchbar } from '../../components'
import Loading from '../Loading/Loading'


function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments())
  }, [dispatch])

  const {allDogs} = useSelector((state) => state);

  return (
    <div>
      <Searchbar />

      {allDogs.length !== 0 ? (
        <Dogs /> )
        : ( <Loading /> )}

    </div>
  )
}

export default Home