import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    t: "AI Engineering",
    d: "LLM orchestration, retrieval pipelines, adaptive personalization, evaluation harnesses.",
    icon: "⚡",
  },
  {
    t: "Generative Media",
    d: "Text-to-video pipelines (Google VEO), cinematic prompt design, brand-conditioned outputs.",
    icon: "🎬",
  },
  {
    t: "Interactive 3D",
    d: "Three.js, WebGL fluid shaders, GSAP scrollytelling, audio-reactive UI.",
    icon: "🌐",
  },
  {
    t: "Product Design",
    d: "Onyx & Frost system. Premium dark aesthetics. Apple-tier motion and typography.",
    icon: "✦",
  },
  {
    t: "Frontend Architecture",
    d: "React, Vite, TanStack, edge SSR. Zero-jank performance budgets.",
    icon: "⚙",
  },
  {
    t: "Scale & Reliability",
    d: "Multi-tenant infra, RLS, observability — from prototype to thousands of users.",
    icon: "📈",
  },
];

export function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      const headingEls = headingRef.current?.querySelectorAll(".cap-reveal");
      if (headingEls) {
        gsap.fromTo(
          headingEls,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Cards stagger in
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="capabilities" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-12">
          <div ref={headingRef} className="md:col-span-5">
            <p
              className="cap-reveal text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs"
              style={{ opacity: 0 }}
            >
              Capabilities
            </p>
            <h2
              className="cap-reveal mt-3 font-display text-3xl tracking-tight sm:mt-4 sm:text-4xl md:text-5xl"
              style={{ opacity: 0 }}
            >
              A vertically integrated <span className="text-brand-gradient">creative-tech</span>{" "}
              studio.
            </h2>
            <p
              className="cap-reveal mt-4 text-sm text-muted-foreground sm:mt-5 sm:text-base"
              style={{ opacity: 0 }}
            >
              We design, engineer and ship — from the AI core to the last pixel. No handoffs. No
              compromises. Just products that feel inevitable.
            </p>
          </div>
          <div
            ref={gridRef}
            className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 md:col-span-7"
          >
            {items.map((it) => (
              <CapCard key={it.t} item={it} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CapCard({ item: it }: { item: (typeof items)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Hover glow that follows cursor
  const onMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      className="group relative bg-card/70 p-5 backdrop-blur transition-colors hover:bg-card sm:p-6"
      style={{
        opacity: 0,
        ["--glow-x" as string]: "50%",
        ["--glow-y" as string]: "50%",
      }}
    >
      {/* Cursor-following glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(200px circle at var(--glow-x) var(--glow-y), oklch(0.62 0.22 295 / 0.15), transparent 60%)",
        }}
      />

      <div className="mb-3 text-2xl">{it.icon}</div>
      <h3 className="font-display text-lg sm:text-xl">{it.t}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
    </div>
  );
}
