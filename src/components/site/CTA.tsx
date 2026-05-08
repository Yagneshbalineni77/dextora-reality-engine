export function CTA() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="ring-grad relative overflow-hidden rounded-[2rem] p-10 md:p-16">
          <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-aurora)" }} />
          <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
          <div className="absolute inset-0 -z-10 bg-card/60" />

          <div className="grid items-end gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Let's build</p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight md:text-5xl">
                Have a product worthy of <span className="text-brand-gradient">cinematic engineering?</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                We partner with a small number of teams each quarter — from pre-seed founders to
                global brands. If you're shipping something ambitious, we'd love to talk.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="mailto:hello@dextora.ai"
                className="btn-primary inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-medium md:w-auto"
              >
                hello@dextora.ai
              </a>
              <a
                href="#products"
                className="btn-ghost inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-medium md:w-auto"
              >
                Review the work →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
