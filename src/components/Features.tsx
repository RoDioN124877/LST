import React from "react";
import "aos/dist/aos.css";
export const Features: React.FC = () => (
  <section
    className="features container scroll-animate"
    id="products"
    data-aos="fade-up"
  >
    <h2>Преимущества электропорогов ATS</h2>
    <div className="grid grid-3">
      <div className="card">
        <img src="/images/feature1.jpg" alt="Надежность" />
        <h3>Надежность</h3>
        <p>Высокое качество комплектующих и сборки.</p>
      </div>
      <div className="card">
        <img src="/images/feature2.jpg" alt="Совместимость" />
        <h3>Совместимость</h3>
        <p>Интеграция с электроникой автомобиля.</p>
      </div>
      <div className="card">
        <img src="/images/feature3.jpg" alt="Гарантия" />
        <h3>Гарантия</h3>
        <p>Официальная гарантия и сервисное обслуживание.</p>
      </div>
    </div>
  </section>
);
