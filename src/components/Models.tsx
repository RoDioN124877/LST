import React, { useState } from "react";
import { models, Model } from "../data/models";
import { ModelModal } from "./ModelModal"; // добавили импорт

const brands = [
  "all",
  "BMW",
  "Mercedes",
  "Range Rover / Land Rover",
  "Toyota",
  "Kia",
  "Hyundai",
  "Lexus",
  "Rox",
  "Genesis",
  "Lixiang",
];

export const Models: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Model | null>(null);

  const filteredModels =
    filter === "all" ? models : models.filter((m) => m.brand === filter);

  return (
    <section className="models container" id="cars" data-aos="fade-up">
      <h2>Установки по моделям</h2>
      <p className="muted">
        Реальные проекты и адаптированные решения под конкретные автомобили.
      </p>
      <div className="filters">
        {brands.map((brand) => (
          <button
            key={brand}
            className={`filter-btn${filter === brand ? " active" : ""}`}
            onClick={() => setFilter(brand)}
          >
            {brand === "all" ? "Все" : brand}
          </button>
        ))}
      </div>
      <div
        className={`grid grid-2 models-list${
          filteredModels.length < 3 ? " few" : ""
        }`}
      >
        {filteredModels.map((model) => (
          <article
            className="model"
            data-brand={model.brand}
            key={model.id}
            onClick={() => setSelected(model)}
            style={{ cursor: "pointer" }}
          >
            <span className="brand">{model.brand}</span>
            <img src={model.img} alt={model.title} />
            <h3>{model.title}</h3>
            <p>{model.desc}</p>
            <div className="actions_card">
              <button
                className="btn secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(model);
                }}
              >
                Подробнее
              </button>
            </div>
          </article>
        ))}
      </div>
      <NotFoundModel />
      {selected && (
        <ModelModal model={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

const NotFoundModel: React.FC = () => (
  <div className="not-found-model grid grid-2">
    <div>
      <h3>НЕ НАШЛИ СВОЮ МОДЕЛЬ?</h3>
      <a href="#contacts" className="btn btn-ghost">
        Помощь специалиста
      </a>
    </div>
    <div className="not-found-desc">
      Свяжитесь с нами любым удобным способом для уточнения информации по вашей
      модели, возможно, мы не успели актуализировать информацию на сайте.
    </div>
  </div>
);


