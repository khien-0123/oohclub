"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Quan sát mọi phần tử [data-reveal] và thêm .is-visible khi vào viewport.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduce) {
      nodes.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("reveal-on");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    nodes.forEach((el) => {
      el.classList.remove("is-visible");
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
