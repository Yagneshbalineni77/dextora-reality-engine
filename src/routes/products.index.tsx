import { useEffect, useRef, useCallback } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { products, categories } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/products/")({
  component: ProductsIndex,
  head: () => ({
    meta: [
      { title: "Products — Dextora" },
      {
        name: "description",
        content:
          "The full Dextora portfolio: flagship AI products, enterprise tools, government-grade systems and open-source utilities.",
      },
      { property: "og:title", content: "Products — Dextora" },
      { property: "og:description", content: "Eleven products. One obsession with the cinematic." },
    ],
  }),
});

function ProductsIndex() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text reveal
      const els = heroRef.current?.querySelectorAll(".hero-reveal");
      if (els) {
        gsap.fromTo(
          els,
          { opacity: 0, y: 50, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
            delay: 0.2,
          },
        );
      }

      // Category sections stagger
      const sections = document.querySelectorAll(".cat-section");
      sections.forEach((sec) => {
        const heading = sec.querySelector(".cat-heading");
        const cards = sec.querySelectorAll(".product-grid-card");

        if (heading) {
          gsap.fromTo(
            heading,
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          );
        }

        if (cards.length) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 60, scale: 0.92 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section ref={heroRef} className="relative pb-16 pt-32 sm:pb-24 sm:pt-40">
        {/* Atmospheric glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[50vh] opacity-40 blur-3xl"
          style={{ background: "var(--gradient-brand)" }}
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <p
            className="hero-reveal text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs"
            style={{ opacity: 0 }}
          >
            The Portfolio
          </p>
          <h1
            className="hero-reveal mt-3 font-display text-5xl tracking-tight sm:text-6xl md:text-7xl"
            style={{ opacity: 0 }}
          >
            Every product we ship, in <span className="text-brand-gradient italic">one place.</span>
          </h1>
          <p
            className="hero-reveal mt-5 max-w-2xl text-sm text-muted-foreground sm:text-base"
            style={{ opacity: 0 }}
          >
            From flagship SaaS to government systems and self-hostable open-source — engineered with
            the same north star: replace the generic with the cinematic.
          </p>
        </div>
      </section>

      {/* Category sections */}
      {categories.map((cat) => {
        const items = products.filter((p) => p.category === cat);
        if (!items.length) return null;
        return (
          <section key={cat} className="cat-section pb-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-6">
              <div
                className="cat-heading mb-8 flex items-end justify-between"
                style={{ opacity: 0 }}
              >
                <h2 className="font-display text-2xl tracking-tight sm:text-3xl">{cat}</h2>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {items.length} {items.length === 1 ? "product" : "products"}
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <ProductGridCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <Footer />
    </main>
  );
}

function ProductGridCard({ product: p }: { product: (typeof products)[0] }) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  // 3D tilt on hover
  const onMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotateY: x * 15,
      rotateX: y * -15,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
    });
    // Glow follows cursor
    card.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
    card.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
  }, []);

  const onLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  return (
    <Link
      ref={cardRef}
      to="/products/$slug"
      params={{ slug: p.slug }}
      className="product-grid-card group relative block overflow-hidden rounded-2xl border border-border bg-card/60 transition-shadow duration-500 hover:shadow-[0_30px_60px_-20px_oklch(0.62_0.22_295/0.3)]"
      style={{
        opacity: 0,
        perspective: "1000px",
        transformStyle: "preserve-3d",
        ["--glow-x" as string]: "50%",
        ["--glow-y" as string]: "50%",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Cursor-tracking glow */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(300px circle at var(--glow-x) var(--glow-y), oklch(0.62 0.22 295 / 0.12), transparent 60%)",
        }}
      />

      {/* Accent glow */}
      <div
        aria-hidden
        className="absolute -inset-12 -z-10 opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
        style={{ background: p.accent }}
      />

      {/* Image or gradient */}
      {p.image ? (
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ background: p.accent }} />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.05_0.01_260/0.9))]" />
          <img
            src={p.image}
            alt={p.name}
            className="relative z-10 h-[75%] w-auto rounded-lg object-contain shadow-2xl transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>
      ) : (
        <div className="relative aspect-[16/10] overflow-hidden" style={{ background: p.accent }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-7xl text-white/20">{p.index}</span>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-baseline justify-between">
          <span className="font-display text-3xl text-muted-foreground/50">{p.index}</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {p.meta}
          </span>
        </div>
        <h3 className="mt-3 font-display text-xl tracking-tight sm:text-2xl">{p.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.tagline}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm text-foreground">
          Explore{" "}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
