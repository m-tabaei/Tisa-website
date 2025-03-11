"use client";
import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  getInitialLanguage,
  setLanguageInStorage,
} from "../../utils/languageManager";

const Layout = ({ children, showFooter = true }) => {
  const [language, setLanguage] = useState("fa");

  useEffect(() => {
    const initialLang = getInitialLanguage();
    setLanguage(initialLang);
  }, []);

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    setLanguageInStorage(newLang);
  };

  // Clone children with language prop
  const childrenWithLanguage = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { language });
    }
    return child;
  });

  return (
    <div
      className={`min-h-screen flex flex-col ${
        language === "fa" ? "font-iran-sans" : "font-roboto"
      }`}
    >
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <main className="flex-grow">{childrenWithLanguage}</main>
      {showFooter && <Footer language={language} />}
    </div>
  );
};

export default Layout;
