import React from "react";

export const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="container">
      <p>
        <p>
          © {new Date().getFullYear()} LST — Установка и ремонт электропорогов
          ATS. Все права защищены.
        </p>
      </p>
      <div className="footer-links grid grid-4">
        <a href="tel:+7018273715" className="footer-link">
          +7(701)827-37-15
        </a>
        <a href="mailto:infotmm@mail.ru" className="footer-link">
          infotmm@mail.ru{" "}
        </a>
        <a href="https://www.instagram.com/lst.tuning/" className="footer-link">
          Instagram
        </a>
        <a
          href="https://www.youtube.com/channel/UC4SGiJhNPl4-2E7YTijujdg"
          className="footer-link"
        >
          YouTube
        </a>
      </div>
    </div>
  </footer>
);
