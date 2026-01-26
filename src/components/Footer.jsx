import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="logo" style={{ marginBottom: '2rem' }}>ASTRO CAMP</div>

        <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <h3 style={{ fontFamily: 'sans-serif', fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>Home - ASE-Lab.</h3>
          <p style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', lineHeight: '1.6' }}>
            ASE-Lab.は、宇宙分野に興味を持つ学生どうしで、勉強会を開催するコミュニティです。様々な大学からの参加者が集い、何事にも必要な基礎的事項をはじめ、宇宙に関連したことを「工学」「理学」という二つの点から学んでいきます。
          </p>
          <a href="https://www.ase-lab.space/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontSize: '0.9rem' }}>https://www.ase-lab.space/</a>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontFamily: 'sans-serif', fontSize: '1rem', marginBottom: '1rem', color: '#ccc' }}>Policy</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <li><Link to="/terms" style={{ fontSize: '0.9rem', color: '#888' }}>利用規約</Link></li>
            <li><Link to="/privacy" style={{ fontSize: '0.9rem', color: '#888' }}>プライバシーポリシー</Link></li>
            <li><Link to="/cancellation" style={{ fontSize: '0.9rem', color: '#888' }}>キャンセルポリシー</Link></li>
          </ul>
        </div>

        <p>Contact: info@astro-camp-dummy.jp</p>
        <p>&copy; 2025 Astro Camp Committee. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;