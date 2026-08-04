import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { BUSINESS, IMAGES } from "@/data/content";

export default function Header() {
  const { t, lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/services", label: t.nav.services },
    { to: "/gallery", label: t.nav.gallery },
    { to: "/contact", label: t.nav.contact },
  ];

  const linkClass = ({ isActive }) =>
    `relative text-sm tracking-wide transition-colors duration-300 hover:text-rose-deep ${
      isActive ? "text-rose-deep" : "text-ink"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/75 border-b border-white/50 shadow-[0_4px_30px_-12px_rgba(190,120,150,0.25)]"
          : "bg-transparent"
      }`}
      data-testid="site-header"
    >
      <div className="flex items-center justify-center gap-2 bg-rose-deep px-4 py-2 text-center text-white" data-testid="location-banner">
        <MapPin className="h-3.5 w-3.5 shrink-0 text-white/90" />
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] sm:text-xs">{t.banner}</span>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
          <img src={IMAGES.logo} alt="Mon Reve Nail Spa logo" className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40" />
          <span className="hidden font-serif text-xl tracking-wide text-ink sm:block">
            Mon Reve <span className="font-italic-display text-rose-deep">Nail Spa</span>
          </span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} data-testid={`nav-${l.label.toLowerCase()}`}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1 rounded-full border border-rose/60 px-3 py-1.5 text-xs font-medium tracking-widest text-ink transition-all duration-300 hover:bg-rose/20"
            data-testid="language-switcher"
            aria-label="Switch language"
          >
            <span className={lang === "en" ? "text-rose-deep" : "text-ink-soft"}>EN</span>
            <span className="text-ink-soft">/</span>
            <span className={lang === "es" ? "text-rose-deep" : "text-ink-soft"}>ES</span>
          </button>

          <a
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-rose px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-ink transition-all duration-300 hover:scale-[1.03] hover:bg-rose-deep hover:text-white md:flex"
            data-testid="header-call-button"
          >
            <Phone className="h-3.5 w-3.5" />
            {t.reserve}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-rose/60 text-ink lg:hidden"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-rose/30 bg-white/95 backdrop-blur-xl lg:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `py-3 font-serif text-2xl ${isActive ? "text-rose-deep" : "text-ink"}`
                  }
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href={BUSINESS.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-rose px-5 py-4 text-sm font-medium uppercase tracking-widest text-ink"
                data-testid="mobile-call-button"
              >
                <Phone className="h-4 w-4" />
                {t.reserve}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
