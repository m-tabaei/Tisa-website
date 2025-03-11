"use client";
import Image from "next/image";
import { translations } from "../../translations";
import "./Services.css";

const Services = ({ language = "en" }) => {
  const t = translations[language];

  const services = [
    {
      id: 1,
      title: t.industrialAutomation,
      description: t.automationDescription,
      icon: "/icons/automation.svg",
    },
    {
      id: 2,
      title: t.qualityControl,
      description: t.qualityDescription,
      icon: "/icons/quality.svg",
    },
    {
      id: 3,
      title: t.maintenance,
      description: t.maintenanceDescription,
      icon: "/icons/maintenance.svg",
    },
    {
      id: 4,
      title: t.consulting,
      description: t.consultingDescription,
      icon: "/icons/consulting.svg",
    },
    {
      id: 5,
      title: t.training,
      description: t.trainingDescription,
      icon: "/icons/training.svg",
    },
    {
      id: 6,
      title: t.support,
      description: t.supportDescription,
      icon: "/icons/support.svg",
    },
  ];

  return (
    <section
      id="services"
      className={`section ${language === "fa" ? "rtl" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">{t.servicesTitle}</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
