import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ASTROCAMP2026 from '../assets/ASTRO_CAMP_2026_fix.png'
import { useReducedMotion } from '../hooks/useReducedMotion';

const Hero = () => {
  const containerRef = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

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
  }, [prefersReduced]);

  return (
    <section id="home" className="hero" ref={containerRef}>
      <div className="hero-content">
        <div><img src={ASTROCAMP2026} alt="LOGO" /></div>
        <h1 className="hero-title">宇宙事業を本気で学ぶ <br />実践的プログラム</h1>
        <p className="hero-subtitle" style={{ fontSize: '1.4rem', color: 'var(--color-accent)', letterSpacing: '2px' }}>
          Coming Soon...
        </p>
        <a href="https://astro-camp.notion.site/2025-1c8f492792ce803da2c2d55f35cdf48e" className="neon-btn neon-btn--filled" target="_blank" rel="noopener noreferrer">2025年のページはこちら</a>
      </div>
    </section>
  );
};

export default Hero;
