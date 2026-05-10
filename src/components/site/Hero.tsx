import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroBg from "@/assets/hero-bg.jpg";
import { useMagnetic } from "@/hooks/useMagnetic";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE_L1 = ["Engineering", "the", "interactive"];
const HEADLINE_L2 = "future.";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDListElement>(null);
  const magneticBtn1 = useMagnetic<HTMLAnchorElement>(0.3);
  const magneticBtn2 = useMagnetic<HTMLAnchorElement>(0.3);

  // Cursor-reactive aurora
  useEffect(() => {
    const el = sectionRef.current;
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

  // GSAP entrance timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Eyebrow fade in
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" },
      );

      // Headline words stagger in
      const words = headlineRef.current?.querySelectorAll(".hero-word");
      if (words) {
        tl.fromTo(
          words,
          { opacity: 0, y: 80, rotateX: 40, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.1,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.4",
        );
      }

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.6",
      );

      // CTAs
      tl.fromTo(
        ctaRef.current?.children || [],
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" },
        "-=0.5",
      );

      // Stats
      tl.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=0.3",
      );

      // Scroll-scrubbed parallax: video zooms out, text rises
      gsap.to(videoRef.current, {
        scale: 1.0,
        opacity: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(headlineRef.current, {
        y: -80,
        opacity: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "20% top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Count-up animation for stats
  useEffect(() => {
    const statEls = statsRef.current?.querySelectorAll(".stat-value");
    if (!statEls) return;

    statEls.forEach((el) => {
      const text = el.textContent || "";
      const match = text.match(/^([\d.]+)/);
      if (!match) return;
      const target = parseFloat(match[1]);
      const suffix = text.slice(match[1].length);
      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toString() + suffix;
        },
      });
    });
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative isolate overflow-hidden pb-24 pt-32 sm:pb-32 sm:pt-40 md:pt-52 noise"
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "30%", perspective: "1200px" }}
    >
      {/* Cinematic video bed */}
      <div ref={videoRef} className="absolute inset-0 -z-20" style={{ transform: "scale(1.15)" }}>
        <video
          src="/hero-video.mp4"
          poster={heroBg}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-70"
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
        <div
          className="absolute left-[8%] top-[20%] h-40 w-40 rounded-full opacity-40 blur-3xl"
          style={{
            background: "var(--gradient-brand)",
            animation: "float 9s ease-in-out infinite",
          }}
        />
        <div
          className="absolute right-[10%] top-[55%] h-56 w-56 rounded-full opacity-30 blur-3xl"
          style={{
            background: "linear-gradient(120deg, var(--cyan), transparent)",
            animation: "float 12s ease-in-out infinite reverse",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Eyebrow */}
        <div
          ref={eyebrowRef}
          className="mx-auto flex w-fit max-w-full items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur sm:gap-3 sm:px-4 sm:text-xs sm:tracking-[0.25em]"
          style={{ opacity: 0 }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
          A studio of three god-tier products
        </div>

        {/* Kinetic headline */}
        <h1
          ref={headlineRef}
          className="mt-6 text-center font-display tracking-tight sm:mt-8"
          style={{ perspective: "800px" }}
        >
          <span className="block text-[clamp(2.5rem,11vw,9.5rem)] leading-[0.95]">
            {HEADLINE_L1.map((w, wi) => (
              <span key={wi} className="mr-[0.2em] inline-block overflow-hidden align-bottom">
                <span className="hero-word inline-block text-gradient" style={{ opacity: 0 }}>
                  {w}
                </span>
              </span>
            ))}
          </span>
          <span className="mt-1 block text-[clamp(2.5rem,11vw,9.5rem)] leading-[0.95] sm:mt-2">
            <span className="inline-block overflow-hidden align-bottom">
              <span
                className="hero-word inline-block text-brand-gradient italic"
                style={{ opacity: 0, backgroundSize: "200% 100%" }}
              >
                {HEADLINE_L2}
              </span>
            </span>
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mt-6 max-w-2xl px-2 text-center text-sm text-muted-foreground sm:mt-8 sm:text-base md:text-lg"
          style={{ opacity: 0 }}
        >
          We build cinematic AI products that replace the generic web — from adaptive learning
          engines to autonomous video studios and reality-grade site generators.
        </p>

        <div
          ref={ctaRef}
          className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center"
        >
          <a
            ref={magneticBtn1}
            href="#products"
            className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium sm:px-7 sm:py-3.5"
            style={{ opacity: 0 }}
          >
            Explore the work
          </a>
          <a
            ref={magneticBtn2}
            href="#contact"
            className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium sm:px-7 sm:py-3.5"
            style={{ opacity: 0 }}
          >
            Partner with us
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Stat strip */}
        <dl
          ref={statsRef}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border ring-grad sm:mt-24 sm:grid-cols-3"
        >
          {[
            { k: "14k+", v: "Active learners" },
            { k: "60s", v: "Idea → cinematic site" },
            { k: "98%", v: "Target success rate" },
          ].map((s) => (
            <div
              key={s.v}
              className="bg-card/70 px-5 py-5 text-left backdrop-blur-md sm:px-6 sm:py-7"
              style={{ opacity: 0 }}
            >
              <dt className="stat-value font-display text-3xl text-brand-gradient sm:text-4xl">
                {s.k}
              </dt>
              <dd className="mt-1.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:mt-2 sm:text-[11px]">
                {s.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border/80">
          <div
            className="mt-1.5 h-2 w-0.5 rounded-full bg-foreground/70"
            style={{ animation: "float 1.6s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
