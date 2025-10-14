import React from "react";

export const Contacts: React.FC = () => (
  <section className="contacts container" id="contacts" data-aos="fade-up">
    <h2>Контакты</h2>
    <div className="contact-grid">
      <div>
        <p>
          <a href="tel:+7018273715" className="footer-link">
            +7(701)827-37-15  
          </a>
        </p>
        <p>
          <a href="mailto:infotmm@mail.ru" className="footer-link">
            infotmm@mail.ru{" "}
          </a>
        </p>
      </div>
      <ul className="socials">
        <li>
          <a href="https://www.instagram.com/lst.tuning/" className="footer-link">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC4SGiJhNPl4-2E7YTijujdg" className="footer-link">
            YouTube
          </a>
        </li>
      </ul>
    </div>
  </section>
);
