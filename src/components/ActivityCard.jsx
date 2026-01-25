import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ActivityCard = ({ activity, index }) => {
  const cardRef = useRef(null);
  // 偶数か奇数かでクラスとアニメーションの方向を決める
  const isReverse = index % 2 !== 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 左から(-100)か右から(100)か
      const xStart = isReverse ? 100 : -100;

      gsap.fromTo(cardRef.current,
        {
          opacity: 0,
          x: xStart
        },
        {
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out"
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [isReverse]); // 依存配列にisReverseを追加

  return (
    <div
      ref={cardRef}
      className={`activity-card ${isReverse ? 'reverse' : ''}`}
    >
      <div className="activity-image">
        <img src={activity.image} alt={activity.title} />
      </div>
      <div className="activity-content">
        <h3 className="activity-title">{activity.title}</h3>
        <p className="activity-desc">{activity.description}</p>
        <Link to={activity.path} className="neon-btn">View Details</Link>
      </div>
    </div>
  );
};

export default ActivityCard;