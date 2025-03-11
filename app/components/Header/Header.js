"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { translations } from "../../translations";
import "./Header.css";

const Header = ({ language = "en", onLanguageChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const pathname = usePathname();
  const t = translations[language];

  const menuItems = [
    { href: "/", text: t.home, id: "home" },
    { href: "/about", text: t.aboutUs, id: "about" },
    { href: "/services", text: t.services, id: "services" },
    { href: "/videos", text: t.videos, id: "videos" },
    { href: "/catalog", text: t.catalog, id: "catalog" },
    { href: "/articles", text: t.articles, id: "articles" },
    { href: "/representation", text: t.representation, id: "representation" },
    { href: "/contact", text: t.contactUs, id: "contact" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

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
      <button
        className="hamburger"
        onClick={toggleMenu}
        ref={hamburgerRef}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <span className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></span>
      </button>

      <LanguageSwitcher
        currentLang={language}
        onLanguageChange={onLanguageChange}
      />

      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
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
