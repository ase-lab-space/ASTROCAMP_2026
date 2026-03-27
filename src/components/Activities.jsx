import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ActivityCard from './ActivityCard';
import { activitiesData } from '../data/activities';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const Activities = () => {
  const sectionRef = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.activity-card');
    if (!cards?.length) return;

    if (prefersReduced) {
      cards.forEach((card) => {
        gsap.set(card, { opacity: 1, x: 0 });
      });
      return;
    }

    const isMobile = window.innerWidth <= 768;
    const xDistance = isMobile ? 50 : 100;
    const animDuration = isMobile ? 0.7 : 1;

    ScrollTrigger.batch(cards, {
      start: 'top 80%',
      onEnter: (batch) => {
        batch.forEach((card) => {
          const direction = card.classList.contains('reverse') ? xDistance : -xDistance;
          card.style.willChange = 'transform, opacity';
          gsap.fromTo(
            card,
            { opacity: 0, x: direction },
            {
              opacity: 1,
              x: 0,
              duration: animDuration,
              ease: 'power3.out',
              overwrite: true,
              onComplete: () => {
                card.style.willChange = 'auto';
              },
            }
          );
        });
      },
      onLeaveBack: (batch) => {
        batch.forEach((card) => {
          const direction = card.classList.contains('reverse') ? xDistance : -xDistance;
          gsap.to(card, {
            opacity: 0,
            x: direction,
            duration: 0.5,
            overwrite: true,
          });
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [prefersReduced]);

  return (
    <section id="activities" className="activities-container" ref={sectionRef}>
      <h2 className="section-title">INTRODUCE</h2>

      {activitiesData.map((activity, index) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          index={index}
        />
      ))}
    </section>
  );
};

export default Activities;