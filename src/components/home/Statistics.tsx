"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

function CountUp({ end, suffix = "", prefix = "", duration = 2000, decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLParagraphElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const animate = () => {
      const startTime = performance.now();
      const startValue = 0;

      const updateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startValue + (end - startValue) * easeOutQuart;
        
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(updateCount);
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animate();
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentElement = elementRef.current;
    if (currentElement && observerRef.current) {
      observerRef.current.observe(currentElement);
    }

    return () => {
      if (currentElement && observerRef.current) {
        observerRef.current.unobserve(currentElement);
      }
    };
  }, [hasAnimated, end, duration]);

  const formatValue = (value: number) => {
    if (decimals > 0) {
      return value.toFixed(decimals);
    }
    return Math.floor(value).toString();
  };

  const className = suffix === "Mn" 
    ? "font-semibold text-2xl sm:text-3xl lg:text-5xl leading-[1.33]"
    : "font-semibold text-2xl sm:text-3xl lg:text-5xl leading-[1.33] w-full";

  return (
    <p ref={elementRef} className={className}>
      {prefix}{formatValue(count)}{suffix}
    </p>
  );
}

export default function Statistics() {
  const { t } = useLanguage();
  return (
    <section className="flex flex-col gap-6 sm:gap-8 lg:gap-11 items-center lg:items-start w-full text-white px-4 sm:px-8 lg:px-24 py-12 sm:py-16 overflow-x-hidden">
      <div className="flex flex-col gap-2 sm:gap-1.5 items-center lg:items-start w-full">
        <h2 className="font-normal text-2xl sm:text-3xl lg:text-5xl leading-[1.33] text-white w-full text-center lg:text-left">
          {t("statistics.title")}
        </h2>
        {/* <p className="font-light text-sm sm:text-base lg:text-xl leading-[1.51] text-white w-full text-center lg:text-left">
          {t("statistics.description")}
        </p> */}
      </div>
      <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4 sm:gap-6 lg:gap-14 items-center w-full max-w-[843px] sm:justify-center lg:justify-start">
        <div className="flex flex-col items-center text-center text-white w-full sm:flex-1 sm:min-w-[120px]">
          <CountUp end={30} suffix="+" />
          <p className="font-normal text-xs sm:text-sm lg:text-base leading-[1.33] w-full mt-1">
            {t("statistics.yearsOfExperience")}
          </p>
        </div>
        <div className="flex flex-col items-center text-center text-white w-full sm:flex-1 sm:min-w-[120px]">
          <CountUp end={12} suffix="+" />
          <p className="font-normal text-xs sm:text-sm lg:text-base leading-[1.33] w-full mt-1">
            {t("statistics.sectors")}
          </p>
        </div>
        <div className="flex flex-col items-center text-center text-white w-full sm:flex-1 sm:min-w-[120px]">
          <CountUp end={2} suffix="+" />
          <p className="font-normal text-xs sm:text-sm lg:text-base leading-[1.33] w-full mt-1">
            {t("statistics.countries")}
          </p>
        </div>
        <div className="flex flex-col items-center text-center text-white w-full sm:flex-1 sm:min-w-[120px]">
          <CountUp end={10} prefix="$" suffix="Mn" />
          <p className="font-normal text-xs sm:text-sm lg:text-base leading-[1.33] w-full mt-1">
            {t("statistics.value")}
          </p>
        </div>
      </div>
    </section>
  );
}

