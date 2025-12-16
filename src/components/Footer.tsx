"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const navigationColumns = [
    [
      {
        title: "SELL A HOME",
        links: ["Request an offer", "Pricing", "Reviews", "Stories"],
      },
      {
        title: "BUY A HOME",
        links: ["Buy", "Finance"],
      },
    ],
    [
      {
        title: "BUY, RENT AND SELL",
        links: ["Buy and sell properties", "Rent home", "Builder trade-up"],
      },
      {
        title: "TERMS & PRIVACY",
        links: ["Trust & Safety", "Terms of Service", "Privacy Policy"],
      },
    ],
    [
      {
        title: "ABOUT",
        links: ["Company", "How it works", "Contact", "Investors"],
      },
      {
        title: "RESOURCES",
        links: ["Blog", "Guides", "FAQ", "Help Center"],
      },
    ],
  ];

  return (
    <footer className="bg-black relative w-full shadow-[0px_4px_200px_0px_rgba(232,249,247,0.2)]">
      <div className="py-8 sm:py-12 lg:py-20 w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[88px] justify-between items-center lg:items-start w-full px-4 sm:px-8 lg:px-[160px]">
            <div className="w-full lg:w-auto">
                <h2 className="font-poppins font-normal leading-[1.5] text-xl sm:text-2xl lg:text-[32px] text-white whitespace-nowrap text-center lg:text-left">
                King Sa
                </h2>
            </div>
            {navigationColumns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex flex-col gap-6 sm:gap-8 lg:gap-[48px] items-center lg:items-start"
              >
                {column.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className="flex flex-col gap-3 sm:gap-4 lg:gap-[40px] items-center lg:items-start"
                  >
                    <h3 className="font-inter font-bold leading-[1.5] text-sm sm:text-base text-white whitespace-nowrap text-center lg:text-left">
                      {section.title}
                    </h3>
                    <div className="flex flex-col gap-0 items-center lg:items-start">
                      {section.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href="#"
                          className="font-inter font-medium leading-[32px] sm:leading-[38px] text-sm sm:text-base text-white opacity-70 hover:opacity-100 transition-opacity text-center lg:text-left"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

        {/* Divider Line */}
        <div className="border-t border-[#cbcbcb] border-opacity-30 w-full my-6 sm:my-8 lg:my-8"></div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 lg:gap-0 pt-6 sm:pt-8 lg:pt-0 px-4 sm:px-8 lg:px-[160px]">
          {/* Copyright */}
          <p className="font-inter font-medium leading-[1.6] text-sm sm:text-base text-white opacity-50 w-full sm:w-auto text-center sm:text-left">
            {t("footer.copyright")}
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 sm:gap-6 lg:gap-[40px] items-center opacity-30">
            {/* Twitter */}
            <a
              href="#"
              className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-100 transition-opacity"
              aria-label="Twitter"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  fill="white"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-100 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

