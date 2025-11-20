import React from "react";

export const Hero: React.FC = () => (
  <section className="hero" id="home" data-aos="fade-up">
    <div className="container hero-inner">
      <div className="hero-text">
        <h1>
          ВЫДВИЖНЫЕ ЭЛЕКТРИЧЕСКИЕ ПОРОГИ 
          <br />
          <span className="muted">от производителя ATS</span>
        </h1>
        <p className="lead">
          Новый уровень вашего комфорта — установка, продажа и обслуживание
          электрических порогов для автомобилей. Так же у нас имеются различные
          дополнительные оборудования и аксессуары для вашего автомобиля! ❤
        </p>
        <div className="actions ">
          <a
            className="btn btn-primary"
            href="https://wa.me/77018148080"
            target="_blank"
            rel="noreferrer"
          >
            Написать нам
          </a>
        </div>
      </div>
      <div className="hero-media">
        {/* <img src="images/hero.jpg" alt="Электропороги ATS" /> */}
        <video
          id="video-6"
          width="100%"
          height="auto"
          loop={true}
          autoPlay={true}
          preload="auto"
          muted={true}
          playsInline={true}
        >
          <source
            src="video/hero.mp4"
            type="video/mp4"
          />

          <source
            src="video/hero.webm"
            type="video/webm"
          />
        </video>
      </div>
    </div>
  </section>
);
