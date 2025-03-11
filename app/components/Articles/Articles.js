"use client";
import { useState } from "react";
import Image from "next/image";
import { translations } from "../../translations";
import "./Articles.css";

const articles = {
  en: [
    {
      title: "Industrial Automation Trends",
      category: "Industry",
      image: "/articles/article1.jpg",
      description:
        "Latest trends in industrial automation and smart manufacturing.",
      readMore: "Read More",
      date: "2024-03-15",
    },
    {
      title: "Digital Transformation",
      category: "Technology",
      image: "/articles/article2.jpg",
      description:
        "How digital transformation is reshaping industrial processes.",
      readMore: "Read More",
      date: "2024-03-10",
    },
    {
      title: "Sustainable Manufacturing",
      category: "Sustainability",
      image: "/articles/article3.jpg",
      description: "Implementing sustainable practices in manufacturing.",
      readMore: "Read More",
      date: "2024-03-05",
    },
    {
      title: "Quality Control Systems",
      category: "Quality",
      image: "/articles/article4.jpg",
      description: "Modern approaches to quality control in industry.",
      readMore: "Read More",
      date: "2024-02-28",
    },
    {
      title: "Industry 4.0",
      category: "Innovation",
      image: "/articles/article5.jpg",
      description: "Understanding Industry 4.0 and its implications.",
      readMore: "Read More",
      date: "2024-02-20",
    },
    {
      title: "Supply Chain Management",
      category: "Management",
      image: "/articles/article6.jpg",
      description: "Optimizing industrial supply chains for efficiency.",
      readMore: "Read More",
      date: "2024-02-15",
    },
  ],
  fa: [
    {
      title: "روند‌های اتوماسیون صنعتی",
      category: "صنعت",
      image: "/articles/article1.jpg",
      description: "آخرین روندها در اتوماسیون صنعتی و تولید هوشمند.",
      readMore: "ادامه مطلب",
      date: "1402-12-25",
    },
    {
      title: "تحول دیجیتال",
      category: "تکنولوژی",
      image: "/articles/article2.jpg",
      description: "چگونه تحول دیجیتال فرآیندهای صنعتی را تغییر می‌دهد.",
      readMore: "ادامه مطلب",
      date: "1402-12-20",
    },
    {
      title: "تولید پایدار",
      category: "پایداری",
      image: "/articles/article3.jpg",
      description: "پیاده‌سازی شیوه‌های پایدار در تولید.",
      readMore: "ادامه مطلب",
      date: "1402-12-15",
    },
    {
      title: "سیستم‌های کنترل کیفیت",
      category: "کیفیت",
      image: "/articles/article4.jpg",
      description: "رویکردهای مدرن در کنترل کیفیت صنعتی.",
      readMore: "ادامه مطلب",
      date: "1402-12-09",
    },
    {
      title: "صنعت ۴.۰",
      category: "نوآوری",
      image: "/articles/article5.jpg",
      description: "درک صنعت ۴.۰ و پیامدهای آن.",
      readMore: "ادامه مطلب",
      date: "1402-12-01",
    },
    {
      title: "مدیریت زنجیره تأمین",
      category: "مدیریت",
      image: "/articles/article6.jpg",
      description: "بهینه‌سازی زنجیره‌های تأمین صنعتی برای کارایی بیشتر.",
      readMore: "ادامه مطلب",
      date: "1402-11-26",
    },
  ],
};

const Articles = ({ language = "fa" }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const t = translations[language];
  const currentArticles = articles[language];

  const categories = [
    "All",
    ...new Set(currentArticles.map((article) => article.category)),
  ];

  const filteredArticles =
    activeCategory === "All"
      ? currentArticles
      : currentArticles.filter(
          (article) => article.category === activeCategory
        );

  return (
    <section
      id="articles"
      className={`section ${language === "fa" ? "rtl" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">{t.articles}</h2>
        <div className="article-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="articles-grid">
          {filteredArticles.map((article, index) => (
            <div key={index} className="article-item">
              <div className="article-image">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                  className="article-img"
                />
                <div className="article-category">{article.category}</div>
              </div>
              <div className="article-content">
                <div className="article-date">{article.date}</div>
                <h3>{article.title}</h3>
                <p className="description">{article.description}</p>
                <button className="read-more-btn">{article.readMore}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
