import React, { useState, useEffect, useCallback } from 'react';
import { timedBackgroundData, backgroundConfig } from '../data/scrollBackgrounds';
import './ScrollBackground.css';

/**
 * 時間経過で背景が自動的に切り替わるコンポーネント
 * 一定間隔でフェードイン/アウトしながら背景画像が切り替わる
 */
const ScrollBackground = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 次の背景に切り替える
  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % timedBackgroundData.length);
  }, []);

  // 前の背景に切り替える
  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => 
      prev === 0 ? timedBackgroundData.length - 1 : prev - 1
    );
  }, []);

  // 特定のインデックスに切り替える
  const goToIndex = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  // 自動切り替えタイマー
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      goToNext();
    }, backgroundConfig.interval);

    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  return (
    <div 
      className="timed-background-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 背景レイヤー */}
      {timedBackgroundData.map((bg, index) => (
        <div
          key={bg.id}
          className={`timed-background-layer ${index === activeIndex ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${bg.image})`,
          }}
        >
          <div
            className="timed-background-overlay"
            style={{
              backgroundColor: bg.overlayColor,
            }}
          />
        </div>
      ))}

      {/* インジケーター（オプション：表示/非表示を切り替え可能） */}
      <div className="background-indicators">
        {timedBackgroundData.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToIndex(index)}
            aria-label={`背景 ${index + 1} に切り替え`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollBackground;
