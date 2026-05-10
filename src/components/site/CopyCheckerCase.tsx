import { Link } from "@tanstack/react-router";

export function CopyCheckerCase() {
  return (
    <section id="copy-checker" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
              Case Study · Copy Checker
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
              Months of grading.
              <br />
              <span className="text-brand-gradient italic">Minutes of intelligence.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A theory-exam evaluator built for an institution drowning in answer scripts. We
              replaced a 4-month manual grading cycle with a rubric-aware AI evaluator that reads,
              scores and explains every answer — at the speed of an API call.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {[
                ["12k+", "Papers / day"],
                ["96%", "Examiner agreement"],
                ["~4 min", "Per 100 papers"],
              ].map(([k, v]) => (
                <div key={v} className="bg-card/70 p-4">
                  <div className="font-display text-2xl text-brand-gradient">{k}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {v}
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/case-studies/copy-checker"
              className="btn-primary mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
            >
              Read the full case study
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <Block
                tag="Problem"
                title="Grading was the bottleneck."
                body="A board of examiners spent ~4 months evaluating tens of thousands of theory answer scripts each cycle — inconsistent rubrics, fatigued markers, and a 6-week feedback delay to students."
                tone="muted"
              />
              <Block
                tag="Solution"
                title="A rubric-aware AI evaluator."
                body="Copy Checker ingests scanned scripts, runs handwriting OCR, applies the official rubric, and produces a per-question score with rationale — auditable, examiner-overridable, and explainable."
                tone="brand"
              />
              <Block
                tag="How"
                title="Three-stage pipeline."
                body="Stage 1: OCR + answer-segmentation. Stage 2: rubric-conditioned LLM scoring with citation back to the answer text. Stage 3: human-in-the-loop review desk for edge cases."
                tone="muted"
              />
              <Block
                tag="Outcome"
                title="4 months → 3 days."
                body="The same workload now finishes in under 72 hours. Students get rich per-question feedback — not just a number — and examiners spend their time on the 4% of edge cases that need them."
                tone="brand"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({
  tag,
  title,
  body,
  tone,
}: {
  tag: string;
  title: string;
  body: string;
  tone: "muted" | "brand";
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-6 ${
        tone === "brand" ? "border-transparent ring-grad" : "border-border bg-card/60"
      }`}
      style={
        tone === "brand"
          ? { background: "color-mix(in oklab, var(--card) 80%, transparent)" }
          : undefined
      }
    >
      <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{tag}</p>
      <h3 className="mt-2 font-display text-xl tracking-tight sm:text-2xl">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
