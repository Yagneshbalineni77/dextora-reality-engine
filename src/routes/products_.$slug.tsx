import { useEffect, useRef, useCallback } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { productsBySlug, products } from "@/data/products";
import type { Feature } from "@/data/products";
import { useMagnetic } from "@/hooks/useMagnetic";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/products_/$slug")({
  loader: ({ params }) => {
    const product = productsBySlug[params.slug];
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.name} — Dextora` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.name} — Dextora` },
        { property: "og:description", content: p.tagline },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="grid min-h-screen place-items-center bg-background px-5 text-center">
      <div>
        <h1 className="font-display text-5xl">Product not found</h1>
        <Link
          to="/products"
          className="mt-6 inline-block text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to all products
        </Link>
      </div>
    </main>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const idx = products.findIndex((x) => x.slug === p.slug);
  const next = products[(idx + 1) % products.length];
  const prev = products[(idx - 1 + products.length) % products.length];

  const heroRef = useRef<HTMLElement>(null);
  const magneticBtn = useMagnetic<HTMLAnchorElement>(0.25);

  // ── Hero entrance ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      // Big index number
      tl.fromTo(
        ".pdp-index",
        { opacity: 0, scale: 0.8, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power4.out" },
      );

      // Breadcrumb + title + tagline
      tl.fromTo(
        ".pdp-hero-reveal",
        { opacity: 0, y: 50, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.08, ease: "power4.out" },
        "-=0.6",
      );

      // Visual section parallax
      const visual = document.querySelector(".pdp-visual");
      if (visual) {
        gsap.fromTo(
          visual,
          { clipPath: "inset(15% 15% 15% 15% round 24px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            ease: "power3.out",
            scrollTrigger: { trigger: visual, start: "top 80%", end: "top 30%", scrub: 1 },
          },
        );
      }

      // Feature cards
      gsap.fromTo(
        ".feat-card",
        { opacity: 0, y: 60, rotateX: 15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".feat-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      // Process steps — sticky stagger
      gsap.fromTo(
        ".process-step",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );

      // Tech stack pills
      gsap.fromTo(
        ".tech-pill",
        { opacity: 0, scale: 0.7, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".tech-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // Stats count up
      const statEls = document.querySelectorAll(".pdp-stat-val");
      statEls.forEach((el) => {
        const text = el.textContent || "";
        const match = text.match(/^([\d.]+)/);
        if (!match) return;
        const target = parseFloat(match[1]);
        const suffix = text.slice(match[1].length);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          onUpdate: () => {
            (el as HTMLElement).textContent = Math.round(obj.val).toString() + suffix;
          },
        });
      });

      // CTA scale in
      gsap.fromTo(
        ".pdp-cta",
        { opacity: 0, y: 40, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pdp-cta",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Gallery scroll
      const galleryWrapper = document.querySelector(".pdp-gallery-wrapper");
      const galleryScroll = document.querySelector(".pdp-gallery-scroll");
      if (galleryWrapper && galleryScroll) {
        gsap.to(galleryScroll, {
          x: () => -(galleryScroll.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: galleryWrapper,
            start: "top top",
            end: () => `+=${galleryScroll.scrollWidth - window.innerWidth}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [p.slug]);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />

      {/* ━━━ HERO ━━━ */}
      <section ref={heroRef} className="relative pb-16 pt-32 sm:pb-24 sm:pt-40">
        {/* Atmospheric glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh] opacity-30 blur-3xl"
          style={{ background: p.accent }}
        />

        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          {/* Breadcrumb */}
          <div
            className="pdp-hero-reveal flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
            style={{ opacity: 0 }}
          >
            <Link to="/products" className="transition-colors hover:text-foreground">
              Products
            </Link>
            <span className="text-foreground/20">/</span>
            <span>{p.category}</span>
          </div>

          {/* Giant index */}
          <div
            className="pdp-index mt-8 font-display text-[12rem] leading-none text-foreground/[0.04] sm:text-[16rem]"
            style={{ opacity: 0 }}
          >
            {p.index}
          </div>

          {/* Title — overlaps the giant number */}
          <h1
            className="pdp-hero-reveal -mt-20 font-display text-5xl tracking-tight sm:-mt-28 sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ opacity: 0 }}
          >
            {p.name}
          </h1>

          <p
            className="pdp-hero-reveal mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl md:text-2xl"
            style={{ opacity: 0 }}
          >
            {p.tagline}
          </p>

          <p
            className="pdp-hero-reveal mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
            style={{ opacity: 0 }}
          >
            {p.description}
          </p>

          <div className="pdp-hero-reveal mt-8 flex flex-wrap gap-3" style={{ opacity: 0 }}>
            <Link
              to="/"
              hash="contact"
              ref={magneticBtn}
              className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
            >
              Book a demo <span aria-hidden>→</span>
            </Link>
            <Link
              to="/products"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
            >
              ← All products
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ VISUAL ━━━ */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div
            className="pdp-visual relative aspect-[21/9] overflow-hidden rounded-3xl ring-grad"
            style={{ clipPath: "inset(15% 15% 15% 15% round 24px)" }}
          >
            <div className="absolute inset-0" style={{ background: p.accent, opacity: 0.7 }} />
            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_55%,oklch(0.05_0.01_260/0.8))]" />
            {/* Floating category chip */}
            <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/40 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur sm:left-8 sm:top-8">
              {p.meta}
            </div>
            {/* Massive index */}
            <div className="absolute bottom-6 right-8 font-display text-8xl text-white/90 mix-blend-overlay sm:bottom-8 sm:right-12 md:text-[10rem]">
              {p.index}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ STATS STRIP ━━━ */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {p.stats.map(([k, v]) => (
              <div key={v} className="bg-card/70 p-6 text-center backdrop-blur sm:p-8">
                <div className="pdp-stat-val font-display text-3xl text-brand-gradient sm:text-4xl">
                  {k}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[11px]">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FEATURES ━━━ */}
      <section className="feat-section pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
            Core Features
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            What makes it <span className="text-brand-gradient italic">different.</span>
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2" style={{ perspective: "1000px" }}>
            {p.features.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} accent={p.accent} />
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ HOW IT WORKS ━━━ */}
      <section className="process-section relative pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Four steps to <span className="text-brand-gradient italic">magic.</span>
          </h2>
          <div className="mt-12 space-y-0">
            {p.process.map((s, i) => (
              <div
                key={s.step}
                className="process-step group grid items-center gap-6 border-b border-border py-8 sm:grid-cols-12 sm:py-12"
                style={{ opacity: 0 }}
              >
                {/* Step number */}
                <div className="sm:col-span-2">
                  <span className="font-display text-5xl text-foreground/10 transition-colors duration-500 group-hover:text-foreground/30 sm:text-6xl">
                    {s.step}
                  </span>
                </div>
                {/* Title */}
                <div className="sm:col-span-3">
                  <h3 className="font-display text-2xl tracking-tight sm:text-3xl">{s.title}</h3>
                </div>
                {/* Description */}
                <div className="sm:col-span-7">
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.desc}
                  </p>
                </div>
                {/* Hover accent line */}
                <div
                  className="absolute left-0 h-full w-1 origin-top scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                  style={{ background: p.accent }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ TECH STACK ━━━ */}
      <section className="tech-section pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
            Built With
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
            The stack behind <span className="text-brand-gradient italic">{p.name}.</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {p.techStack.map((tech) => (
              <span
                key={tech}
                className="tech-pill rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition-all duration-300 hover:border-foreground/30 hover:bg-card"
                style={{ opacity: 0 }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ GALLERY ━━━ */}
      {p.gallery && p.gallery.length > 0 && (
        <section className="pdp-gallery-wrapper relative h-screen bg-background">
          <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
            <div className="mx-auto mb-8 w-full max-w-6xl px-5 sm:px-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
                In Action
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                The interface <span className="text-brand-gradient italic">unveiled.</span>
              </h2>
            </div>

            <div className="pdp-gallery-scroll flex w-max gap-8 px-5 sm:px-6 md:px-12">
              {p.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[16/10] w-[85vw] max-w-5xl overflow-hidden rounded-2xl ring-grad sm:w-[75vw]"
                >
                  <div className="absolute inset-0 bg-card/50" />
                  <img
                    src={img}
                    alt={`${p.name} screenshot ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━━ CTA ━━━ */}
      <section className="pb-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div
            className="pdp-cta ring-grad relative overflow-hidden rounded-3xl p-8 sm:rounded-[2rem] sm:p-12 md:p-16"
            style={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 -z-10"
              style={{ background: p.accent, opacity: 0.15 }}
            />
            <div className="absolute inset-0 -z-10 bg-card/80" />

            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                  Want {p.name} for your team?
                </h2>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                  A 30-minute call is usually enough to see the fit. Let's talk about how this
                  transforms your workflow.
                </p>
                <Link
                  to="/"
                  hash="contact"
                  className="btn-primary mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
                >
                  Book a demo <span aria-hidden>→</span>
                </Link>
              </div>

              {/* Nav to next/prev product */}
              <div className="flex flex-col gap-3 md:items-end">
                <Link
                  to="/products/$slug"
                  params={{ slug: next.slug }}
                  className="group flex items-center gap-3 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:bg-white/[0.03]"
                >
                  <span className="text-muted-foreground">Next</span>
                  <span className="font-medium">{next.name}</span>
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  to="/products/$slug"
                  params={{ slug: prev.slug }}
                  className="group flex items-center gap-3 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:bg-white/[0.03]"
                >
                  <span aria-hidden className="transition-transform group-hover:-translate-x-1">
                    ←
                  </span>
                  <span className="font-medium">{prev.name}</span>
                  <span className="text-muted-foreground">Prev</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ── Feature Card with 3D tilt + cursor glow ── */
function FeatureCard({
  feature: f,
  index: i,
  accent,
}: {
  feature: Feature;
  index: number;
  accent: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(el, { rotateY: x * 12, rotateX: y * -12, duration: 0.4, ease: "power2.out" });
    el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
  }, []);

  return (
    <div
      ref={ref}
      className="feat-card group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 sm:p-8"
      style={{
        opacity: 0,
        transformStyle: "preserve-3d",
        ["--gx" as string]: "50%",
        ["--gy" as string]: "50%",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Cursor glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(250px circle at var(--gx) var(--gy), oklch(0.62 0.22 295 / 0.1), transparent 60%)",
        }}
      />

      <div className="mb-4 text-3xl">{f.icon}</div>
      <h3 className="font-display text-xl tracking-tight sm:text-2xl">{f.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>

      {/* Accent bar */}
      <div className="mt-6 h-0.5 w-12 rounded-full opacity-60" style={{ background: accent }} />
    </div>
  );
}
