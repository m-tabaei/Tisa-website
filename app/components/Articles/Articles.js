"use client";
import { translations } from "../../translations";
import "./Articles.css";

const Articles = ({ language = "fa" }) => {
  const t = translations[language];

  return (
    <section id="articles" className={`section ${language === "fa" ? "rtl" : ""}`}>
      <div className="container">
        <h2 className="section-title">{t.articles}</h2>
        <div className="articles-grid">
          {/* Articles content will be added here */}
          <p>{t.comingSoon}</p>
        </div>
      </div>
    </section>
  );
};

export default Articles; 