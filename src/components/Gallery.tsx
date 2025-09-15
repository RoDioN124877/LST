import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Твои картинки
// export const galleryImages: string[] = [
//   "images/gallery1.jpg",
//   "images/gallery2.jpg",
//   "images/gallery3.jpg",
//   "images/gallery4.jpg",
//   "images/gallery5.jpg",
//   "images/gallery6.jpg",
// ];
import { galleryImages } from "../data/gallery";
export const Gallery: React.FC = () => {
  const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="gallery-title">Галерея</h2>

      {/* Основная галерея */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="gallery-swiper"
      >
        {galleryImages.map((img, idx) => (
          <SwiperSlide key={idx} className="gallery-slide">
            <img
              src={img}
              alt={`Слайд ${idx + 1}`}
              onClick={() => setFullscreenImg(img)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Фуллскрин */}
      {fullscreenImg && (
        <div
          className="fullscreen-overlay"
          onClick={() => setFullscreenImg(null)}
        >
          <img
            src={fullscreenImg}
            alt="fullscreen"
            className="fullscreen-img"
          />
        </div>
      )}
    </section>
  );
};
