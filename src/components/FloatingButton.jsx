// FloatingButton.jsx
import { useNavigate } from 'react-router-dom';
import '../css/FloatingButton.css';

const FloatingButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="floating-button"
      onClick={() => navigate('/coming-soon')}
      aria-label="申込はコチラ"
    >
      {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"/>
      </svg> */}
      <h1>募集締切</h1>
      <p>5/31</p>
      <h2>申込はコチラ</h2>
    </button>
  );
};

export default FloatingButton;