import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMagnetic } from "@/hooks/useMagnetic";

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const magneticBtn1 = useMagnetic<HTMLAnchorElement>(0.25);
  const magneticBtn2 = useMagnetic<HTMLAnchorElement>(0.25);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card scale-in
      gsap.fromTo(
        cardRef.current,
        { scale: 0.92, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Text stagger
      const texts = cardRef.current?.querySelectorAll(".cta-reveal");
      if (texts) {
        gsap.fromTo(
          texts,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div
          ref={cardRef}
          className="ring-grad relative overflow-hidden rounded-3xl p-7 sm:rounded-[2rem] sm:p-10 md:p-16"
          style={{ opacity: 0 }}
        >
          {/* Animated gradient background */}
          <div
            className="absolute inset-0 -z-10"
            style={{ background: "var(--gradient-aurora)" }}
          />
          <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
          <div className="absolute inset-0 -z-10 bg-card/60" />

          {/* Spinning border glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl sm:rounded-[2rem]"
            style={{
              background:
                "conic-gradient(from var(--border-angle, 0deg), oklch(0.62 0.22 295 / 0.4), transparent 30%, oklch(0.78 0.12 200 / 0.3), transparent 70%)",
              mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
              padding: "1px",
              animation: "border-spin 4s linear infinite",
            }}
          />

          <div className="grid items-end gap-8 sm:gap-10 md:grid-cols-2">
            <div>
              <p
                className="cta-reveal text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs"
                style={{ opacity: 0 }}
              >
                Let's build
              </p>
              <h2
                className="cta-reveal mt-3 font-display text-3xl leading-tight tracking-tight sm:mt-4 sm:text-4xl md:text-5xl"
                style={{ opacity: 0 }}
              >
                Have a product worthy of{" "}
                <span className="text-brand-gradient">cinematic engineering?</span>
              </h2>
              <p className="cta-reveal mt-4 max-w-md text-muted-foreground" style={{ opacity: 0 }}>
                We partner with a small number of teams each quarter — from pre-seed founders to
                global brands. If you're shipping something ambitious, we'd love to talk.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <a
                ref={magneticBtn1}
                href="mailto:hello@dextora.ai"
                className="cta-reveal btn-primary inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-medium md:w-auto"
                style={{ opacity: 0 }}
              >
                hello@dextora.ai
              </a>
              <Link
                ref={magneticBtn2}
                to="/products"
                className="cta-reveal btn-ghost inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-medium md:w-auto"
                style={{ opacity: 0 }}
              >
                Review the work →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
