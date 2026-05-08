import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-24 pt-40 md:pt-48 noise">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-60" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-aurora)" }} />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="mx-auto inline-flex animate-[fade-in_1s_ease-out] items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          A studio of three god-tier products
        </div>

        <h1 className="mt-6 animate-[fade-up_0.9s_cubic-bezier(0.22,1,0.36,1)_both] font-display text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
          <span className="text-gradient">Engineering the</span>
          <br />
          <span className="text-brand-gradient">interactive future.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-[fade-up_1.1s_cubic-bezier(0.22,1,0.36,1)_both] text-base text-muted-foreground md:text-lg">
          We build cinematic AI products that replace the generic web — from adaptive learning engines
          to autonomous video studios and reality-grade site generators.
        </p>

        <div className="mt-10 flex animate-[fade-up_1.3s_cubic-bezier(0.22,1,0.36,1)_both] items-center justify-center gap-3">
          <a href="#products" className="btn-primary inline-flex items-center rounded-full px-6 py-3 text-sm font-medium">
            Explore our work
          </a>
          <a href="#contact" className="btn-ghost inline-flex items-center rounded-full px-6 py-3 text-sm font-medium">
            Partner with us →
          </a>
        </div>

        <dl className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {[
            { k: "14k+", v: "Active learners" },
            { k: "60s", v: "Idea → cinematic site" },
            { k: "98%", v: "Target success rate" },
          ].map((s) => (
            <div key={s.v} className="bg-card/80 px-6 py-6 text-left backdrop-blur">
              <dt className="font-display text-3xl text-brand-gradient">{s.k}</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
