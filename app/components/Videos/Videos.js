"use client";
import { useState } from "react";
import Image from "next/image";
import { translations } from "../../translations";
import "./Videos.css";

const Videos = ({ language = "en" }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const t = translations[language];

  const videoData = [
    {
      id: 1,
      title: t.productManufacturing,
      thumbnail: "/video-thumb-1.jpg",
      description: t.watchManufacturing,
      duration: "3:45",
      videoUrl: "https://example.com/video1",
    },
    {
      id: 2,
      title: t.qualityControl,
      thumbnail: "/video-thumb-2.jpg",
      description: t.qualityDescription,
      duration: "4:20",
      videoUrl: "https://example.com/video2",
    },
    {
      id: 3,
      title: t.installationGuide,
      thumbnail: "/video-thumb-3.jpg",
      description: t.installationDescription,
      duration: "5:15",
      videoUrl: "https://example.com/video3",
    },
    {
      id: 4,
      title: t.companyOverview,
      thumbnail: "/video-thumb-4.jpg",
      description: t.companyDescription,
      duration: "2:30",
      videoUrl: "https://example.com/video4",
    },
    {
      id: 5,
      title: t.successStories,
      thumbnail: "/video-thumb-5.jpg",
      description: t.storiesDescription,
      duration: "6:10",
      videoUrl: "https://example.com/video5",
    },
    {
      id: 6,
      title: t.productFeatures,
      thumbnail: "/video-thumb-6.jpg",
      description: t.featuresDescription,
      duration: "4:55",
      videoUrl: "https://example.com/video6",
    },
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    // Here you can implement video player modal or navigation
  };

  return (
    <section
      id="videos"
      className={`section ${language === "fa" ? "rtl" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">{t.ourVideos}</h2>
        <div className="videos-grid">
          {videoData.map((video, index) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => handleVideoClick(video)}
            >
              <div className="video-thumbnail">
                <Image
                  src={video.thumbnail}
                  alt={`Video ${index + 1}`}
                  width={300}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
                <div className="video-duration">{video.duration}</div>
                <div className="play-button">
                  <svg viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
