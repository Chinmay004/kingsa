"use client";

import { useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const handleExploreClick = useCallback(() => {
    document.getElementById('')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen gap-4 sm:gap-6 relative overflow-hidden px-4">
      <Image 
        src="/hero-bg.webp" 
        alt="King Sa" 
        width={1000} 
        height={1000} 
        className="absolute top-0 left-0 right-0 w-full h-full object-cover z-0" 
        priority
      />
      <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-medium text-center z-10 w-full max-w-6xl">
        {t("hero.title")}
      </h1>
      <p className="font-inter text-lg sm:text-xl lg:text-2xl text-center font-light z-10 max-w-3xl">
        {t("hero.subtitle")}
      </p>
      <button
        onClick={handleExploreClick}
        className="flex mt-2 sm:mt-4 gap-1 justify-center items-center relative py-2.5 px-4 sm:px-5 lg:px-5 rounded-3xl w-fit hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer touch-manipulation min-h-11 z-10"
        aria-label="Learn more about King Sa"
      >
        <div className="absolute left-0 right-0 top-0 bottom-0 z-[1] rounded-3xl buttonBorder"></div>
        <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-[2] rounded-3xl m-[1.2px] bg-black"></div>
        <div className="absolute left-[0.3px] right-[0.3px] top-[0.3px] bottom-[0.3px] z-[3] rounded-3xl m-[1.2px] bg-[linear-gradient(99deg,rgba(85,85,85,0.40)_9.65%,rgba(66,66,66,0.40)_93.31%)] shadow-[0_16.455px_16.455px_0_rgba(0,0,0,0.25),250.932px_497.75px_156.318px_0_rgba(0,0,0,0.04),90.5px_176.886px_119.295px_0_rgba(0,0,0,0.10),8.227px_20.568px_49.364px_0_rgba(0,0,0,0.15)]"></div>
        <p className="font-inter text-sm sm:text-base font-semibold text-white z-10 relative">{t("hero.learnMore")}</p>
      </button>
    </section>
  );
}