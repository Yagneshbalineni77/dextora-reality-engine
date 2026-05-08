import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Showreel } from "@/components/site/Showreel";
import { Products } from "@/components/site/Products";
import { Capabilities } from "@/components/site/Capabilities";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dextora — Cinematic AI Products Studio" },
      {
        name: "description",
        content:
          "Dextora is a creative-tech studio building cinematic AI products: an adaptive learning engine, an AI reel studio, and a 60-second reality-grade website generator.",
      },
      { property: "og:title", content: "Dextora — Cinematic AI Products Studio" },
      { property: "og:description", content: "Three god-tier AI products. One obsession with the cinematic." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Showreel />
      <Products />
      <Capabilities />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
