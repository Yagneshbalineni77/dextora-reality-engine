export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">The Studio</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-6xl">
          We are building the <span className="text-brand-gradient">Apple of AI products</span>
          <span className="text-gradient"> — clinical, premium, and unmistakably ours.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-base">
          Dextora is a small team of engineers, designers and AI researchers obsessed with
          replacing the cluttered, playful aesthetic of modern software with something quieter,
          sharper and more intentional.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-16 md:grid-cols-4">
          {[
            ["3", "Flagship products"],
            ["14k+", "Users served"],
            ["60s", "Time to magic"],
            ["100%", "In-house build"],
          ].map(([k, v]) => (
            <div key={v} className="bg-card/70 p-5 sm:p-6">
              <div className="font-display text-2xl text-brand-gradient sm:text-3xl">{k}</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-[11px]">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
