import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ images, index, lang, onClose, onNav }) {
  const open = index !== null && index >= 0;

  const handleKey = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    },
    [open, onClose, onNav]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          data-testid="lightbox"
        >
          <button
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            onClick={onClose}
            aria-label="Close"
            data-testid="lightbox-close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            className="absolute left-4 md:left-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            onClick={(e) => { e.stopPropagation(); onNav(-1); }}
            aria-label="Previous"
            data-testid="lightbox-prev"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <motion.img
            key={index}
            src={images[index].src}
            alt={lang === "es" ? images[index].alt_es : images[index].alt_en}
            className="max-h-[82vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 md:right-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            onClick={(e) => { e.stopPropagation(); onNav(1); }}
            aria-label="Next"
            data-testid="lightbox-next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
