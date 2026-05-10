import edu from "@/assets/product-education.jpg";
import reels from "@/assets/product-reels.jpg";
import web from "@/assets/product-web.jpg";

export type ProductCategory = "Flagship" | "Government" | "Enterprise" | "Open Source";

export type Feature = { title: string; desc: string; icon: string };
export type ProcessStep = { step: string; title: string; desc: string };

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
  accent: string;
  features: Feature[];
  process: ProcessStep[];
  techStack: string[];
  stats: [string, string][];
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
    bullets: [
      "Adaptive AI tutor",
      "Reality engine canvas",
      "Parent + Educator portals",
      "14,000+ learners",
    ],
    meta: "EdTech · AI · 2025",
    image: edu,
    accent: "linear-gradient(135deg, oklch(0.62 0.22 295), oklch(0.78 0.12 200))",
    features: [
      {
        title: "Adaptive AI Tutor",
        desc: "Real-time difficulty adjustment based on student performance patterns. No two learning paths are the same.",
        icon: "🧠",
      },
      {
        title: "Reality Engine Canvas",
        desc: "Interactive 3D simulations that replace flat textbook diagrams. Students don't read physics — they experience it.",
        icon: "🌐",
      },
      {
        title: "Parent & Educator Portals",
        desc: "Live dashboards with granular analytics. See exactly where a student struggles — before they fall behind.",
        icon: "📊",
      },
      {
        title: "Mastery-Based Progression",
        desc: "Students advance only when they truly understand. No fake completion percentages. Real, measurable mastery.",
        icon: "🎯",
      },
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        desc: "AI evaluates current knowledge level across 200+ competency nodes.",
      },
      {
        step: "02",
        title: "Personalize",
        desc: "Custom curriculum generated in real-time — no two students see the same path.",
      },
      {
        step: "03",
        title: "Immerse",
        desc: "Interactive 3D lessons replace static video lectures with reality-grade simulations.",
      },
      {
        step: "04",
        title: "Master",
        desc: "Continuous evaluation ensures genuine understanding, not surface-level memorization.",
      },
    ],
    techStack: ["React", "Three.js", "TensorFlow", "Gemini Pro", "Supabase", "Edge Functions"],
    stats: [
      ["14k+", "Active learners"],
      ["92%", "Completion rate"],
      ["3.2x", "Faster mastery"],
      ["200+", "Competency nodes"],
    ],
  },
  {
    slug: "reel-studio",
    index: "02",
    name: "Dextora Reel Studio",
    category: "Flagship",
    tagline: "Cinematic short-form video — generated from a single prompt.",
    description:
      "Production-grade SaaS that turns text into scroll-stopping reels in seconds. Studio-tier dark UI, brand-conditioned outputs, algorithm-tuned formats.",
    bullets: [
      "Prompt → Reel in seconds",
      "Brand-conditioned outputs",
      "Algorithm-tuned formats",
      "Studio-tier UI",
    ],
    meta: "Generative AI · SaaS · 2025",
    image: reels,
    accent: "linear-gradient(135deg, oklch(0.65 0.2 320), oklch(0.7 0.18 30))",
    features: [
      {
        title: "One-Prompt Generation",
        desc: "Type a sentence. Get a studio-quality reel with transitions, text overlays, and music — in under 30 seconds.",
        icon: "✨",
      },
      {
        title: "Brand Conditioning",
        desc: "Upload your brand kit once. Every reel auto-inherits your fonts, colors, tone of voice, and logo placement.",
        icon: "🎨",
      },
      {
        title: "Algorithm Optimization",
        desc: "AI analyzes trending formats per platform (IG Reels, TikTok, Shorts) and auto-adapts aspect ratio, pacing, and hooks.",
        icon: "📈",
      },
      {
        title: "Batch Production",
        desc: "Generate 50 variations from one brief. A/B test hooks, CTAs, and visuals at scale without a video team.",
        icon: "🔄",
      },
    ],
    process: [
      {
        step: "01",
        title: "Brief",
        desc: "Enter a text prompt or paste a blog post, product page, or raw idea.",
      },
      {
        step: "02",
        title: "Generate",
        desc: "AI selects footage, writes copy, chooses music, and renders a cinematic reel.",
      },
      {
        step: "03",
        title: "Refine",
        desc: "Edit timeline, swap scenes, adjust tone — or let AI iterate on your feedback.",
      },
      {
        step: "04",
        title: "Publish",
        desc: "Export in any format or push directly to your social channels.",
      },
    ],
    techStack: ["Next.js", "Google VEO", "FFmpeg", "Gemini Pro", "Cloudflare R2", "WebCodecs API"],
    stats: [
      ["30s", "Average render time"],
      ["4.2x", "Engagement lift"],
      ["50+", "Reels per batch"],
      ["98%", "Brand consistency"],
    ],
  },
  {
    slug: "sites",
    index: "03",
    name: "Dextora Sites",
    category: "Flagship",
    tagline: "Awwwards-grade websites — orchestrated in 60 seconds.",
    description:
      "Multi-modal pipeline fusing LLM creative direction, Google VEO video, WebGL fluid shaders and GSAP scrollytelling into investor-grade interactive experiences.",
    bullets: [
      "AI Creative Director",
      "Native VEO video",
      "WebGL fluid physics",
      "Audio-reactive UI",
    ],
    meta: "Web · WebGL · 2025",
    image: web,
    accent: "linear-gradient(135deg, oklch(0.7 0.15 200), oklch(0.62 0.22 260))",
    features: [
      {
        title: "AI Creative Director",
        desc: "Describe your brand in one sentence. AI generates a complete design system — colors, typography, layout, motion language.",
        icon: "🎬",
      },
      {
        title: "Native VEO Video",
        desc: "Auto-generated cinematic hero videos using Google VEO. No stock footage. Every frame is unique to your brand.",
        icon: "📹",
      },
      {
        title: "WebGL Fluid Physics",
        desc: "Real-time fluid simulations, particle systems, and 3D environments that respond to scroll and cursor.",
        icon: "🌊",
      },
      {
        title: "GSAP Scrollytelling",
        desc: "Scroll-triggered cinematic sequences that transform your site from a page into an interactive film.",
        icon: "🎞️",
      },
    ],
    process: [
      {
        step: "01",
        title: "Describe",
        desc: "Tell the AI about your brand, audience, and the emotion you want visitors to feel.",
      },
      {
        step: "02",
        title: "Direct",
        desc: "AI generates a creative brief with mood board, color palette, and motion storyboard.",
      },
      {
        step: "03",
        title: "Generate",
        desc: "Full website assembled — hero video, 3D backgrounds, scroll animations, responsive layout.",
      },
      {
        step: "04",
        title: "Deploy",
        desc: "One-click deploy to edge CDN. Lighthouse 95+. Awwwards-submission ready.",
      },
    ],
    techStack: ["React", "Three.js", "GSAP", "Google VEO", "WebGL", "Vite", "Cloudflare Workers"],
    stats: [
      ["60s", "Idea to website"],
      ["95+", "Lighthouse score"],
      ["0", "Templates used"],
      ["∞", "Unique designs"],
    ],
  },
  {
    slug: "copy-checker",
    index: "04",
    name: "Copy Checker",
    category: "Flagship",
    tagline: "AI evaluator for theory exams — months of grading, done in minutes.",
    description:
      "Trained on examiner rubrics. Evaluates handwritten and typed theory answers with rationale, score, and per-rubric feedback. Built for boards, universities and coaching institutes.",
    bullets: [
      "Rubric-aware scoring",
      "Per-question rationale",
      "Handwriting OCR",
      "Bulk batch grading",
    ],
    meta: "EdTech · AI Evaluator · 2025",
    accent: "linear-gradient(135deg, oklch(0.68 0.18 150), oklch(0.62 0.22 295))",
    features: [
      {
        title: "Rubric-Aware Scoring",
        desc: "Upload your marking scheme once. AI scores every answer against your exact criteria — not a generic model.",
        icon: "📋",
      },
      {
        title: "Handwriting OCR",
        desc: "State-of-the-art OCR that reads messy student handwriting with 97%+ accuracy across Indian scripts.",
        icon: "✍️",
      },
      {
        title: "Per-Question Rationale",
        desc: "Every score comes with a written explanation. Students understand WHY they lost marks — not just how many.",
        icon: "💡",
      },
      {
        title: "Bulk Batch Processing",
        desc: "Grade 10,000 answer sheets overnight. What takes a department 3 months finishes before morning chai.",
        icon: "⚡",
      },
    ],
    process: [
      {
        step: "01",
        title: "Upload",
        desc: "Scan answer sheets or upload typed PDFs. Batch upload supported.",
      },
      {
        step: "02",
        title: "Configure",
        desc: "Set rubrics, marking scheme, and grading strictness per question.",
      },
      {
        step: "03",
        title: "Evaluate",
        desc: "AI reads, understands, and scores each answer with detailed rationale.",
      },
      {
        step: "04",
        title: "Review",
        desc: "Educators spot-check flagged edge cases. Export final grades to any LMS.",
      },
    ],
    techStack: ["Python", "Gemini Pro Vision", "Tesseract OCR", "FastAPI", "PostgreSQL", "Redis"],
    stats: [
      ["97%", "OCR accuracy"],
      ["10k", "Sheets per batch"],
      ["3min", "Per paper avg"],
      ["40x", "Faster than manual"],
    ],
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
    bullets: [
      "AI pipeline copilot",
      "Auto-enriched contacts",
      "Conversation intelligence",
      "Multi-channel outreach",
    ],
    meta: "Enterprise · SaaS · 2025",
    accent: "linear-gradient(135deg, oklch(0.6 0.2 250), oklch(0.78 0.12 200))",
    features: [
      {
        title: "AI Pipeline Copilot",
        desc: "Predicts deal outcomes, suggests next best actions, and auto-prioritizes your pipeline by close probability.",
        icon: "🤖",
      },
      {
        title: "Auto-Enriched Contacts",
        desc: "Every new contact is instantly enriched with LinkedIn data, company info, funding stage, and tech stack.",
        icon: "🔍",
      },
      {
        title: "Conversation Intelligence",
        desc: "Call recordings auto-transcribed, sentiment-analyzed, and summarized. Never miss a buying signal again.",
        icon: "🎙️",
      },
      {
        title: "Multi-Channel Outreach",
        desc: "Email, LinkedIn, WhatsApp, SMS — orchestrated sequences from one timeline. No more tab-switching.",
        icon: "📨",
      },
    ],
    process: [
      {
        step: "01",
        title: "Import",
        desc: "Sync existing contacts from any CRM, CSV, or email inbox in minutes.",
      },
      {
        step: "02",
        title: "Enrich",
        desc: "AI auto-fills missing data points and scores leads by intent signals.",
      },
      {
        step: "03",
        title: "Engage",
        desc: "Launch multi-channel sequences with AI-written, personalized messaging.",
      },
      {
        step: "04",
        title: "Close",
        desc: "Pipeline copilot guides reps through each deal with real-time coaching.",
      },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Gemini Pro", "Twilio", "SendGrid"],
    stats: [
      ["2.4x", "Pipeline velocity"],
      ["67%", "Less data entry"],
      ["34%", "Higher close rate"],
      ["< 5min", "Onboarding"],
    ],
  },
  {
    slug: "social-ai",
    index: "06",
    name: "Social Media Management AI",
    category: "Enterprise",
    tagline: "An autonomous social desk that posts, replies and reports.",
    description:
      "Plans, drafts, schedules and responds across channels. Brand-tone locked. Trend-aware. Sends weekly performance digests with what to double down on.",
    bullets: [
      "Brand-tone calendar",
      "Auto-reply with guardrails",
      "Trend radar",
      "Weekly insights digest",
    ],
    meta: "Marketing · Automation · 2025",
    accent: "linear-gradient(135deg, oklch(0.7 0.18 30), oklch(0.65 0.2 320))",
    features: [
      {
        title: "Brand-Tone Calendar",
        desc: "AI generates a full month of posts in your brand voice. Approve, edit, or let it auto-publish.",
        icon: "📅",
      },
      {
        title: "Auto-Reply Engine",
        desc: "Responds to DMs and comments with brand-safe, context-aware replies. Escalates edge cases to humans.",
        icon: "💬",
      },
      {
        title: "Trend Radar",
        desc: "Real-time trend detection across platforms. Get notified the moment a relevant trend emerges — with draft content ready.",
        icon: "📡",
      },
      {
        title: "Performance Digest",
        desc: "Weekly AI-written report: what worked, what flopped, and exactly what to do next week.",
        icon: "📊",
      },
    ],
    process: [
      {
        step: "01",
        title: "Connect",
        desc: "Link all social accounts. AI ingests your past content to learn your voice.",
      },
      {
        step: "02",
        title: "Plan",
        desc: "AI generates content calendar with optimal posting times per platform.",
      },
      {
        step: "03",
        title: "Execute",
        desc: "Auto-publish, auto-reply, auto-engage. You approve only what you want to.",
      },
      {
        step: "04",
        title: "Learn",
        desc: "Weekly digest shows performance trends and AI-recommended pivots.",
      },
    ],
    techStack: ["Next.js", "Gemini Pro", "Meta API", "Twitter API", "Redis", "Vercel"],
    stats: [
      ["4x", "Content output"],
      ["89%", "Response rate"],
      ["2.1x", "Engagement growth"],
      ["15h", "Saved per week"],
    ],
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
    bullets: [
      "File summarisation",
      "Policy precedent search",
      "Briefing prep",
      "Air-gapped deployment",
    ],
    meta: "GovTech · Secure AI · 2025",
    accent: "linear-gradient(135deg, oklch(0.5 0.16 260), oklch(0.7 0.12 220))",
    features: [
      {
        title: "File Summarisation",
        desc: "Upload a 200-page government file. Get a 2-page brief with key decisions, risks, and recommended actions.",
        icon: "📄",
      },
      {
        title: "Policy Precedent Search",
        desc: "Ask any policy question. AI searches through decades of government orders, circulars, and court judgments.",
        icon: "⚖️",
      },
      {
        title: "Briefing Preparation",
        desc: "Auto-generates briefing notes for meetings with talking points, background context, and stakeholder profiles.",
        icon: "📝",
      },
      {
        title: "Air-Gapped Security",
        desc: "Runs entirely on-premise. No data leaves the government network. Audit trails for every interaction.",
        icon: "🔒",
      },
    ],
    process: [
      {
        step: "01",
        title: "Ingest",
        desc: "Securely upload files, notings, and historical policy documents.",
      },
      {
        step: "02",
        title: "Index",
        desc: "AI builds a private knowledge graph of all ingested government data.",
      },
      {
        step: "03",
        title: "Query",
        desc: "Ask natural language questions. Get precise, cited answers from your data.",
      },
      {
        step: "04",
        title: "Draft",
        desc: "AI generates notings, briefs, and summaries in official government format.",
      },
    ],
    techStack: ["Python", "LLaMA 3", "RAG Pipeline", "PostgreSQL", "On-Premise GPU", "RBAC"],
    stats: [
      ["90%", "Time saved on briefs"],
      ["10s", "Precedent search"],
      ["100%", "Data sovereignty"],
      ["Zero", "Cloud dependency"],
    ],
  },
  {
    slug: "ai-glasses",
    index: "08",
    name: "Dextora AI Glasses",
    category: "Government",
    tagline: "Heads-up intelligence for field officers.",
    description:
      "Live transcription, translation, face & document recognition with on-device safety filters. Designed for inspections, field ops and citizen interfacing.",
    bullets: [
      "Live transcription",
      "On-device translation",
      "Document recognition",
      "Tactical privacy mode",
    ],
    meta: "Hardware · Wearable AI · 2025",
    accent: "linear-gradient(135deg, oklch(0.62 0.22 295), oklch(0.6 0.2 250))",
    features: [
      {
        title: "Live Transcription",
        desc: "Real-time speech-to-text displayed on the HUD. Every conversation documented automatically.",
        icon: "🎤",
      },
      {
        title: "On-Device Translation",
        desc: "Instant translation across 22 Indian languages. No internet required. Works in remote field locations.",
        icon: "🌍",
      },
      {
        title: "Document Recognition",
        desc: "Point at any document — Aadhaar, license, permit. AI extracts and verifies data in real-time.",
        icon: "📑",
      },
      {
        title: "Tactical Privacy Mode",
        desc: "One tap to disable all recording. Hardware kill switch for camera and mic. Full officer control.",
        icon: "🛡️",
      },
    ],
    process: [
      {
        step: "01",
        title: "Wear",
        desc: "Lightweight titanium frames with integrated micro-display and bone conduction audio.",
      },
      {
        step: "02",
        title: "See",
        desc: "AI overlays real-time intelligence on the officer's field of view.",
      },
      {
        step: "03",
        title: "Act",
        desc: "Voice commands trigger document scans, translations, and status checks.",
      },
      {
        step: "04",
        title: "Report",
        desc: "Auto-generated field report with timestamps, locations, and evidence logs.",
      },
    ],
    techStack: ["Android AOSP", "MediaPipe", "TFLite", "Qualcomm QCS", "BLE 5.3", "Custom PCB"],
    stats: [
      ["22", "Languages supported"],
      ["50ms", "Translation latency"],
      ["12hr", "Battery life"],
      ["42g", "Total weight"],
    ],
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
    bullets: [
      "Speaker-attributed transcripts",
      "Auto action items",
      "Follow-up email drafts",
      "Self-hostable",
    ],
    meta: "Open Source · Productivity · 2025",
    accent: "linear-gradient(135deg, oklch(0.78 0.12 200), oklch(0.68 0.18 150))",
    features: [
      {
        title: "Speaker Attribution",
        desc: "Knows who said what. Color-coded transcripts with speaker labels and confidence scores.",
        icon: "👥",
      },
      {
        title: "Smart Summaries",
        desc: "Not just a transcript dump. AI extracts decisions, blockers, action items, and deadlines.",
        icon: "📋",
      },
      {
        title: "Follow-Up Drafts",
        desc: "Auto-generates follow-up emails with meeting summary and assigned action items per person.",
        icon: "✉️",
      },
      {
        title: "Self-Hostable",
        desc: "Run it on your own infrastructure. Your conversations never leave your servers.",
        icon: "🏠",
      },
    ],
    process: [
      {
        step: "01",
        title: "Join",
        desc: "Bot joins your Zoom/Meet/Teams call with one click or calendar integration.",
      },
      {
        step: "02",
        title: "Listen",
        desc: "Real-time transcription with speaker diarization and noise cancellation.",
      },
      {
        step: "03",
        title: "Analyze",
        desc: "AI processes transcript into structured notes, decisions, and action items.",
      },
      {
        step: "04",
        title: "Distribute",
        desc: "Notes and follow-ups auto-sent to attendees within 2 minutes of call end.",
      },
    ],
    techStack: ["Python", "Whisper", "Pyannote", "Ollama", "FastAPI", "Docker"],
    stats: [
      ["95%", "Transcription accuracy"],
      ["2min", "Post-call delivery"],
      ["0", "Data sent to cloud"],
      ["100%", "Open source"],
    ],
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
    features: [
      {
        title: "Proximity Voice",
        desc: "Audio volume scales with distance. Walk closer to talk. Walk away to focus. Just like a real office.",
        icon: "🔊",
      },
      {
        title: "Shared Whiteboards",
        desc: "Collaborative infinite canvas boards in every room. Draw, diagram, and sticky-note together in real-time.",
        icon: "🖍️",
      },
      {
        title: "Focus Rooms",
        desc: "Enter a focus room and your status auto-updates. No interruptions. Deep work mode, enforced by space.",
        icon: "🧘",
      },
      {
        title: "Custom Spaces",
        desc: "Design your own office layout. Upload floor plans. Brand the space. Make it feel like yours.",
        icon: "🏗️",
      },
    ],
    process: [
      {
        step: "01",
        title: "Deploy",
        desc: "Self-host on your domain or use our managed instance. Docker one-liner.",
      },
      {
        step: "02",
        title: "Design",
        desc: "Customize your virtual office layout with drag-and-drop room builder.",
      },
      {
        step: "03",
        title: "Inhabit",
        desc: "Team members join as avatars. Walk, talk, and collaborate spatially.",
      },
      {
        step: "04",
        title: "Integrate",
        desc: "Connect Slack, Calendar, and project tools for seamless workflow.",
      },
    ],
    techStack: ["Three.js", "WebRTC", "Socket.io", "React", "Mediasoup", "Docker"],
    stats: [
      ["< 100ms", "Voice latency"],
      ["50+", "Concurrent users"],
      ["24/7", "Persistent spaces"],
      ["0", "Vendor lock-in"],
    ],
  },
  {
    slug: "interview-analysis",
    index: "11",
    name: "Interview Analysis",
    category: "Open Source",
    tagline: "Structured signals from every candidate conversation.",
    description:
      "Records and analyses interviews — competency mapping, sentiment arcs, red flags, scorecards. Reduces interviewer bias with explainable rubrics.",
    bullets: [
      "Competency mapping",
      "Sentiment arcs",
      "Bias-aware scorecards",
      "Explainable rubrics",
    ],
    meta: "Open Source · HR Tech · 2025",
    accent: "linear-gradient(135deg, oklch(0.7 0.15 200), oklch(0.78 0.12 200))",
    features: [
      {
        title: "Competency Mapping",
        desc: "AI maps candidate responses to your competency framework. Visual radar chart shows strengths and gaps.",
        icon: "🗺️",
      },
      {
        title: "Sentiment Arcs",
        desc: "Track candidate confidence, enthusiasm, and stress levels across the interview timeline.",
        icon: "📉",
      },
      {
        title: "Bias Detection",
        desc: "AI flags potential interviewer bias patterns. Ensures hiring decisions are based on evidence, not gut feel.",
        icon: "⚖️",
      },
      {
        title: "Explainable Scorecards",
        desc: "Every score links back to specific quotes and moments. Fully auditable, fully transparent.",
        icon: "📊",
      },
    ],
    process: [
      {
        step: "01",
        title: "Record",
        desc: "AI joins the interview call or processes uploaded recordings.",
      },
      {
        step: "02",
        title: "Transcribe",
        desc: "Speaker-attributed transcript with timestamps and question detection.",
      },
      {
        step: "03",
        title: "Analyze",
        desc: "Competency scoring, sentiment analysis, and bias detection run in parallel.",
      },
      {
        step: "04",
        title: "Report",
        desc: "Structured scorecard delivered to hiring panel with evidence links.",
      },
    ],
    techStack: ["Python", "Whisper", "Gemini Pro", "scikit-learn", "FastAPI", "React"],
    stats: [
      ["73%", "Less bias in hiring"],
      ["5min", "Post-interview report"],
      ["12", "Competencies tracked"],
      ["100%", "Explainable scores"],
    ],
  },
];

export const productsBySlug = Object.fromEntries(products.map((p) => [p.slug, p]));
export const categories: ProductCategory[] = [
  "Flagship",
  "Enterprise",
  "Government",
  "Open Source",
];
