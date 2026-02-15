import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carousel.css';
import { slideData } from '../data/slideData';

const Carousel = () => {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1); // Start from the second item (index 1) to show "peek" effect properly if looping, or just 0. Let's stick to 0 but center it.
  // Actually simpler to just track index and translate
  const navigate = useNavigate();

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
            transform: `translateX(calc(-${currentIndex * 80}% + 10%))` // 80% width, centered (50% - 40% = 10% offset)
          }}
        >
          {slideData.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleLinkClick(item.link)}
            >
              <img src={item.image} alt={item.title} className="carousel-image" />
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