"use client";
import { useState } from "react";
import Image from "next/image";
import { translations } from "../../translations";
import "./Catalog.css";

const Catalog = ({ language = "en" }) => {
  const [selectedCatalog, setSelectedCatalog] = useState(null);
  const t = translations[language];

  const catalogData = [
    {
      id: 1,
      title: t.industrialCatalog,
      thumbnail: "/catalog-1.jpg",
      description: t.industrialDescription,
      pages: 24,
      downloadUrl: "/catalogs/industrial-products.pdf",
    },
    {
      id: 2,
      title: t.technicalSpecs,
      thumbnail: "/catalog-2.jpg",
      description: t.techDescription,
      pages: 16,
      downloadUrl: "/catalogs/technical-specs.pdf",
    },
    {
      id: 3,
      title: t.installationGuides,
      thumbnail: "/catalog-3.jpg",
      description: t.guidesDescription,
      pages: 32,
      downloadUrl: "/catalogs/installation-guides.pdf",
    },
    {
      id: 4,
      title: t.maintenanceManual,
      thumbnail: "/catalog-4.jpg",
      description: t.maintenanceDescription,
      pages: 20,
      downloadUrl: "/catalogs/maintenance-manual.pdf",
    },
  ];

  const handleDownload = (catalog) => {
    // Implement download functionality
    window.open(catalog.downloadUrl, "_blank");
  };

  return (
    <section
      id="catalog"
      className={`section ${language === "fa" ? "rtl" : ""}`}
    >
      <div className="container">
        <h2 className="section-title">{t.productCatalogs}</h2>
        <div className="catalog-grid">
          {catalogData.map((catalog, index) => (
            <div key={catalog.id} className="catalog-card">
              <div className="catalog-thumbnail">
                <Image
                  src={catalog.thumbnail}
                  alt={`Catalog ${index + 1}`}
                  width={300}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
                <div className="catalog-pages">
                  {catalog.pages} {t.pages}
                </div>
                <button
                  className="download-button"
                  onClick={() => handleDownload(catalog)}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                  </svg>
                  {t.download}
                </button>
              </div>
              <div className="catalog-info">
                <h3>{catalog.title}</h3>
                <p>{catalog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
