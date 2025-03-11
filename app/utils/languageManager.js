const LANGUAGE_KEY = "site_language";

export const getInitialLanguage = () => {
  if (typeof window === "undefined") return "fa";
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    return savedLanguage || "fa";
  } catch (error) {
    console.error("Error reading language from localStorage:", error);
    return "fa";
  }
};

export const setLanguageInStorage = (lang) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LANGUAGE_KEY, lang);
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  } catch (error) {
    console.error("Error saving language to localStorage:", error);
  }
};
