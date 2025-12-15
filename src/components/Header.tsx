"use client";

export default function Header() {
  return (
    <header className="w-full z-10 absolute top-0 px-4 sm:px-8 lg:px-16 overflow-x-hidden">
      <div className="flex items-center justify-between py-3 sm:py-4 lg:py-6">
        <h1 className="font-poppins text-lg sm:text-xl lg:text-3xl leading-normal text-white whitespace-nowrap">
          King Sa
        </h1>
        <div className="flex gap-2 sm:gap-4 lg:gap-8 items-center">
          <div className="flex gap-1 sm:gap-1.5 items-center cursor-pointer">
            <p className="font-inter font-semibold text-xs sm:text-sm lg:text-base text-white tracking-wide whitespace-nowrap">
              English
            </p>
            <div className="relative w-3 h-3 sm:w-4 sm:h-4 shrink-0">
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
          </div>
          <button className="bg-white px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full hover:opacity-90 transition-opacity shrink-0">
            <p className="font-inter font-normal text-xs sm:text-sm lg:text-base text-black tracking-wide whitespace-nowrap">
              Contact Us
            </p>
          </button>
        </div>
      </div>
    </header>
  );
}