import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithLoader from './ImageWithLoader';

const ActivityCard = ({ activity, index }) => {
  const isReverse = index % 2 !== 0;

  return (
    <div
      className={`activity-card ${isReverse ? 'reverse' : ''}`}
    >
      <div className="activity-image">
        <ImageWithLoader src={activity.image} alt={activity.title} />
      </div>
      <div className="activity-content">
        <h3 className="activity-title">{activity.title}</h3>
        <p className="activity-desc">{activity.description}</p>
        <Link to="/coming-soon" className="neon-btn">APPLY</Link>
      </div>
    </div>
  );
};

export default ActivityCard;