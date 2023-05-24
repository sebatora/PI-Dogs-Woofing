import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDogs, getTemperaments } from '../../redux/actions'
import { Dogs } from '../../components'
import { Loading } from '../index'


function Home() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([dispatch(getDogs()), dispatch(getTemperaments())]);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return <Dogs />;
}

export default Home;

// const [isLoading, setIsLoading] = useState(true);
//   const [showError, setShowError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       const loadingTimeout = setTimeout(() => {
//         setShowError(true);
//       }, 5000);

//       await Promise.all([dispatch(getDogs()), dispatch(getTemperaments())]);

//       clearTimeout(loadingTimeout);
//       setIsLoading(false);
//     };
    
//     fetchData();
//   }, [dispatch]);

//   const { allDogs } = useSelector((state) => state);

//   if (isLoading) {
//     return <Loading />;
//   }

//   if (showError) {
//     return <Error />;
//   }

//   return (
//     <div>
//       {
//       allDogs.length !== 0
//         ? ( <Dogs /> )
//         : ( <Error /> )
//       }
//     </div>
//   )
// }