import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Model } from "../data/models";

interface ModelModalProps {
  model: Model;
  onClose: () => void;
}

export const ModelModal: React.FC<ModelModalProps> = ({ model, onClose }) => {
  // если есть видео — добавляем его в начало галереи
  const gallery = [
    ...(model.video ? [model.video] : []),
    ...(model.gallery && model.gallery.length > 0 ? model.gallery : [model.img]),
  ];

  const [galleryIdx, setGalleryIdx] = useState(0);

  const isVideo = (item: string) => item.includes("youtube.com") || item.includes("youtu.be");

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">
          ×
        </button>

        <div className="modal-gallery">
          {/* Показываем видео или картинку в зависимости от текущего элемента */}
          {isVideo(gallery[galleryIdx]) ? (
            <div className="video-wrapper">
              <iframe
                src={gallery[galleryIdx]}
                title={model.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <img
              src={gallery[galleryIdx]}
              alt={model.title}
              className="modal-main-img"
            />
          )}

          {/* Превьюшки под галереей */}
          {gallery.length > 1 && (
            <div className="modal-thumbnails">
              {gallery.map((item, idx) => (
                <div
                  key={idx}
                  className={`thumb-wrapper ${galleryIdx === idx ? "active" : ""}`}
                  onClick={() => setGalleryIdx(idx)}
                >
                  {isVideo(item) ? (
                    <div className="video-thumb">
                      <span className="play-icon">▶</span>
                      <img
                        src={`https://img.youtube.com/vi/${extractYouTubeID(
                          item
                        )}/hqdefault.jpg`}
                        alt="Видео"
                      />
                    </div>
                  ) : (
                    <img src={item} alt={`gallery-${idx}`} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <h2 className="modal-title">{model.title}</h2>
        <span className="brand">{model.brand}</span>
        <p className="modal-desc">{model.desc}</p>

        {model.year && (
          <div className="modal-info">
            <b>Год выпуска:</b> {model.year}
          </div>
        )}
        {model.price && (
          <div className="modal-info">
            <b>Цена установки:</b> {model.price}
          </div>
        )}
        {model.features && (
          <ul className="modal-features">
            {model.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        )}

        <a
          href="https://wa.me/77018148080"
          className="btn btn-primary modal-btn"
          target="_blank"
          rel="noreferrer"
        >
          Оставить заявку
        </a>
      </div>
    </div>,
    document.body
  );
};

// вспомогательная функция для получения ID видео
const extractYouTubeID = (url: string) => {
  const regExp =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : "";
};
