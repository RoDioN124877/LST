import React from "react";

export const Contacts: React.FC = () => (
  <section className="contacts container" id="contacts" data-aos="fade-up">
    <h2>Контакты</h2>
    <div className="contact-grid">
      <div>
        <p>
          <a href="tel:+77018148080" className="footer-link">
            +7(701)814-80-80
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
          <a href="#" className="footer-link">
            Instagram
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            VK
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            YouTube
          </a>
        </li>
      </ul>
    </div>
  </section>
);
