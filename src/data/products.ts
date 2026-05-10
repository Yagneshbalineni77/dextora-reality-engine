import edu from "@/assets/product-education.jpg";
import reels from "@/assets/product-reels.jpg";
import web from "@/assets/product-web.jpg";

export type ProductCategory = "Flagship" | "Government" | "Enterprise" | "Open Source";

export type Product = {
  slug: string;
  index: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  bullets: string[];
  meta: string;
  image?: string;
  accent: string; // gradient css for cards without image
};

export const products: Product[] = [
  // ───────── Flagship ─────────
  {
    slug: "learn",
    index: "01",
    name: "Dextora Learn",
    category: "Flagship",
    tagline: "India's most advanced AI-powered learning engine.",
    description:
      "An adaptive curriculum that replaces static video lectures. A reality-engine canvas for K-12 and higher education — engineered for mastery, scaled to thousands.",
    bullets: ["Adaptive AI tutor", "Reality engine canvas", "Parent + Educator portals", "14,000+ learners"],
    meta: "EdTech · AI · 2025",
    image: edu,
    accent: "linear-gradient(135deg, oklch(0.62 0.22 295), oklch(0.78 0.12 200))",
  },
  {
    slug: "reel-studio",
    index: "02",
    name: "Dextora Reel Studio",
    category: "Flagship",
    tagline: "Cinematic short-form video — generated from a single prompt.",
    description:
      "Production-grade SaaS that turns text into scroll-stopping reels in seconds. Studio-tier dark UI, brand-conditioned outputs, algorithm-tuned formats.",
    bullets: ["Prompt → Reel in seconds", "Brand-conditioned outputs", "Algorithm-tuned formats", "Studio-tier UI"],
    meta: "Generative AI · SaaS · 2025",
    image: reels,
    accent: "linear-gradient(135deg, oklch(0.65 0.2 320), oklch(0.7 0.18 30))",
  },
  {
    slug: "sites",
    index: "03",
    name: "Dextora Sites",
    category: "Flagship",
    tagline: "Awwwards-grade websites — orchestrated in 60 seconds.",
    description:
      "Multi-modal pipeline fusing LLM creative direction, Google VEO video, WebGL fluid shaders and GSAP scrollytelling into investor-grade interactive experiences.",
    bullets: ["AI Creative Director", "Native VEO video", "WebGL fluid physics", "Audio-reactive UI"],
    meta: "Web · WebGL · 2025",
    image: web,
    accent: "linear-gradient(135deg, oklch(0.7 0.15 200), oklch(0.62 0.22 260))",
  },
  {
    slug: "copy-checker",
    index: "04",
    name: "Copy Checker",
    category: "Flagship",
    tagline: "AI evaluator for theory exams — months of grading, done in minutes.",
    description:
      "Trained on examiner rubrics. Evaluates handwritten and typed theory answers with rationale, score, and per-rubric feedback. Built for boards, universities and coaching institutes.",
    bullets: ["Rubric-aware scoring", "Per-question rationale", "Handwriting OCR", "Bulk batch grading"],
    meta: "EdTech · AI Evaluator · 2025",
    accent: "linear-gradient(135deg, oklch(0.68 0.18 150), oklch(0.62 0.22 295))",
  },

  // ───────── Enterprise ─────────
  {
    slug: "crm",
    index: "05",
    name: "Dextora CRM",
    category: "Enterprise",
    tagline: "An AI-native CRM for high-velocity sales teams.",
    description:
      "Pipeline copilot, auto-enriched contacts, conversation intelligence, and multi-channel outreach — engineered to replace cluttered legacy CRMs with one calm surface.",
    bullets: ["AI pipeline copilot", "Auto-enriched contacts", "Conversation intelligence", "Multi-channel outreach"],
    meta: "Enterprise · SaaS · 2025",
    accent: "linear-gradient(135deg, oklch(0.6 0.2 250), oklch(0.78 0.12 200))",
  },
  {
    slug: "social-ai",
    index: "06",
    name: "Social Media Management AI",
    category: "Enterprise",
    tagline: "An autonomous social desk that posts, replies and reports.",
    description:
      "Plans, drafts, schedules and responds across channels. Brand-tone locked. Trend-aware. Sends weekly performance digests with what to double down on.",
    bullets: ["Brand-tone calendar", "Auto-reply with guardrails", "Trend radar", "Weekly insights digest"],
    meta: "Marketing · Automation · 2025",
    accent: "linear-gradient(135deg, oklch(0.7 0.18 30), oklch(0.65 0.2 320))",
  },

  // ───────── Government ─────────
  {
    slug: "ias-agent",
    index: "07",
    name: "Personal AI Agent for IAS Officers",
    category: "Government",
    tagline: "A private, secure agentic copilot for senior bureaucrats.",
    description:
      "Drafts notings, summarises files, recalls policy precedent, and prepares briefings. Air-gapped deployment, audit-grade logs, role-based access.",
    bullets: ["File summarisation", "Policy precedent search", "Briefing prep", "Air-gapped deployment"],
    meta: "GovTech · Secure AI · 2025",
    accent: "linear-gradient(135deg, oklch(0.5 0.16 260), oklch(0.7 0.12 220))",
  },
  {
    slug: "ai-glasses",
    index: "08",
    name: "Dextora AI Glasses",
    category: "Government",
    tagline: "Heads-up intelligence for field officers.",
    description:
      "Live transcription, translation, face & document recognition with on-device safety filters. Designed for inspections, field ops and citizen interfacing.",
    bullets: ["Live transcription", "On-device translation", "Document recognition", "Tactical privacy mode"],
    meta: "Hardware · Wearable AI · 2025",
    accent: "linear-gradient(135deg, oklch(0.62 0.22 295), oklch(0.6 0.2 250))",
  },

  // ───────── Open Source ─────────
  {
    slug: "note-taker",
    index: "09",
    name: "Dextora Note-taker",
    category: "Open Source",
    tagline: "Meeting copilot built on open-source ASR + LLMs.",
    description:
      "Joins your calls, captures speaker-attributed transcripts, generates structured notes, action items and follow-up emails. Self-hostable.",
    bullets: ["Speaker-attributed transcripts", "Auto action items", "Follow-up email drafts", "Self-hostable"],
    meta: "Open Source · Productivity · 2025",
    accent: "linear-gradient(135deg, oklch(0.78 0.12 200), oklch(0.68 0.18 150))",
  },
  {
    slug: "office-3d",
    index: "10",
    name: "Office 3D",
    category: "Open Source",
    tagline: "A spatial workspace for distributed teams.",
    description:
      "Walk into a real-time 3D office. Proximity voice, shared whiteboards, focus rooms. Built on open WebGL stack, deployable on your domain.",
    bullets: ["Proximity voice", "Shared whiteboards", "Focus rooms", "Self-hostable"],
    meta: "Open Source · Spatial · 2025",
    accent: "linear-gradient(135deg, oklch(0.65 0.2 320), oklch(0.62 0.22 295))",
  },
  {
    slug: "interview-analysis",
    index: "11",
    name: "Interview Analysis",
    category: "Open Source",
    tagline: "Structured signals from every candidate conversation.",
    description:
      "Records and analyses interviews — competency mapping, sentiment arcs, red flags, scorecards. Reduces interviewer bias with explainable rubrics.",
    bullets: ["Competency mapping", "Sentiment arcs", "Bias-aware scorecards", "Explainable rubrics"],
    meta: "Open Source · HR Tech · 2025",
    accent: "linear-gradient(135deg, oklch(0.7 0.15 200), oklch(0.78 0.12 200))",
  },
];

export const productsBySlug = Object.fromEntries(products.map((p) => [p.slug, p]));
export const categories: ProductCategory[] = ["Flagship", "Enterprise", "Government", "Open Source"];
