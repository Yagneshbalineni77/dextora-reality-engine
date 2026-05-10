import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { productsBySlug, products } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
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
        ...(p.image ? [{ property: "og:image", content: p.image }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <main className="grid min-h-screen place-items-center bg-background px-5 text-center">
      <div>
        <h1 className="font-display text-5xl">Product not found</h1>
        <Link to="/products" className="mt-6 inline-block text-sm text-muted-foreground hover:text-foreground">
          ← Back to all products
        </Link>
      </div>
    </main>
  ),
  errorComponent: ({ error }) => (
    <main className="grid min-h-screen place-items-center bg-background px-5 text-center">
      <p className="text-sm text-muted-foreground">{error.message}</p>
    </main>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const idx = products.findIndex((x) => x.slug === p.slug);
  const next = products[(idx + 1) % products.length];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] opacity-50 blur-3xl"
          style={{ background: p.accent }}
        />
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <Link to="/products" className="hover:text-foreground">Products</Link>
            <span>/</span>
            <span>{p.category}</span>
          </div>
          <h1 className="mt-6 font-display text-5xl tracking-tight sm:text-6xl md:text-7xl">{p.name}</h1>
          <p className="mt-5 max-w-2xl text-base text-foreground/90 sm:text-lg md:text-xl">{p.tagline}</p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">{p.description}</p>
        </div>
      </section>

      {/* Visual */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="ring-grad relative aspect-[16/9] overflow-hidden rounded-3xl">
            <div className="absolute inset-0" style={{ background: p.accent, opacity: 0.6 }} />
            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_55%,oklch(0.05_0.01_260/0.75))]" />
            <div className="absolute bottom-6 right-8 font-display text-7xl text-white/90 mix-blend-overlay md:text-9xl">
              {p.index}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Capabilities</p>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {p.bullets.map((b: string) => (
              <div key={b} className="bg-card/70 p-6">
                <div className="h-1 w-6 rounded-full" style={{ background: "var(--gradient-brand)" }} />
                <p className="mt-4 text-sm font-medium">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + next */}
      <section className="pb-32">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Want this for your team?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">A 30-minute call is usually enough to see the fit.</p>
            <Link to="/" hash="contact" className="btn-primary mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium">
              Book a demo <span aria-hidden>→</span>
            </Link>
          </div>
          <Link
            to="/products/$slug"
            params={{ slug: next.slug }}
            className="group flex items-center gap-3 rounded-full border border-border px-5 py-3 text-sm hover:bg-white/[0.03]"
          >
            <span className="text-muted-foreground">Next</span>
            <span className="font-medium">{next.name}</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
