import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  ["3", "Flagship products"],
  ["14k+", "Users served"],
  ["60s", "Time to magic"],
  ["100%", "In-house build"],
] as const;

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word-by-word headline reveal on scroll
      const words = headlineRef.current?.querySelectorAll(".about-word");
      if (words) {
        gsap.fromTo(
          words,
          { opacity: 0.15 },
          {
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 75%",
              end: "bottom 60%",
              scrub: 1,
            },
          },
        );
      }

      // Subtitle
      const subtitle = sectionRef.current?.querySelector(".about-subtitle");
      if (subtitle) {
        gsap.fromTo(
          subtitle,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: subtitle,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Stats count up + reveal
      const statEls = statsRef.current?.children;
      if (statEls) {
        gsap.fromTo(
          statEls,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Stat value count-up
      const valEls = statsRef.current?.querySelectorAll(".stat-val");
      valEls?.forEach((el) => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split headline into words
  const headline1 = "We are building the";
  const headline2 = "Apple of AI products";
  const headline3 = "— clinical, premium, and unmistakably ours.";

  return (
    <section id="about" ref={sectionRef} className="relative py-24 sm:py-32">
      {/* Background aurora shift */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(800px circle at 30% 50%, oklch(0.62 0.22 295 / 0.2), transparent 60%), radial-gradient(600px circle at 70% 70%, oklch(0.78 0.12 200 / 0.15), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
          The Studio
        </p>
        <h2
          ref={headlineRef}
          className="mx-auto mt-3 max-w-3xl font-display text-3xl leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-6xl"
        >
          {headline1.split(" ").map((w, i) => (
            <span
              key={`a${i}`}
              className="about-word mr-[0.2em] inline-block"
              style={{ opacity: 0.15 }}
            >
              {w}
            </span>
          ))}{" "}
          {headline2.split(" ").map((w, i) => (
            <span
              key={`b${i}`}
              className="about-word text-brand-gradient mr-[0.2em] inline-block"
              style={{ opacity: 0.15 }}
            >
              {w}
            </span>
          ))}
          <br />
          {headline3.split(" ").map((w, i) => (
            <span
              key={`c${i}`}
              className="about-word text-gradient mr-[0.15em] inline-block"
              style={{ opacity: 0.15 }}
            >
              {w}
            </span>
          ))}
        </h2>
        <p
          className="about-subtitle mx-auto mt-5 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-base"
          style={{ opacity: 0 }}
        >
          Dextora is a small team of engineers, designers and AI researchers obsessed with replacing
          the cluttered, playful aesthetic of modern software with something quieter, sharper and
          more intentional.
        </p>

        <div
          ref={statsRef}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-16 md:grid-cols-4"
        >
          {STATS.map(([k, v]) => (
            <div key={v} className="bg-card/70 p-5 sm:p-6" style={{ opacity: 0 }}>
              <div className="stat-val font-display text-2xl text-brand-gradient sm:text-3xl">
                {k}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-[11px]">
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
