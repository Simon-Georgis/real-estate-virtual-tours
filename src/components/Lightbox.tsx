import { useEffect, useState, useCallback } from "react";

type Props = {
  images: string[];
  startIndex: number;
  open: boolean;
  onClose: () => void;
  alt: string;
};

export function Lightbox({ images, startIndex, open, onClose, alt }: Props) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black/95 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-brand-cream/80 hover:text-brand-cream text-xs uppercase tracking-[0.2em]"
        aria-label="Close"
      >
        Close ✕
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-4 md:left-8 text-brand-cream/70 hover:text-brand-cream text-3xl font-serif px-4 py-2"
        aria-label="Previous"
      >
        ‹
      </button>

      <img
        src={images[index]}
        alt={`${alt} — ${index + 1} of ${images.length}`}
        className="max-h-[85vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-4 md:right-8 text-brand-cream/70 hover:text-brand-cream text-3xl font-serif px-4 py-2"
        aria-label="Next"
      >
        ›
      </button>

      <div className="absolute bottom-6 left-0 right-0 text-center text-[10px] uppercase tracking-[0.2em] text-brand-cream/60">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
