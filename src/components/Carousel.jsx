import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carousel.css';
import { slideData } from '../data/slideData';
import ImageWithLoader from './ImageWithLoader';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

const Carousel = () => {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleLinkClick = (url) => {
    if (url) {
      navigate(url);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-container">
      <button className="nav-button nav-prev" onClick={prevSlide}>&#10094;</button>

      <div className="carousel-track-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: isMobile
              ? `translateX(calc(-${currentIndex * 85}% + 7.5%))`
              : `translateX(calc(-${currentIndex * 60}% + 20%))`
          }}
        >
          {slideData.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleLinkClick(item.link)}
            >
              <ImageWithLoader src={item.image} alt={item.title} className="carousel-image" fadeInDuration={0.4} />
              <div className="slide-content">
                <h3 className="slide-title">{item.title}</h3>
                <p className="slide-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="nav-button nav-next" onClick={nextSlide}>&#10095;</button>

      <div className="indicators">
        {slideData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;