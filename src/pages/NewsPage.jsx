import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { newsData } from '../data/news';
import './NewsPage.css';

const NewsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="news-page">
            <Background />
            <Header />
            <div className="news-page-container">
                <h1 className="news-page-title">News</h1>

                <div className="news-page-list">
                    {newsData.map((news) => (
                        <div key={news.id} className="news-page-item">
                            <span className="news-page-item-date">{news.date}</span>
                            <span className="news-page-item-category">{news.category}</span>
                            <Link to={`/news/${news.slug}`} className="news-page-item-link">
                                {news.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
};

export default NewsPage;
