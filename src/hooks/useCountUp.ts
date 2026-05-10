import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animates a number from 0 to its target value when scrolled into view.
 * Parses numbers like "14k+", "98%", "60s", "3", "100%"
 */
export function useCountUp<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.textContent || "";
    // Extract the numeric part
    const match = text.match(/^([\d.]+)/);
    if (!match) return;

    const target = parseFloat(match[1]);
    const suffix = text.slice(match[1].length); // e.g. "k+", "%", "s"
    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        const display =
          target >= 100
            ? Math.round(obj.val).toString()
            : target >= 10
              ? Math.round(obj.val).toString()
              : obj.val.toFixed(target % 1 !== 0 ? 1 : 0);
        el.textContent = display + suffix;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return ref;
}
