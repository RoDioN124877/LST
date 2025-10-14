import React from "react";

export const Header: React.FC = () => {
  const closeMenu = () => document.body.classList.remove("nav-open");

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#home" onClick={closeMenu}>
          LST<span className="dot">.</span>
        </a>
        <nav className="nav">
          <button
            className="nav-close"
            onClick={closeMenu}
            aria-label="Закрыть меню"
          >
            &times;
          </button>
          <a href="#products" onClick={closeMenu}>
            Подробнее
          </a>
          <a href="#cars" onClick={closeMenu}>
            Марки авто
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
            target="_blank"
            rel="noreferrer"
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
