import { useState, useEffect } from "react";
import product1 from "@/assets/product-education.jpg";
import product2 from "@/assets/product-reels.jpg";
import product3 from "@/assets/product-web.jpg";

const IMAGES = [product1, product2, product3];

export function Showreel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
              Showreel · 2026
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
              The studio, in <span className="text-brand-gradient italic">motion.</span>
            </h2>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
            Loop · 00:12
          </span>
        </div>

        <div className="ring-grad relative overflow-hidden rounded-2xl sm:rounded-[2rem] aspect-[16/10] sm:aspect-[21/9]">
          <div
            className="absolute -inset-20 -z-10 opacity-60 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />

          {/* Slideshow */}
          {IMAGES.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: currentIndex === i ? 1 : 0,
                transform: currentIndex === i ? "scale(1.05)" : "scale(1)",
                transition: "opacity 1.5s ease-in-out, transform 8s ease-out",
              }}
            >
              <img src={src} alt="Product feature" className="h-full w-full object-cover" />
            </div>
          ))}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_55%,oklch(0.05_0.01_260/0.65))]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

          {/* Corner markers */}
          {["tl", "tr", "bl", "br"].map((p) => (
            <span
              key={p}
              aria-hidden
              className={`absolute h-4 w-4 border-foreground/60 sm:h-5 sm:w-5
                ${p === "tl" ? "left-3 top-3 border-l border-t sm:left-4 sm:top-4" : ""}
                ${p === "tr" ? "right-3 top-3 border-r border-t sm:right-4 sm:top-4" : ""}
                ${p === "bl" ? "left-3 bottom-3 border-b border-l sm:left-4 sm:bottom-4" : ""}
                ${p === "br" ? "right-3 bottom-3 border-b border-r sm:right-4 sm:bottom-4" : ""}
              `}
            />
          ))}

          <div className="absolute left-4 top-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/80 sm:left-6 sm:top-6 sm:text-[10px]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
            REC · DEXTORA STUDIOS
          </div>
        </div>
      </div>
    </section>
  );
}
