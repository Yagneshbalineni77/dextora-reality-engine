import heroVideo from "@/assets/hero-video.mp4.asset.json";

export function Showreel() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Showreel · 2026</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
              The studio, in <span className="text-brand-gradient italic">motion.</span>
            </h2>
          </div>
          <span className="hidden text-xs uppercase tracking-[0.3em] text-muted-foreground md:inline">
            Loop · 00:10
          </span>
        </div>

        <div className="ring-grad relative overflow-hidden rounded-[2rem]">
          <div className="absolute -inset-20 -z-10 opacity-60 blur-3xl" style={{ background: "var(--gradient-brand)" }} />
          <video
            src={heroVideo.url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="aspect-[21/9] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_50%,transparent_55%,oklch(0.05_0.01_260/0.65))]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

          {/* Corner markers */}
          {["tl","tr","bl","br"].map((p) => (
            <span
              key={p}
              aria-hidden
              className={`absolute h-5 w-5 border-foreground/60
                ${p==="tl"?"left-4 top-4 border-l border-t":""}
                ${p==="tr"?"right-4 top-4 border-r border-t":""}
                ${p==="bl"?"left-4 bottom-4 border-b border-l":""}
                ${p==="br"?"right-4 bottom-4 border-b border-r":""}
              `}
            />
          ))}

          <div className="absolute left-6 top-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/80">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
            REC · DEXTORA STUDIOS
          </div>
        </div>
      </div>
    </section>
  );
}
