import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDogs, getTemperaments } from '../../redux/actions'
import { Dogs, Filters, Searchbar } from '../../components'

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments())
  }, [dispatch])

  return (
    <div>
      <Searchbar />
      <Filters />
      <Dogs />
    </div>
  )
}

export default Home