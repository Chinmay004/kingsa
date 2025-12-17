"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black relative w-full shadow-[0px_4px_200px_0px_rgba(232,249,247,0.2)]">
      <div className="py-8 sm:py-12 lg:py-20 w-full">
        {/* Top Section - Three Columns */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-start w-full px-4 sm:px-8 lg:px-[160px]">
          {/* Column 1 - Company Info */}
          <div className="w-full lg:w-auto flex flex-col gap-4">
            <h2 className="font-poppins font-normal leading-[1.5] text-xl sm:text-2xl lg:text-[32px] text-white text-center lg:text-left">
              King Sa
            </h2>
            <p className="font-inter font-normal leading-[1.6] text-sm sm:text-base text-white opacity-70 text-center lg:text-left max-w-md">
              {t("footer.description")}
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="w-full lg:w-auto flex flex-col gap-4 items-center lg:items-start">
            <h3 className="font-inter font-bold leading-[1.5] text-sm sm:text-base text-white uppercase text-center lg:text-left">
              {t("footer.quickLinks")}
            </h3>
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <a
                href="#about"
                className="font-inter font-medium leading-[32px] sm:leading-[38px] text-sm sm:text-base text-white opacity-70 hover:opacity-100 transition-opacity text-center lg:text-left"
              >
                {t("footer.aboutUs")}
              </a>
              <a
                href="#expertise"
                className="font-inter font-medium leading-[32px] sm:leading-[38px] text-sm sm:text-base text-white opacity-70 hover:opacity-100 transition-opacity text-center lg:text-left"
              >
                {t("footer.expertise")}
              </a>
              <a
                href="#subsidiaries"
                className="font-inter font-medium leading-[32px] sm:leading-[38px] text-sm sm:text-base text-white opacity-70 hover:opacity-100 transition-opacity text-center lg:text-left"
              >
                {t("footer.subsidiaries")}
              </a>
            </div>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="w-full lg:w-auto flex flex-col gap-4 items-center lg:items-start">
            <h3 className="font-inter font-bold leading-[1.5] text-sm sm:text-base text-white uppercase text-center lg:text-left">
              {t("footer.contact")}
            </h3>
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <p className="font-inter font-medium leading-[32px] sm:leading-[38px] text-sm sm:text-base text-white opacity-70 text-center lg:text-left">
                {t("footer.address")}: Avenue Cheick Zayed ex Imacy Hamdalaye Bamako
              </p>
              <p className="font-inter font-medium leading-[32px] sm:leading-[38px] text-sm sm:text-base text-white opacity-70 text-center lg:text-left">
                {t("footer.email")}: contact@kingsamali.com
              </p>
              <p className="font-inter font-medium leading-[32px] sm:leading-[38px] text-sm sm:text-base text-white opacity-70 text-center lg:text-left">
                {t("footer.phone")}: +223 76738880
              </p>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-[#cbcbcb] border-opacity-30 w-full my-6 sm:my-8 lg:my-8"></div>

        {/* Bottom Section - Copyright Only */}
        <div className="flex justify-start items-center px-4 sm:px-8 lg:px-[160px]">
          <p className="font-inter font-medium leading-[1.6] text-sm sm:text-base text-white opacity-50 text-center lg:text-left">
            © {new Date().getFullYear()} King Sa. {t("footer.allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}

