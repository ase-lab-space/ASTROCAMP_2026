import React from 'react';

const NewsItem = ({ date, category, title, link }) => {
  return (
    <div className="news-item">
      <span className="news-date">{date}</span>
      <span className="news-category">{category}</span>
      <a href={link} className="news-title">{title}</a>
    </div>
  );
};

export default NewsItem;
