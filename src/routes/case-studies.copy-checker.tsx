import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/case-studies/copy-checker")({
  component: CopyCheckerCaseStudy,
  head: () => ({
    meta: [
      { title: "Copy Checker — From 4 months to 3 days | Dextora Case Study" },
      {
        name: "description",
        content:
          "How Dextora's Copy Checker AI evaluator graded thousands of theory answer scripts in days — work that previously took examiners months.",
      },
      { property: "og:title", content: "Copy Checker — Dextora Case Study" },
      {
        property: "og:description",
        content: "Months of theory-exam grading, compressed into minutes. The full Copy Checker case study.",
      },
    ],
  }),
});

type Sample = {
  question: string;
  maxMarks: number;
  studentAnswer: string;
  rubric: { criterion: string; weight: number; awarded: number; note: string }[];
  total: number;
  feedback: string;
};

const samples: Sample[] = [
  {
    question:
      "Explain the doctrine of basic structure with reference to Kesavananda Bharati v. State of Kerala (1973). (10 marks)",
    maxMarks: 10,
    studentAnswer:
      "The basic structure doctrine was given in the Kesavananda Bharati case in 1973. The Supreme Court said that Parliament can amend the Constitution under Article 368 but it cannot change the basic structure. Things like supremacy of the Constitution, rule of law, judicial review, federalism and separation of powers are part of the basic structure. This protects the Constitution from being destroyed by amendments.",
    rubric: [
      { criterion: "Identifies the case and year", weight: 2, awarded: 2, note: "Correctly cites Kesavananda Bharati (1973)." },
      { criterion: "Explains Article 368 amending power", weight: 2, awarded: 2, note: "Mentions Parliament's power under Art. 368." },
      { criterion: "Defines basic structure with examples", weight: 4, awarded: 3, note: "Lists 5 elements; missed secularism and democracy." },
      { criterion: "Significance / constitutional protection", weight: 2, awarded: 1.5, note: "Touches on protection but lacks depth on judicial review." },
    ],
    total: 8.5,
    feedback:
      "Solid foundational answer. To reach 10/10, expand the basic-structure list (secularism, democracy, free & fair elections) and add a line on the 13-judge bench split (7-6) and how the doctrine has been reinforced in Indira Nehru Gandhi (1975) and Minerva Mills (1980).",
  },
  {
    question:
      "Derive the expression for time period of a simple pendulum. State two assumptions. (8 marks)",
    maxMarks: 8,
    studentAnswer:
      "For a simple pendulum of length L, when displaced by a small angle θ, the restoring force is F = -mg sinθ. For small angles sinθ ≈ θ = x/L. So F = -mgx/L which is SHM. Comparing with F = -kx, k = mg/L. Time period T = 2π√(m/k) = 2π√(L/g). Assumptions: 1) The string is massless and inextensible. 2) Air resistance is neglected.",
    rubric: [
      { criterion: "Free-body & restoring force setup", weight: 2, awarded: 2, note: "Correct restoring-force expression." },
      { criterion: "Small-angle approximation justified", weight: 2, awarded: 1.5, note: "States approximation but does not explain validity." },
      { criterion: "Derivation to T = 2π√(L/g)", weight: 3, awarded: 3, note: "Clean SHM analogy and final form." },
      { criterion: "States two valid assumptions", weight: 1, awarded: 1, note: "Both assumptions valid." },
    ],
    total: 7.5,
    feedback:
      "Excellent derivation. Add one line on why the small-angle approximation holds (θ in radians, error <1% for θ<10°) to secure full marks.",
  },
  {
    question:
      "Discuss the causes and consequences of the Great Depression of 1929. (12 marks)",
    maxMarks: 12,
    studentAnswer:
      "The Great Depression started in 1929 with the Wall Street crash. The main cause was overproduction in the USA and people taking too many loans. Banks failed and unemployment rose. It spread to other countries because of trade. People became poor and there was political instability which led to the rise of Hitler in Germany.",
    rubric: [
      { criterion: "Multiple causes with explanation", weight: 4, awarded: 2, note: "Mentions overproduction & credit but misses gold standard, agricultural collapse, weak banking regulation." },
      { criterion: "Global transmission mechanism", weight: 3, awarded: 2, note: "Brief reference to trade; should explain Smoot-Hawley tariffs and capital flows." },
      { criterion: "Economic & social consequences", weight: 3, awarded: 2, note: "Names unemployment but lacks data and welfare-state response (New Deal)." },
      { criterion: "Political consequences", weight: 2, awarded: 1.5, note: "Notes Nazism; could mention Japanese militarism and shifts in liberal democracies." },
    ],
    total: 7.5,
    feedback:
      "Surface-level coverage. Strengthen with: (a) structural causes — gold standard rigidity and weak Fed response; (b) Smoot-Hawley Tariff Act 1930; (c) consequences — Roosevelt's New Deal, Keynesian shift, rise of authoritarian regimes globally. Aim for 10–11/12.",
  },
];

function CopyCheckerCaseStudy() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] opacity-40 blur-3xl"
          style={{ background: "linear-gradient(135deg, oklch(0.68 0.18 150), oklch(0.62 0.22 295))" }}
        />
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Dextora</Link>
            <span>/</span>
            <span>Case Studies</span>
            <span>/</span>
            <span>Copy Checker</span>
          </div>
          <h1 className="mt-6 font-display text-5xl tracking-tight sm:text-6xl md:text-7xl">
            From <span className="text-brand-gradient italic">4 months</span><br />
            to 3 days.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-foreground/90 sm:text-lg">
            How an Indian institution replaced a 4-month manual grading cycle with a rubric-aware AI
            evaluator that reads, scores and explains every theory-exam answer — at the speed of an API call.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {[
              ["12,400", "Papers graded in pilot"],
              ["96%", "Examiner agreement"],
              ["~4 min", "Per 100 papers"],
              ["72 hrs", "Pilot turnaround"],
            ].map(([k, v]) => (
              <div key={v} className="bg-card/70 p-5">
                <div className="font-display text-2xl text-brand-gradient">{k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Problem Statement</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Grading was the bottleneck of the entire academic year.
          </h2>
          <div className="mt-6 grid gap-6 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2 sm:text-base">
            <p>
              The institution administered theory exams to tens of thousands of students each cycle.
              Answer scripts were physically distributed to a panel of examiners who manually graded
              each script against a printed rubric. The cycle ran for nearly four months.
            </p>
            <p>
              The cost wasn't only time. Examiner fatigue caused inconsistent scoring across batches.
              Students received a number with no per-question feedback. By the time results were out,
              learning gaps had already compounded into the next semester.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {[
              "~4 months end-to-end per cycle",
              "Inconsistent rubric application across markers",
              "Zero per-question feedback to students",
              "6-week delay before remediation could begin",
            ].map((x) => (
              <li key={x} className="flex items-start gap-2 rounded-xl border border-border bg-card/60 p-4">
                <span className="mt-1.5 h-1 w-3 shrink-0 rounded-full" style={{ background: "var(--destructive)" }} />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Our Solution</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            A rubric-aware AI evaluator with a human-in-the-loop desk.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Copy Checker ingests scanned answer scripts, segments answers per question, runs handwriting
            OCR, applies the official rubric question-by-question, and emits a per-criterion score with
            cited rationale — fully auditable and examiner-overridable.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {[
              ["01 — Ingest & OCR", "Scanned scripts segmented per-question. Handwriting OCR with confidence scores."],
              ["02 — Rubric scoring", "LLM scores each criterion in the official rubric and cites the answer text."],
              ["03 — Review desk", "Examiners only review low-confidence answers. Overrides flow back as training signal."],
            ].map(([t, b]) => (
              <div key={t} className="bg-card/70 p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{t}</p>
                <p className="mt-3 text-sm">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Samples */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Sample Evaluations</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            What every script gets back.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Three real (anonymised) examples — Civics, Physics and History — graded by Copy Checker.
          </p>

          <div className="mt-10 space-y-8">
            {samples.map((s, i) => (
              <article key={i} className="ring-grad relative overflow-hidden rounded-3xl border border-border bg-card/60">
                <div className="border-b border-border p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      Q{i + 1} · Max {s.maxMarks} marks
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-3xl text-brand-gradient">{s.total}</span>
                      <span className="text-sm text-muted-foreground">/ {s.maxMarks}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-base font-medium sm:text-lg">{s.question}</p>
                </div>

                <div className="grid gap-px bg-border sm:grid-cols-2">
                  <div className="bg-card/80 p-6 sm:p-8">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Student answer</p>
                    <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-foreground/90">
                      {s.studentAnswer}
                    </p>
                  </div>
                  <div className="bg-card/80 p-6 sm:p-8">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Rubric breakdown</p>
                    <ul className="mt-3 space-y-3">
                      {s.rubric.map((r) => (
                        <li key={r.criterion} className="rounded-xl border border-border bg-background/50 p-3">
                          <div className="flex items-baseline justify-between gap-3">
                            <span className="text-sm font-medium">{r.criterion}</span>
                            <span className="text-xs text-muted-foreground">
                              <span className="text-foreground">{r.awarded}</span> / {r.weight}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-muted-foreground">{r.note}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-border p-6 sm:p-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">AI feedback to student</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/90">{s.feedback}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Outcome</p>
          <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            The same workload, finished in <span className="text-brand-gradient italic">under 72 hours.</span>
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              ["Cycle time", "4 months → 3 days", "A 40× compression of the entire grading cycle."],
              ["Examiner load", "100% → ~4%", "Humans only review low-confidence and edge-case answers."],
              ["Student feedback", "Score → Per-question rationale", "Every student gets actionable, rubric-cited feedback."],
            ].map(([t, k, b]) => (
              <div key={t} className="rounded-2xl border border-border bg-card/60 p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{t}</p>
                <p className="mt-3 font-display text-xl text-brand-gradient">{k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32">
        <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-card/60 px-8 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
            Bring Copy Checker to your institution.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Boards, universities, coaching institutes. Pilots take 2 weeks.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/" hash="contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium">
              Book a pilot <span aria-hidden>→</span>
            </Link>
            <Link to="/products/$slug" params={{ slug: "copy-checker" }} className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium">
              View product page
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
