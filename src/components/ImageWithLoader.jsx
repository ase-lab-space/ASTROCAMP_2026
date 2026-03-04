import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useImageLoad } from '../hooks/useImageLoad';
import './ImageWithLoader.css';

const ImageWithLoader = ({
  src,
  alt,
  className = '',
  style = {},
  fadeInDuration = 0.6,
  ...rest
}) => {
  const { loaded, error, onLoad, onError, imgRef } = useImageLoad();

  useEffect(() => {
    if (loaded && !error && imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: fadeInDuration, ease: 'power2.out' }
      );
    }
  }, [loaded, error, fadeInDuration]);

  return (
    <div className="image-loader-container" style={style}>
      {!loaded && <div className="cosmic-shimmer" aria-hidden="true" />}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={className}
        onLoad={onLoad}
        onError={onError}
        style={{ opacity: 0 }}
        {...rest}
      />
    </div>
  );
};

export default ImageWithLoader;
