import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Logo } from "./Logo";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { to: "/products" as const, label: "Products" },
  { to: "/" as const, hash: "capabilities", label: "Capabilities" },
  { to: "/" as const, hash: "about", label: "Studio" },
];

export function Nav() {
  const headerRef = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = 0;

    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 100 && y > lastY);
      setScrolled(y > 50);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 px-3 transition-transform duration-500 ease-out sm:px-6"
      style={{ transform: hidden ? "translateY(-120%)" : "translateY(0)" }}
    >
      <div
        className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 sm:mt-4 sm:px-4 sm:py-2.5"
        style={{
          background: scrolled
            ? "color-mix(in oklab, var(--card) 85%, transparent)"
            : "color-mix(in oklab, var(--card) 50%, transparent)",
          backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "blur(14px) saturate(140%)",
          WebkitBackdropFilter: scrolled
            ? "blur(20px) saturate(160%)"
            : "blur(14px) saturate(140%)",
          border: "1px solid var(--border)",
          boxShadow: scrolled ? "var(--shadow-frost)" : "none",
        }}
      >
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="relative transition-colors hover:text-foreground [&.active]:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 [.active>&]:w-full" />
            </Link>
          ))}
        </nav>
        <Link
          to="/"
          hash="contact"
          className="btn-primary inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm"
        >
          Book a demo
        </Link>
      </div>
    </header>
  );
}
