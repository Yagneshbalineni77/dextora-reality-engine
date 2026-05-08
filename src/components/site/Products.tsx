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
  accent: string;
};

const products: Product[] = [
  {
    index: "01",
    name: "Dextora Education",
    tagline: "India's most advanced AI-powered learning engine.",
    description:
      "Replacing static video lectures with a real-time adaptive curriculum. An immersive reality engine for K-12 and higher education, scaled to thousands of students with a 98% mastery target.",
    bullets: ["Adaptive AI tutor", "Reality engine canvas", "Parent + Educator portals", "14,000+ learners"],
    image: edu,
    accent: "from-cyan to-violet",
  },
  {
    index: "02",
    name: "Dextora Reel Studio",
    tagline: "Cinematic short-form video — generated from a single prompt.",
    description:
      "A production-grade SaaS that turns text into scroll-stopping reels in seconds. Built for marketers, brands and creators who need scale without sacrificing cinematic quality.",
    bullets: ["Prompt → Reel in seconds", "Brand-ready outputs", "Studio-tier dark UI", "Algorithm-optimized formats"],
    image: reels,
    accent: "from-violet to-cyan",
  },
  {
    index: "03",
    name: "Dextora Reality Engine",
    tagline: "Awwwards-grade websites — orchestrated in 60 seconds.",
    description:
      "A multi-modal pipeline that fuses LLM creative direction, Google VEO video, WebGL fluid shaders and GSAP scrollytelling into investor-grade interactive experiences.",
    bullets: ["AI Creative Director", "Native VEO video", "WebGL fluid physics", "Audio-reactive UI"],
    image: web,
    accent: "from-violet to-cyan",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-20 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Selected Work</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-6xl">
            Three products. <span className="text-brand-gradient">One obsession.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Each Dextora product is engineered with the same north star: replace the generic with the
            cinematic, and make state-of-the-art feel inevitable.
          </p>
        </div>

        <div className="space-y-28">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="group grid items-center gap-10 md:grid-cols-12"
            >
              <div className={`relative md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <div className="ring-grad relative overflow-hidden rounded-3xl">
                  <div
                    className="absolute -inset-10 -z-10 blur-3xl opacity-50"
                    style={{ background: "var(--gradient-brand)" }}
                  />
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1280}
                    height={896}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
                </div>
              </div>

              <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : ""}`}>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  <span className="font-display text-2xl text-brand-gradient">{p.index}</span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <h3 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">{p.name}</h3>
                <p className="mt-3 text-lg text-foreground/90">{p.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-cyan" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-violet"
                >
                  View case study
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
