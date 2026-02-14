import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { newsData } from '../data/news';
import './NewsPage.css';

const NewsDetailPage = () => {
    const { slug } = useParams();
    const article = newsData.find((news) => news.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!article) {
        return (
            <div className="news-page">
                <Background />
                <Header />
                <div className="news-page-container">
                    <div className="news-not-found">
                        <h2>記事が見つかりません</h2>
                        <p>お探しの記事は存在しないか、削除された可能性があります。</p>
                        <Link to="/news" className="news-back-link">
                            ← ニュース一覧に戻る
                        </Link>
                    </div>
                </div>
                <footer id="footer">
                    <Footer />
                </footer>
            </div>
        );
    }

    return (
        <div className="news-page">
            <Background />
            <Header />
            <div className="news-page-container">
                <Link to="/news" className="news-back-link">
                    ← ニュース一覧に戻る
                </Link>

                <div className="news-detail-meta">
                    <span className="news-detail-date">{article.date}</span>
                    <span className="news-detail-category">{article.category}</span>
                </div>

                <h1 className="news-detail-title">{article.title}</h1>

                <div className="news-detail-body">
                    <Markdown remarkPlugins={[remarkGfm]}>{article.content}</Markdown>
                </div>
            </div>
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
};

export default NewsDetailPage;
