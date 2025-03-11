"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Videos from "../components/Videos/Videos";
import Footer from "../components/Footer/Footer";
import {
  getInitialLanguage,
  setLanguageInStorage,
} from "../utils/languageManager";

export default function VideosPage() {
  const [language, setLanguage] = useState("fa");

  useEffect(() => {
    const savedLanguage = getInitialLanguage();
    setLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setLanguageInStorage(lang);
  };

  return (
    <main className={language === "fa" ? "rtl" : ""}>
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <div className="main-content">
        <Videos language={language} />
      </div>
      <Footer language={language} />
    </main>
  );
}
