import { useEffect, useRef, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

const featuredProducts = products.filter((p) =>
  ["learn", "reel-studio", "sites", "copy-checker", "crm"].includes(p.slug)
);

export function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Horizontal scroll pin
  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      // Header reveal
      const headerWords = headerRef.current?.querySelectorAll(".header-word");
      if (headerWords) {
        gsap.fromTo(
          headerWords,
          { opacity: 0, y: 50, rotateX: 30 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.06,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Pin + horizontal scroll
      const totalScroll = track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Per-card animations
      const cards = track.querySelectorAll(".product-card");
      cards.forEach((card) => {
        // Image clip-path reveal
        const img = card.querySelector(".card-image");
        if (img) {
          gsap.fromTo(
            img,
            { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 1.2,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: card,
                start: "left 80%",
                end: "left 30%",
                scrub: 1,
                containerAnimation: gsap.getById?.("hscroll") || undefined,
              },
            },
          );
        }

        // Text stagger
        const texts = card.querySelectorAll(".card-text-reveal");
        gsap.fromTo(
          texts,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "left 70%",
              toggleActions: "play none none none",
              containerAnimation: gsap.getById?.("hscroll") || undefined,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="relative overflow-hidden">
      {/* Section header — visible before pin */}
      <div ref={headerRef} className="relative z-10 pb-12 pt-24 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl" style={{ perspective: "600px" }}>
              <p
                className="header-word text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs"
                style={{ opacity: 0 }}
              >
                Selected Work
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:mt-4 sm:text-5xl md:text-6xl">
                {"A massive ".split(" ").map((w, i) => (
                  <span
                    key={i}
                    className="header-word mr-[0.2em] inline-block"
                    style={{ opacity: 0 }}
                  >
                    {w}
                  </span>
                ))}
                <span className="text-brand-gradient italic">
                  {"One ecosystem.".split(" ").map((w, i) => (
                    <span
                      key={`b${i}`}
                      className="header-word mr-[0.2em] inline-block"
                      style={{ opacity: 0 }}
                    >
                      {w}
                    </span>
                  ))}
                </span>
              </h2>
            </div>
            <p
              className="header-word max-w-sm text-sm text-muted-foreground"
              style={{ opacity: 0 }}
            >
              Each Dextora product is engineered with the same north star: replace the generic with
              the cinematic, and make state-of-the-art feel inevitable.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div ref={trackRef} className="flex h-screen items-center gap-8 pl-[5vw] pr-[30vw]">
        {featuredProducts.map((p, i) => (
          <ProductCard key={p.slug} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product: p, index: i }: { product: (typeof products)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt on hover
  const onMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotateY: x * 12,
      rotateX: y * -12,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  const onLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    });
  }, []);

  return (
    <article
      ref={cardRef}
      className="product-card flex-shrink-0"
      style={{ perspective: "1200px", width: "clamp(320px, 70vw, 900px)" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        className="ring-grad relative overflow-hidden rounded-3xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glow */}
        <div
          className="absolute -inset-16 -z-10 opacity-60 blur-3xl"
          style={{ background: p.accent }}
        />

        {/* Image */}
        <div className="card-image relative flex aspect-[16/10] items-center justify-center overflow-hidden">
          {p.image ? (
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.04]"
            />
          ) : (
            <div className="absolute inset-0 h-full w-full" style={{ background: p.accent }} />
          )}
          {/* Cinematic vignette */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_55%,oklch(0.05_0.01_260/0.7))]" />
          {/* Meta chip */}
          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur">
            {p.meta}
          </div>
          {/* Index */}
          <div className="absolute bottom-5 right-6 font-display text-5xl text-white/90 mix-blend-overlay md:text-7xl">
            {p.index}
          </div>
        </div>

        {/* Text overlay */}
        <div className="p-6 sm:p-8">
          <div className="card-text-reveal flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <span>
              {p.index} — {p.category}
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <h3 className="card-text-reveal mt-4 font-display text-2xl tracking-tight sm:text-3xl md:text-4xl">
            {p.name}
          </h3>
          <p className="card-text-reveal mt-2 text-sm text-foreground/90 sm:text-base">
            {p.tagline}
          </p>
          <p className="card-text-reveal mt-3 text-sm leading-relaxed text-muted-foreground">
            {p.description}
          </p>

          <ul className="card-text-reveal mt-5 grid grid-cols-2 gap-2 text-sm">
            {p.bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-muted-foreground">
                <span
                  className="h-1 w-1 rounded-full"
                  style={{ background: "var(--gradient-brand)" }}
                />
                {b}
              </li>
            ))}
          </ul>

          <Link
            to="/products/$slug"
            params={{ slug: p.slug }}
            className="card-text-reveal group/link mt-6 inline-flex items-center gap-2 text-sm text-foreground"
          >
            <span className="relative">
              View product details
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-100 bg-foreground transition-transform duration-500 group-hover/link:scale-x-0" />
            </span>
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover/link:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
