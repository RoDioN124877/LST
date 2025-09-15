import React from "react";

const ToolIcon = () => (
  <svg
    className="service-icon"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M2 17l4 4 7-7-4-4-7 7zm19.7-13.3a3.003 3.003 0 0 0-4.24 0c-.78.78-1.02 1.92-.7 2.93l-7.07 7.07 4 4 7.07-7.07c1.01.32 2.15.08 2.93-.7a3.003 3.003 0 0 0 0-4.24z"
      fill="#007bff"
    />
  </svg>
);

const WrenchIcon = () => (
  <svg
    className="service-icon"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M22.7 19.3l-6.6-6.6c.6-1.1.9-2.3.9-3.7 0-4.4-3.6-8-8-8-1.4 0-2.6.3-3.7.9l6.6 6.6c1.1-.6 2.3-.9 3.7-.9 4.4 0 8 3.6 8 8 0 1.4-.3 2.6-.9 3.7z"
      fill="#007bff"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    className="service-icon"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" fill="#007bff" />
    <rect x="7" y="10" width="2" height="2" fill="#fff" />
    <rect x="11" y="10" width="2" height="2" fill="#fff" />
    <rect x="15" y="10" width="2" height="2" fill="#fff" />
  </svg>
);

export const Services: React.FC = () => (
  <section className="services container" id="services" data-aos="fade-up">
    <h2 className="services-title">Наши услуги</h2>
    <div className="services-grid">
      <div className="service-card">
        <h3>Установка</h3>
        <p>Профессиональный монтаж электропорогов с гарантией качества.</p>
      </div>
      <div className="service-card">
        <h3>Ремонт</h3>
        <p>Диагностика и восстановление работоспособности любых систем.</p>
      </div>
      <div className="service-card">
        <h3>Обслуживание</h3>
        <p>
          Плановое и внеплановое сервисное обслуживание для вашего комфорта.
        </p>
      </div>
    </div>
  </section>
);

export default Services;
