import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { products, categories, type ProductCategory } from "@/data/products";

export function ProductsAccordion() {
  const [active, setActive] = useState<ProductCategory | "All">("All");
  const [open, setOpen] = useState<string | null>(products[0].slug);

  const visible = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">The Portfolio</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:mt-4 sm:text-5xl md:text-6xl">
              Eleven products. <span className="text-brand-gradient italic">One obsession.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Flagship SaaS, enterprise tools, government-grade systems and open-source utilities — all
            engineered with the same north star.
          </p>
        </div>

        {/* Category toggle */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {(["All", ...categories] as const).map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.2em] transition-all ${
                  isActive
                    ? "border-transparent text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
                style={isActive ? { background: "var(--gradient-brand)" } : undefined}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Apple-style accordion */}
        <div className="overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-sm">
          {visible.map((p, i) => {
            const isOpen = open === p.slug;
            return (
              <div key={p.slug} className={`group relative ${i > 0 ? "border-t border-border" : ""}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : p.slug)}
                  className="flex w-full items-center gap-5 px-5 py-5 text-left transition-colors hover:bg-white/[0.02] sm:px-8 sm:py-7"
                  aria-expanded={isOpen}
                >
                  <span className="hidden font-display text-2xl text-muted-foreground sm:block sm:text-3xl">
                    {p.index}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-display text-2xl tracking-tight sm:text-3xl md:text-4xl">{p.name}</h3>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        {p.category}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">{p.tagline}</p>
                  </div>
                  <span
                    aria-hidden
                    className={`shrink-0 text-2xl text-muted-foreground transition-transform duration-500 ${
                      isOpen ? "rotate-45 text-foreground" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 px-5 pb-8 sm:grid-cols-12 sm:gap-10 sm:px-8 sm:pb-10">
                      {/* Visual */}
                      <div className="sm:col-span-7">
                        <div className="ring-grad relative aspect-[16/10] overflow-hidden rounded-2xl">
                          <div className="absolute inset-0" style={{ background: p.accent, opacity: 0.55 }} />
                          {p.image ? (
                            <img
                              src={p.image}
                              alt={p.name}
                              loading="lazy"
                              className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
                            />
                          ) : (
                            <div className="absolute inset-0 grid-bg opacity-40" />
                          )}
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_55%,oklch(0.05_0.01_260/0.7))]" />
                          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur">
                            {p.meta}
                          </div>
                          <div className="absolute bottom-5 right-6 font-display text-5xl text-white/90 mix-blend-overlay md:text-7xl">
                            {p.index}
                          </div>
                        </div>
                      </div>

                      {/* Copy */}
                      <div className="sm:col-span-5">
                        <p className="text-base text-foreground/90 sm:text-lg">{p.tagline}</p>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                        <ul className="mt-6 grid grid-cols-2 gap-2.5 text-sm">
                          {p.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2 text-muted-foreground">
                              <span className="h-1 w-1 rounded-full" style={{ background: "var(--gradient-brand)" }} />
                              {b}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-7 flex flex-wrap items-center gap-4">
                          <Link
                            to="/products/$slug"
                            params={{ slug: p.slug }}
                            className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
                          >
                            View product
                            <span aria-hidden>→</span>
                          </Link>
                          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                            Talk to the team
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">
            See the full portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
