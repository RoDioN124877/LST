import React from "react";
import "aos/dist/aos.css";
export const Features: React.FC = () => (
  <section
    className="features container scroll-animate"
    id="products"
    data-aos="fade-up"
  >
    <h2>Преимущества электропорогов ATS</h2>
    <div className="grid grid-4">
      <div className="card">
        <img src="images/f5.jfif" alt="Надежность" />
        <h3>Надежность</h3>
        <p>Пороги от компании ATS созданы специально для жестких условий климата в эксплуатации.  Безотказные электромоторы способны работать в арктических условиях</p>
      </div>
      <div className="card">
        <img src="images/feature2.jpg" alt="Совместимость" />
        <h3>Совместимость</h3>
        <p>Электропороги ATS от корейского производителя устанавливаются в штатные места креплений.</p>
      </div>
      <div className="card">
        <img src="images/feature3.jpg" alt="Гарантия" />
        <h3>Гарантия</h3>
        <p>Ваш автомобиль полностью сохраняет гарантию производителя.
 На Электропороги ATS предоставляется гарантия 2 года.</p>
      </div>
      <div className="card">
        <img src="images/cards/Смазочные.jfif" alt="Гарантия" />
        <h3>Смазочные капсулы</h3>
        <p>Смазка не вымывается на мойке, долговечность механизмов.</p>
      </div>
    </div>
  </section>
);
