import React from 'react';
import { Link } from 'react-router-dom';
import NewsItem from './NewsItem';
import { newsData } from '../data/news';
import './News.css';

const News = () => {
  return (
    <section id="news" className="news-container">
      <div className="news-content">
        <h2 className="news-heading">News</h2>

        <div className="news-list">
          {newsData.slice(0, 3).map((news) => (
            <NewsItem
              key={news.id}
              date={news.date}
              category={news.category}
              title={news.title}
              slug={news.slug}
            />
          ))}
        </div>

        <div className="news-footer">
          <Link to="/news" className="news-view-all">一覧を見る →</Link>
        </div>
      </div>
    </section>
  );
};

export default News;
