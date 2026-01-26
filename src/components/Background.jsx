import React from 'react';
// import cosmicBg from '../assets/cosmic_img01.jpg';
import cosmicImg01 from '../assets/spacex_img.jpg';

const Background = () => {
  return (
    <div className="background-wrapper">
      {/* Blurred background filling the screen */}
      <div
        className="background-blur-layer"
        style={{ backgroundImage: `url(${cosmicImg01})` }}
      />
      {/* Main image centered */}
      <div
        className="background-main-layer"
        style={{ backgroundImage: `url(${cosmicImg01})` }}
      />
    </div>
  );
};

export default Background;