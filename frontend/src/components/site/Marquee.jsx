import React from "react";
import { useLang } from "@/context/LanguageContext";

// Slow editorial marquee ribbon (CSS-driven, duplicated track for seamless loop)
export default function Marquee() {
  const { t } = useLang();
  const text = t.marquee;
  const repeated = Array(6).fill(text).join("");

  return (
    <div
      className="relative overflow-hidden border-y border-rose/40 bg-blush py-5 md:py-7"
      data-testid="editorial-marquee"
    >
      <div className="marquee-track animate-marquee">
        <span className="font-display text-2xl md:text-4xl italic text-rose-deep pr-4">
          {repeated}
        </span>
        <span className="font-display text-2xl md:text-4xl italic text-rose-deep pr-4" aria-hidden="true">
          {repeated}
        </span>
      </div>
    </div>
  );
}
