import React from 'react';

export const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="container">
      <p>
        © LST — Установка и ремонт электропорогов ATS. Все права защищены.
      </p>
      <div className="footer-links">
        <a href="tel:+7XXXXXXXXXX" className="footer-link">+7 (XXX) XXX-XX-XX</a>
        <a href="mailto:info@lst.example" className="footer-link">info@lst.example</a>
        <a href="#" className="footer-link">Instagram</a>
        <a href="#" className="footer-link">VK</a>
        <a href="#" className="footer-link">YouTube</a>
      </div>
    </div>
  </footer>
);