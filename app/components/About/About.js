"use client";
import Image from "next/image";
import { translations } from "../../translations";
import "./About.css";

const About = ({ language = "en" }) => {
  const t = translations[language];

  return (
    <section id="about" className={`section ${language === "fa" ? "rtl" : ""}`}>
      <div className="container">
        <h2 className="section-title">{t.aboutTitle}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{t.aboutDescription}</p>
            <div className="about-features">
              <div className="feature">
                <h3>{t.ourMission}</h3>
                <p>{t.missionDescription}</p>
              </div>
              <div className="feature">
                <h3>{t.ourVision}</h3>
                <p>{t.visionDescription}</p>
              </div>
              <div className="feature">
                <h3>{t.ourValues}</h3>
                <ul>
                  {t.valuesList.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="about-image">
            <Image
              src="/about-image.jpg"
              alt="About Us"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
