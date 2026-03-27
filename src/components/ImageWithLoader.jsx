import React from 'react';
import { useImageLoad } from '../hooks/useImageLoad';
import './ImageWithLoader.css';

const ImageWithLoader = ({
  src,
  alt,
  className = '',
  style = {},
  ...rest
}) => {
  const { loaded, error, onLoad, onError, imgRef } = useImageLoad();

  return (
    <div className="image-loader-container" style={style}>
      {!loaded && <div className="cosmic-shimmer" aria-hidden="true" />}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`image-loader-img ${loaded && !error ? 'image-loader-img--loaded' : ''} ${className}`}
        onLoad={onLoad}
        onError={onError}
        {...rest}
      />
    </div>
  );
};

export default ImageWithLoader;
