const items = [
  "AI Personalization",
  "WebGL Reality Engines",
  "Cinematic Scrollytelling",
  "Google VEO Pipelines",
  "Real-time Adaptive Curriculum",
  "Multi-modal Orchestration",
  "Onyx & Frost Design System",
];

export function Marquee() {
  return (
    <section className="relative border-y border-border/60 bg-background/40 py-6">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max gap-12 whitespace-nowrap [animation:marquee_45s_linear_infinite]">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="font-display text-2xl text-muted-foreground/60 md:text-3xl">
              {t} <span className="mx-6 text-violet">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
