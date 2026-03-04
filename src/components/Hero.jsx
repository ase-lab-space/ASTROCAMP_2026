import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ASTROCAMP2026 from '../assets/ASTRO_CAMP_2026_fix.png'

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero" ref={containerRef}>
      <div className="hero-content">
        <div><img src={ASTROCAMP2026} alt="LOGO" /></div>
        <h1 className="hero-title">宇宙事業を本気で学ぶ <br />実践的プログラム</h1>
        {/* <p className="hero-subtitle">
          宇宙への憧れを、確かな技術へ。<br />
          学生・社会人を対象とした、本気の宇宙開発強化合宿。
        </p> */}
        <a href="#activities" className="neon-btn">APPLY</a>
      </div>
    </section>
  );
};

export default Hero;
