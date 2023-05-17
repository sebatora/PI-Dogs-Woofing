import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Exiting () {

  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/')
    }, 10000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div>
      <h1>Exiting Page</h1>
      <p>GRACIAS POR VISITARNOS</p>
    </div>
  );
};

export default Exiting;