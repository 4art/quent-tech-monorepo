"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import translations, { Locale, TranslationKeys } from "./translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("qt-lang") as Locale | null;
    if (stored && translations[stored]) {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("qt-lang", l);
    document.documentElement.lang = l;
  };

  // Prevent hydration mismatch by rendering with default locale on server
  const t = translations[mounted ? locale : "en"];

  return (
    <LanguageContext.Provider value={{ locale: mounted ? locale : "en", setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
