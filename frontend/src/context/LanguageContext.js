import React, { createContext, useContext, useState, useCallback } from "react";
import { T } from "@/data/content";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("mr_lang") || "en";
    }
    return "en";
  });

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "es" : "en";
      window.localStorage.setItem("mr_lang", next);
      return next;
    });
  }, []);

  const setLanguage = useCallback((l) => {
    window.localStorage.setItem("mr_lang", l);
    setLang(l);
  }, []);

  const t = T[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggle, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
