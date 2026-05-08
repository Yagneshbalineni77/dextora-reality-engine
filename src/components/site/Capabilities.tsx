const items = [
  {
    t: "AI Engineering",
    d: "LLM orchestration, retrieval pipelines, adaptive personalization, evaluation harnesses.",
  },
  {
    t: "Generative Media",
    d: "Text-to-video pipelines (Google VEO), cinematic prompt design, brand-conditioned outputs.",
  },
  {
    t: "Interactive 3D",
    d: "Three.js, WebGL fluid shaders, GSAP scrollytelling, audio-reactive UI.",
  },
  {
    t: "Product Design",
    d: "Onyx & Frost system. Premium dark aesthetics. Apple-tier motion and typography.",
  },
  {
    t: "Frontend Architecture",
    d: "React, Vite, TanStack, edge SSR. Zero-jank performance budgets.",
  },
  {
    t: "Scale & Reliability",
    d: "Multi-tenant infra, RLS, observability — from prototype to thousands of users.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
              Capabilities
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:mt-4 sm:text-4xl md:text-5xl">
              A vertically integrated <span className="text-brand-gradient">creative-tech</span>{" "}
              studio.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground sm:mt-5 sm:text-base">
              We design, engineer and ship — from the AI core to the last pixel. No handoffs. No
              compromises. Just products that feel inevitable.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 md:col-span-7">
            {items.map((it) => (
              <div
                key={it.t}
                className="bg-card/70 p-5 backdrop-blur transition-colors hover:bg-card sm:p-6"
              >
                <h3 className="font-display text-lg sm:text-xl">{it.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
