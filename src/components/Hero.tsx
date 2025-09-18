import React from "react";

export const Hero: React.FC = () => (
  <section className="hero" id="home">
    <div className="container hero-inner">
      <div className="hero-text">
        <h1>
          ВЫДВИЖНЫЕ ЭЛЕКТРИЧЕСКИЕ ПОРОГИ ATS
          <br />
          <span className="muted">от производителя ATS</span>
        </h1>
        <p className="lead">
          Новый уровень вашего комфорта — установка, продажа и обслуживание
          электрических порогов для автомобилей. Так же у нас имеются различные
          дополнительные оборудования и аксессуары для вашего автомобиля!
        </p>
        <div className="actions">
          <a className="btn btn-primary" href="">
            Заказать замер
          </a>
          <a className="btn btn-ghost" href="">
            Написать нам
          </a>
        </div>
      </div>
      <div className="hero-media">
        <img src="images/hero.jpg" alt="Электропороги ATS" />
      </div>
    </div>
  </section>
);
