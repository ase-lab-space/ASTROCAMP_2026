import React from 'react';
// import cosmicBg from '../assets/cosmic_img01.jpg';
import cosmicImg01 from '../assets/spacex_img.jpg';
import { useBackgroundImageLoad } from '../hooks/useBackgroundImageLoad';

const Background = () => {
  const { loaded } = useBackgroundImageLoad(cosmicImg01);

  return (
    <div
      className="background-container"
      style={{
        backgroundImage: loaded ? `url(${cosmicImg01})` : 'none',
        backgroundColor: 'var(--color-primary)',
        transition: 'opacity 1s ease-in-out',
        opacity: loaded ? 1 : 0.3,
      }}
    >
      <div className="background-overlay"></div>
    </div>
  );
};

export default Background;