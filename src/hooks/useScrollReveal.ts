import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "left" | "right";

interface ScrollRevealOptions {
  direction?: Direction;
  delay?: number;
  duration?: number;
  stagger?: number;
  children?: boolean; // animate direct children with stagger
  start?: string;
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null);
  const {
    direction = "up",
    delay = 0,
    duration = 1,
    stagger = 0.1,
    children = false,
    start = "top 85%",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = children ? el.children : el;
    const from: gsap.TweenVars = {
      opacity: 0,
      ...(direction === "up" && { y: 60 }),
      ...(direction === "left" && { x: -60 }),
      ...(direction === "right" && { x: 60 }),
    };
    const to: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      delay,
      ease: "power3.out",
      stagger: children ? stagger : 0,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    };

    gsap.fromTo(targets, from, to);

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [direction, delay, duration, stagger, children, start]);

  return ref;
}
