import React from 'react';
import NewsItem from './NewsItem';
import { newsData } from '../data/news';
import './News.css';

const News = () => {
  return (
    <section id="news" className="news-container">
      <div className="news-content">
        <h2 className="news-heading">News</h2>
        
        <div className="news-list">
          {newsData.map((news) => (
            <NewsItem
              key={news.id}
              date={news.date}
              category={news.category}
              title={news.title}
              link={news.link}
            />
          ))}
        </div>

        <div className="news-footer">
          <a href="#" className="news-view-all">一覧を見る →</a>
        </div>
      </div>
    </section>
  );
};

export default News;
