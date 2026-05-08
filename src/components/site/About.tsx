export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Studio</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight md:text-6xl">
          We are building the <span className="text-brand-gradient">Apple of AI products</span>
          <span className="text-gradient"> — clinical, premium, and unmistakably ours.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Dextora is a small team of engineers, designers and AI researchers obsessed with
          replacing the cluttered, playful aesthetic of modern software with something quieter,
          sharper and more intentional.
        </p>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[
            ["3", "Flagship products"],
            ["14k+", "Users served"],
            ["60s", "Time to magic"],
            ["100%", "In-house build"],
          ].map(([k, v]) => (
            <div key={v} className="bg-card/70 p-6">
              <div className="font-display text-3xl text-brand-gradient">{k}</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
