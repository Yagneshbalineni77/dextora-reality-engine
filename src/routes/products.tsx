import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { products, categories } from "@/data/products";

export const Route = createFileRoute("/products")({
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
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <section className="pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">The Portfolio</p>
          <h1 className="mt-3 font-display text-5xl tracking-tight sm:text-6xl md:text-7xl">
            Every product we ship, in <span className="text-brand-gradient italic">one place.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-muted-foreground sm:text-base">
            From flagship SaaS to government systems and self-hostable open-source — engineered with
            the same north star: replace the generic with the cinematic.
          </p>
        </div>
      </section>

      {categories.map((cat) => {
        const items = products.filter((p) => p.category === cat);
        if (!items.length) return null;
        return (
          <section key={cat} className="pb-16">
            <div className="mx-auto max-w-7xl px-5 sm:px-6">
              <div className="mb-6 flex items-end justify-between">
                <h2 className="font-display text-2xl tracking-tight sm:text-3xl">{cat}</h2>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {items.length} {items.length === 1 ? "product" : "products"}
                </span>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <Link
                    key={p.slug}
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="group ring-grad relative block overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-transform duration-500 hover:-translate-y-1"
                  >
                    <div
                      aria-hidden
                      className="absolute -inset-12 -z-10 opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                      style={{ background: p.accent }}
                    />
                    <div className="flex items-baseline justify-between">
                      <span className="font-display text-3xl text-muted-foreground">{p.index}</span>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        {p.meta}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl tracking-tight">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm text-foreground">
                      Explore <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
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
