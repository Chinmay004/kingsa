"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en" as const, name: "English"},
    { code: "fr" as const, name: "Français"},
  ];

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLanguageChange = (langCode: "en" | "fr") => {
    setLanguage(langCode);
    setIsDropdownOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full z-50 absolute top-0 px-4 sm:px-8 lg:px-16 overflow-x-hidden h-full">
      <div className="flex items-center justify-between py-3 sm:py-4 lg:py-6">
        <h1 className="font-poppins text-lg sm:text-xl lg:text-3xl leading-normal text-white whitespace-nowrap">
          King Sa
        </h1>
        <div className="flex gap-2 sm:gap-4 lg:gap-8 items-center">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex gap-1 sm:gap-1.5 items-center cursor-pointer hover:opacity-80 transition-opacity px-2 py-1 rounded-md hover:bg-white/10"
              aria-label="Select language"
              aria-expanded={isDropdownOpen}
            >
              <p className="font-inter font-semibold text-xs sm:text-sm lg:text-base text-white tracking-wide whitespace-nowrap">
                {currentLanguage.name}
              </p>
              <div className="relative w-3 h-3 sm:w-4 sm:h-4 shrink-0 transition-transform duration-200" style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <g clipPath="url(#clip0_1_107)">
                    <path d="M13 6L8 11L3 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_107">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-black/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg min-w-[140px] overflow-hidden z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-left hover:bg-white/10 transition-colors ${
                      language === lang.code ? "bg-white/10" : ""
                    }`}
                  >
                    <span className="font-inter font-medium text-sm text-white">
                      {lang.name}
                    </span>
                    {language === lang.code && (
                      <span className="ml-auto text-white text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button 
            onClick={scrollToContact}
            className="bg-white px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full hover:opacity-90 transition-opacity shrink-0"
          >
            <p className="font-inter font-normal text-xs sm:text-sm lg:text-base text-black tracking-wide whitespace-nowrap">
              {t("header.contactUs")}
            </p>
          </button>
        </div>
      </div>
    </header>
  );
}