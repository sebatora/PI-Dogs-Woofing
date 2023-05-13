import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDogs } from '../../redux/actions'
import { Dogs } from '../../components'

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, [])

  return (
    <div>
      <Dogs />
    </div>
  )
}

export default Home