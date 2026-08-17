"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "@/data/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.ES;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ES",
  setLang: () => {},
  t: translations.ES,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ES");

  useEffect(() => {
    const savedLang = localStorage.getItem("ngconf_lang") as Language;
    if (savedLang === "ES" || savedLang === "EN") {
      // Disable lint rule for this line to prevent cascading render warning on first client load
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("ngconf_lang", newLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
