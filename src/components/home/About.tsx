"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-9 justify-between items-center lg:items-start w-full px-4 sm:px-8 lg:px-24 py-12 sm:py-16 overflow-x-hidden">
      {/* Heading - First on mobile, part of left column on desktop */}
      <h2 className="font-open-sans font-normal leading-[1.33] text-2xl sm:text-3xl lg:text-4xl text-white w-full text-center lg:text-left order-1 lg:order-0 lg:hidden">
        {t("about.title")}
      </h2>
      
      {/* Content with heading - Left column on desktop */}
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-11 items-center lg:items-start w-full lg:w-[576px] shrink-0 order-3 lg:order-0">
        <div className="flex flex-col gap-2 sm:gap-1.5 items-center lg:items-start w-full text-white">
          <h2 className="font-open-sans font-normal leading-[1.33] text-2xl sm:text-3xl lg:text-4xl text-white w-full text-center lg:text-left hidden lg:block">
            {t("about.title")}
          </h2>
          <p className="font-open-sans font-light leading-[1.51] text-sm sm:text-base lg:text-xl text-white w-full text-center lg:text-left">
            {t("about.description")}
          </p>
        </div>
        <button className="bg-transparent border border-solid border-white flex items-center justify-center px-4 py-2 lg:p-2.5 rounded-3xl w-full sm:w-52 hover:opacity-90 transition-opacity">
          <p className="font-open-sans font-normal leading-[1.51] text-sm sm:text-base lg:text-xl text-center whitespace-nowrap text-white">
            {t("about.learnMore")}
          </p>
        </button>
      </div>
      
      {/* Image - Second on mobile, right column on desktop */}
      <div className="flex flex-col items-center lg:items-start relative w-full lg:w-[576px] shrink-0 order-2 lg:order-0">
        <div className="relative h-64 sm:h-72 lg:h-[360px] w-full rounded-2xl overflow-hidden">
          <Image
            src="/about-img.webp"
            alt={(t("about.title") as string) || "About KING SA"}
            fill
            className="object-cover rounded-2xl object-center"
          />
        </div>
      </div>
    </section>
  );
}

