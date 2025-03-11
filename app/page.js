"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import {
  getInitialLanguage,
  setLanguageInStorage,
} from "./utils/languageManager";

export default function Home() {
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
      <Hero language={language} />
    </main>
  );
}
