"use client";
import Image from "next/image";
import { translations } from "../../translations";
import "./Representation.css";

const Representation = ({ language = "en" }) => {
  const t = translations[language];

  const representationData = [
    {
      id: 1,
      company: t.industrialSolutions,
      logo: "/rep-logo-1.jpg",
      country: "Germany",
      description: t.industrialSolutionsDesc,
      products: ["Industrial Machinery", "Automation Systems", "Control Units"],
    },
    {
      id: 2,
      company: t.techInnovations,
      logo: "/rep-logo-2.jpg",
      country: "Japan",
      description: t.techInnovationsDesc,
      products: ["Smart Sensors", "IoT Devices", "Industrial Software"],
    },
    {
      id: 3,
      company: t.globalManufacturing,
      logo: "/rep-logo-3.jpg",
      country: "USA",
      description: t.globalManufacturingDesc,
      products: [
        "Production Lines",
        "Assembly Systems",
        "Quality Control Equipment",
      ],
    },
    {
      id: 4,
      company: t.europeanTech,
      logo: "/rep-logo-4.jpg",
      country: "France",
      description: t.europeanTechDesc,
      products: ["Process Control", "Safety Systems", "Industrial Networks"],
    },
  ];

  return (
    <section
      id="representation"
      className={`section ${language === "fa" ? "rtl" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">{t.ourRepresentations}</h2>
        <div className="representation-grid">
          {representationData.map((rep, index) => (
            <div key={rep.id} className="representation-card">
              <div className="rep-logo">
                <Image
                  src={rep.logo}
                  alt={`Partner ${index + 1}`}
                  width={200}
                  height={100}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="rep-info">
                <h3>{rep.company}</h3>
                <div className="rep-country">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {rep.country}
                </div>
                <p className="rep-description">{rep.description}</p>
                <div className="rep-products">
                  <h4>{t.products}:</h4>
                  <ul>
                    {rep.products.map((product, index) => (
                      <li key={index}>{product}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Representation;
