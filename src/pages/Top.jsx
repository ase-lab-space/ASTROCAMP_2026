import React from 'react';
import Background from '../components/Background';
// import ScrollBackground from '../components/ScrollBackground';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Activities from '../components/Activities';
import News from '../components/News';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import FloatingButton from '../components/FloatingButton';

const Top = () => {
    return (
        <>
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
        </>
    );
};

export default Top;
