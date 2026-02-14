import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({ date, category, title, slug }) => {
  return (
    <div className="news-item">
      <span className="news-date">{date}</span>
      <span className="news-category">{category}</span>
      <Link to={`/news/${slug}`} className="news-title">{title}</Link>
    </div>
  );
};

export default NewsItem;
