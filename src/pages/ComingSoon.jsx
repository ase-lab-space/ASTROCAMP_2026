import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/Background';
import './SeminarPage.css';

const ComingSoon = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="seminar-page">
            <Background />
            <Header />
            <div className="seminar-container" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <h1 className="seminar-title">ASTROCAMP 2026</h1>
                <p style={{ fontSize: '1.4rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>
                    Coming Soon...
                </p>
                <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '2rem' }}>
                    現在準備中です。もうしばらくお待ちください。
                </p>
                <a
                    href="https://astro-camp.notion.site/2025-1c8f492792ce803da2c2d55f35cdf48e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-btn"
                >
                    Visit ASTROCAMP 2025 Page
                </a>
            </div>
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
};

export default ComingSoon;
