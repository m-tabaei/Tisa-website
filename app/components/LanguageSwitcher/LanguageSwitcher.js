"use client";
import "./LanguageSwitcher.css";

const LanguageSwitcher = ({ currentLang, onLanguageChange }) => {
  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${currentLang === "en" ? "active" : ""}`}
        onClick={() => onLanguageChange("en")}
        title="English"
      >
        <svg className="flag-icon" viewBox="0 0 640 480">
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path
            fill="#FFF"
            d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"
          />
          <path
            fill="#C8102E"
            d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"
          />
          <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z" />
          <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" />
        </svg>
      </button>
      <button
        className={`lang-btn ${currentLang === "fa" ? "active" : ""}`}
        onClick={() => onLanguageChange("fa")}
        title="فارسی"
      >
        <svg className="flag-icon" viewBox="0 0 640 480">
          <path fill="#239f40" d="M0 320h640v160H0z" />
          <path fill="#fff" d="M0 160h640v160H0z" />
          <path fill="#da0000" d="M0 0h640v160H0z" />
          <g fill="#fff" transform="translate(320 240) scale(1.8)">
            <g id="b">
              <path
                id="a"
                d="M-1-2c-2 1 1 2 0 3 1-1-2-3-1-2"
                transform="rotate(18)"
              />
              <use transform="scale(-1 1)" href="#a" />
            </g>
            <use transform="rotate(72)" href="#b" />
            <use transform="rotate(144)" href="#b" />
            <use transform="rotate(216)" href="#b" />
            <use transform="rotate(288)" href="#b" />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
