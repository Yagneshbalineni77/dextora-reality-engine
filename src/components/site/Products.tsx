import edu from "@/assets/product-education.jpg";
import reels from "@/assets/product-reels.jpg";
import web from "@/assets/product-web.jpg";

type Product = {
  index: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  image: string;
  meta: string;
};

const products: Product[] = [
  {
    index: "01 — Education",
    name: "Dextora Learn",
    tagline: "India's most advanced AI-powered learning engine.",
    description:
      "We replaced static video lectures with a real-time adaptive curriculum. An immersive reality engine for K-12 and higher education — scaled to thousands, engineered for mastery.",
    bullets: ["Adaptive AI tutor", "Reality engine canvas", "Parent + Educator portals", "14,000+ learners"],
    image: edu,
    meta: "EdTech · AI · 2025",
  },
  {
    index: "02 — Generative Video",
    name: "Dextora Reel Studio",
    tagline: "Cinematic short-form video — generated from a single prompt.",
    description:
      "A production-grade SaaS that turns text into scroll-stopping reels in seconds. Studio-tier dark UI. Brand-ready outputs. Built for marketers and creators who refuse to look generic.",
    bullets: ["Prompt → Reel in seconds", "Brand-conditioned outputs", "Studio-tier dark UI", "Algorithm-tuned formats"],
    image: reels,
    meta: "Generative AI · SaaS · 2025",
  },
  {
    index: "03 — Reality Engine",
    name: "Dextora Sites",
    tagline: "Awwwards-grade websites — orchestrated in 60 seconds.",
    description:
      "A multi-modal pipeline fusing LLM creative direction, Google VEO video, WebGL fluid shaders and GSAP scrollytelling into investor-grade interactive experiences.",
    bullets: ["AI Creative Director", "Native VEO video", "WebGL fluid physics", "Audio-reactive UI"],
    image: web,
    meta: "Web · WebGL · 2025",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Selected Work</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">
              Three products. <span className="text-brand-gradient italic">One obsession.</span>
            </h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            Each Dextora product is engineered with the same north star: replace the generic with the
            cinematic, and make state-of-the-art feel inevitable.
          </p>
        </div>

        <div className="space-y-40">
          {products.map((p, i) => (
            <article key={p.name} className="group grid items-center gap-12 md:grid-cols-12">
              {/* Visual */}
              <div className={`relative md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <div className="ring-grad relative overflow-hidden rounded-3xl">
                  {/* Soft glow */}
                  <div
                    className="absolute -inset-16 -z-10 opacity-60 blur-3xl"
                    style={{ background: "var(--gradient-brand)" }}
                  />
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={1600}
                      height={1216}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    />
                    {/* Cinematic vignette */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_55%,oklch(0.05_0.01_260/0.7))]" />
                    {/* Floating meta chip */}
                    <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur">
                      {p.meta}
                    </div>
                    {/* Index numeral */}
                    <div className="absolute bottom-5 right-6 font-display text-5xl text-white/90 mix-blend-overlay md:text-7xl">
                      {p.index.split(" ")[0]}
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : ""}`}>
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  <span>{p.index}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="mt-5 font-display text-3xl tracking-tight md:text-5xl">{p.name}</h3>
                <p className="mt-4 text-lg text-foreground/90 md:text-xl">{p.tagline}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-7 grid grid-cols-2 gap-2.5 text-sm">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-muted-foreground">
                      <span className="h-1 w-1 rounded-full" style={{ background: "var(--gradient-brand)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="group/link mt-9 inline-flex items-center gap-2 text-sm text-foreground"
                >
                  <span className="relative">
                    View case study
                    <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-100 bg-foreground transition-transform duration-500 group-hover/link:scale-x-0" />
                  </span>
                  <span aria-hidden className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
