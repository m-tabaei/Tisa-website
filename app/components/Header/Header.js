"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { translations } from "../../translations";
import "./Header.css";

const Header = ({ language = "en", onLanguageChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = translations[language];

  const menuItems = [
    { href: "/", text: t.home, id: "home" },
    { href: "/about", text: t.aboutUs, id: "about" },
    { href: "/services", text: t.services, id: "services" },
    { href: "/videos", text: t.videos, id: "videos" },
    { href: "/catalog", text: t.catalog, id: "catalog" },
    { href: "/representation", text: t.representation, id: "representation" },
    { href: "/contact", text: t.contactUs, id: "contact" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`header ${language === "fa" ? "rtl" : ""} ${
        isVisible ? "visible" : "hidden"
      } ${isMenuOpen ? "menu-open" : ""}`}
    >
      <button className="hamburger" onClick={toggleMenu}>
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
      </button>

      <LanguageSwitcher
        currentLang={language}
        onLanguageChange={onLanguageChange}
      />

      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={item.id}
              style={{ animationDelay: `${index * 0.05}s` }}
              className="menu-item"
            >
              <Link
                href={item.href}
                className={isActive(item.href) ? "active" : ""}
                onClick={closeMenu}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
