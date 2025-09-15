import React from 'react';

export const Contacts: React.FC = () => (
  <section className="contacts container" id="contacts" data-aos="fade-up">
    <h2>Контакты</h2>
    <div className="contact-grid">
      <div>
        <p>
          <a href="tel:+7XXXXXXXXXX" className="footer-link">+7 (XXX) XXX-XX-XX</a>
        </p>
        <p>
          <a href="mailto:info@lst.example" className="footer-link">info@lst.example</a>
        </p>
      </div>
      <ul className="socials">
        <li><a href="#" className="footer-link">Instagram</a></li>
        <li><a href="#" className="footer-link">VK</a></li>
        <li><a href="#" className="footer-link">YouTube</a></li>
      </ul>
    </div>
  </section>
);