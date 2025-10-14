import React, { useState } from "react";
import { models } from "../data/models";

const VIDEOS_PER_PAGE = 2;

export const VideoGallery: React.FC = () => {
  // Собираем все видео из моделей
  const allVideos = models
    .filter((m) => m.video)
    .map((m) => ({
      url: m.video!,
      title: m.title,
      brand: m.brand,
      img: m.img,
    }));

  const [visibleCount, setVisibleCount] = useState(VIDEOS_PER_PAGE);

  if (allVideos.length === 0) return null;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + VIDEOS_PER_PAGE);
  };

  const handleHide = () => {
    setVisibleCount(VIDEOS_PER_PAGE);
  };

  return (
    <section className="video-gallery container" id="video-gallery" data-aos="fade-up">
      <div className="video-gallery-header">
        <h2 className="services-title">Посмотрите наши работы</h2>
      </div>
      <div className="video-grid">
        {allVideos.slice(0, visibleCount).map((video, idx) => (
          <div className="video-card" key={idx}>
            <div className="video-thumb fixed-ratio">
              <iframe
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <div className="video-brand">{video.brand}</div>
              <div className="video-title">{video.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="video-gallery-footer">
        {visibleCount < allVideos.length && (
          <button className="video-more-btn" onClick={handleShowMore}>
            Загрузить ещё
          </button>
        )}
        {visibleCount > VIDEOS_PER_PAGE && (
          <button className="video-more-btn" style={{ marginLeft: 16 }} onClick={handleHide}>
            Скрыть
          </button>
        )}
      </div>
    </section>
  );
};

export default VideoGallery;