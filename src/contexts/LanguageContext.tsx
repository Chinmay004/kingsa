"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import enTranslations from "@/translations/en.json";
import frTranslations from "@/translations/fr.json";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Preload all translations
const translationsMap: Record<Language, Record<string, any>> = {
  en: enTranslations,
  fr: frTranslations,
};

// Function to detect browser language
function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") {
    return "en"; // Default for SSR
  }

  // Get browser language(s)
  const browserLang = navigator.language || (navigator as any).userLanguage;
  const browserLangs = navigator.languages || [browserLang];

  // Check each language preference
  for (const lang of browserLangs) {
    const langCode = lang.toLowerCase().split("-")[0]; // Get language code (e.g., "fr" from "fr-FR")
    
    if (langCode === "fr") {
      return "fr";
    }
    if (langCode === "en") {
      return "en";
    }
  }

  // Default fallback
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with browser language or saved preference
  const getInitialLanguage = (): Language => {
    if (typeof window === "undefined") {
      return "en";
    }

    // First, check if user has saved a preference
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      return savedLanguage;
    }

    // Otherwise, use browser language
    return detectBrowserLanguage();
  };

  const initialLanguage = getInitialLanguage();
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const [translations, setTranslations] = useState<Record<string, any>>(
    translationsMap[initialLanguage]
  );

  // Update translations when language changes
  useEffect(() => {
    setTranslations(translationsMap[language]);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const t = (key: string): string | string[] => {
    const keys = key.split(".");
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value; // Return the value (string or array)
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
