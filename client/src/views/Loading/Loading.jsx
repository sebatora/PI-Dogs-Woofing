import React from 'react';
import loadingImage from '../../assets/loading.gif';

function Loading () {

  return (
    <div>
      <img src={loadingImage} alt="Loading..." />
    </div>
  );
};

export default Loading;