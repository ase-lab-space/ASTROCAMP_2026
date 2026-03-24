import React, { useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/Background';
import ImageWithLoader from '../components/ImageWithLoader';
import './SeminarPage.css'; // We'll need to create this or reuse styles

const SeminarPage = ({ data }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="seminar-page">
            <Background />
            <Header />
            <div className="seminar-container">
                <h1 className="seminar-title">{data.title}</h1>
                {data.image && (
                    <div className="seminar-hero-image">
                        <ImageWithLoader src={data.image} alt={data.title} fadeInDuration={0.8} />
                    </div>
                )}

                <div className="seminar-content">
                    {data.sections.map((section, index) => (
                        <section key={index} className={`seminar-section${section.heading === "主催者メッセージ" ? " seminar-section--highlight" : ""}`}>
                            {section.image && (
                                <div className="seminar-section-image">
                                    <ImageWithLoader src={section.image} alt={section.heading} fadeInDuration={0.8} />
                                </div>
                            )}
                            <h2 className="seminar-heading">{section.heading}</h2>
                            <div className="seminar-body">
                                <Markdown remarkPlugins={[remarkGfm]}>{section.body}</Markdown>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
};

export default SeminarPage;
