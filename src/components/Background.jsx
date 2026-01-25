import React from 'react';
// import cosmicBg from '../assets/cosmic_img01.jpg';
import cosmicImg01 from '../assets/spacex_img.jpg';

const Background = () => {
  return (
    <div 
      className="background-container"
      style={{ backgroundImage: `url(${cosmicImg01})` }}
    >
      <div className="background-overlay"></div>
    </div>
  );
};

export default Background;