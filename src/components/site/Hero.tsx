import { useEffect, useRef } from "react";
import heroVideo from "@/assets/hero-video.mp4.asset.json";

const HEADLINE = ["Engineering", "the", "interactive", "future."];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40 md:pt-52 noise"
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "30%" }}
    >
      {/* Cinematic video bed */}
      <div className="absolute inset-0 -z-20">
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full scale-110 object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      </div>

      {/* Cursor-reactive aurora */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 transition-[background] duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), oklch(0.62 0.22 295 / 0.35), transparent 60%), radial-gradient(900px circle at calc(100% - var(--mx)) calc(100% - var(--my)), oklch(0.78 0.12 200 / 0.22), transparent 65%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 grid-bg opacity-60" />

      {/* Floating frost orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[20%] h-40 w-40 rounded-full opacity-40 blur-3xl"
             style={{ background: "var(--gradient-brand)", animation: "float 9s ease-in-out infinite" }} />
        <div className="absolute right-[10%] top-[55%] h-56 w-56 rounded-full opacity-30 blur-3xl"
             style={{ background: "linear-gradient(120deg, var(--cyan), transparent)", animation: "float 12s ease-in-out infinite reverse" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Eyebrow */}
        <div className="mx-auto flex w-fit max-w-full animate-[fade-in_1s_ease-out] items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur sm:gap-3 sm:px-4 sm:text-xs sm:tracking-[0.25em]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
          A studio of three god-tier products
        </div>

        {/* Kinetic headline */}
        <h1 className="mt-6 text-center font-display tracking-tight sm:mt-8">
          <span className="block text-[clamp(2.5rem,11vw,9.5rem)] leading-[0.95]">
            {HEADLINE.slice(0, 3).map((w, wi) => (
              <span key={wi} className="mr-[0.2em] inline-block overflow-hidden align-bottom">
                <span
                  className="inline-block text-gradient"
                  style={{
                    animation: `fade-up 1.1s cubic-bezier(0.22,1,0.36,1) both`,
                    animationDelay: `${0.15 + wi * 0.12}s`,
                  }}
                >
                  {w}
                </span>
              </span>
            ))}
          </span>
          <span className="mt-1 block text-[clamp(2.5rem,11vw,9.5rem)] leading-[0.95] sm:mt-2">
            <span className="inline-block overflow-hidden align-bottom">
              <span
                className="inline-block text-brand-gradient italic"
                style={{
                  animation: `fade-up 1.2s cubic-bezier(0.22,1,0.36,1) both`,
                  animationDelay: `0.55s`,
                  backgroundSize: "200% 100%",
                }}
              >
                future.
              </span>
            </span>
          </span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl px-2 text-center text-sm text-muted-foreground sm:mt-8 sm:text-base md:text-lg"
          style={{ animation: "fade-up 1.3s cubic-bezier(0.22,1,0.36,1) both", animationDelay: "0.75s" }}
        >
          We build cinematic AI products that replace the generic web — from adaptive learning engines
          to autonomous video studios and reality-grade site generators.
        </p>

        <div
          className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center"
          style={{ animation: "fade-up 1.4s cubic-bezier(0.22,1,0.36,1) both", animationDelay: "0.95s" }}
        >
          <a href="#products" className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium sm:px-7 sm:py-3.5">
            Explore the work
          </a>
          <a href="#contact" className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium sm:px-7 sm:py-3.5">
            Partner with us
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Stat strip */}
        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border ring-grad sm:mt-24 sm:grid-cols-3">
          {[
            { k: "14k+", v: "Active learners" },
            { k: "60s", v: "Idea → cinematic site" },
            { k: "98%", v: "Target success rate" },
          ].map((s) => (
            <div key={s.v} className="bg-card/70 px-5 py-5 text-left backdrop-blur-md sm:px-6 sm:py-7">
              <dt className="font-display text-3xl text-brand-gradient sm:text-4xl">{s.k}</dt>
              <dd className="mt-1.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:mt-2 sm:text-[11px]">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border/80">
          <div className="mt-1.5 h-2 w-0.5 rounded-full bg-foreground/70" style={{ animation: "float 1.6s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}
