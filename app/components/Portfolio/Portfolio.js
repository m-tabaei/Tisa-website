"use client";
import { useState } from "react";
import Image from "next/image";
import "./Portfolio.css";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/portfolio/project1.jpg",
    description: "A modern e-commerce platform with advanced features.",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "/portfolio/project2.jpg",
    description: "Secure and user-friendly mobile banking application.",
  },
  {
    title: "Cloud Migration",
    category: "Cloud Solutions",
    image: "/portfolio/project3.jpg",
    description: "Successfully migrated enterprise infrastructure to cloud.",
  },
  {
    title: "UX Redesign",
    category: "UI/UX Design",
    image: "/portfolio/project4.jpg",
    description: "Complete UX overhaul for a major retail client.",
  },
  {
    title: "Digital Campaign",
    category: "Digital Marketing",
    image: "/portfolio/project5.jpg",
    description: "Award-winning digital marketing campaign.",
  },
  {
    title: "IT Strategy",
    category: "IT Consulting",
    image: "/portfolio/project6.jpg",
    description: "Comprehensive IT strategy for a Fortune 500 company.",
  },
];

const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <div className="portfolio-filters">
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
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p className="category">{project.category}</p>
                <p className="description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
