import React, { useState, useEffect } from 'react';
import Background from '../components/Background';
// import ScrollBackground from '../components/ScrollBackground';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Activities from '../components/Activities';
import News from '../components/News';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import FloatingButton from '../components/FloatingButton';
import spacexImg from '../assets/spacex_img.jpg';
import astrocampLogo from '../assets/ASTRO_CAMP_2026_fix.png';
import './Top.css';

const CRITICAL_IMAGES = [spacexImg, astrocampLogo];

const Top = () => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let cancelled = false;

        const promises = CRITICAL_IMAGES.map(
            (src) =>
                new Promise((resolve) => {
                    const img = new Image();
                    img.onload = resolve;
                    img.onerror = resolve;
                    img.src = src;
                    if (img.complete) resolve();
                })
        );

        Promise.all(promises).then(() => {
            if (!cancelled) setReady(true);
        });

        // 3秒でタイムアウト（読み込みが遅くても表示する）
        const timer = setTimeout(() => {
            if (!cancelled) setReady(true);
        }, 3000);

        return () => {
            cancelled = true;
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {!ready && (
                <div className="top-loading-screen">
                    <div className="top-loading-spinner" />
                </div>
            )}
            <div className={`top-page ${ready ? 'top-page--ready' : 'top-page--loading'}`}>
                {/* 固定背景（従来）またはスクロール背景のどちらかを選択 */}
                <Background />
                {/* <ScrollBackground /> */}
                <Header />
                <Hero />
                <Activities />
                <section id="contents">
                    <h2 className='section-title'>CONTENTS</h2>
                    <Carousel />
                </section>
                <News />
                <footer id="footer">
                    <Footer />
                </footer>
                <FloatingButton />
            </div>
        </>
    );
};

export default Top;
