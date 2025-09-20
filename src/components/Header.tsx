import React from "react";

export const Header: React.FC = () => {
  const closeMenu = () => document.body.classList.remove("nav-open");

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          LST<span className="dot">.</span>
        </div>
        <nav className="nav">
          <button
            className="nav-close"
            onClick={closeMenu}
            aria-label="Закрыть меню"
          >
            &times;
          </button>
          <a href="#products" onClick={closeMenu}>
            Продукты
          </a>
          <a href="#cars" onClick={closeMenu}>
            По моделям
          </a>
          <a href="#services" onClick={closeMenu}>
            Услуги
          </a>
          <a href="#about" onClick={closeMenu}>
            О компании
          </a>
          <a
            href="https://wa.me/77018148080"
            className="btn btn-primary"
            onClick={closeMenu}
          >
            Связаться
          </a>
        </nav>
        <button
          className="burger"
          aria-label="menu"
          onClick={() => document.body.classList.toggle("nav-open")}
        >
          ☰
        </button>
      </div>
    </header>
  );
};
