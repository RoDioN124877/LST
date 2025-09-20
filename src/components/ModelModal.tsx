import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Model } from "../data/models";

interface ModelModalProps {
  model: Model;
  onClose: () => void;
}

export const ModelModal: React.FC<ModelModalProps> = ({ model, onClose }) => {
  const [galleryIdx, setGalleryIdx] = useState(0);
  const gallery =
    model.gallery && model.gallery.length > 0 ? model.gallery : [model.img];

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">
          ×
        </button>

        <div className="modal-gallery">
          <img
            src={gallery[galleryIdx]}
            alt={model.title}
            className="modal-main-img"
          />
          {gallery.length > 1 && (
            <div className="modal-thumbnails">
              {gallery.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={`gallery-${idx}`}
                  className={galleryIdx === idx ? "active" : ""}
                  onClick={() => setGalleryIdx(idx)}
                />
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
