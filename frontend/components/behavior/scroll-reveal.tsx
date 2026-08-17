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
      { threshold: 0.01, rootMargin: "40px 0px 40px 0px" },
    );

    // Tách hẳn pha đọc và pha ghi. Trộn getBoundingClientRect() với classList
    // trong cùng vòng lặp buộc trình duyệt tính lại layout ở mỗi node
    // (layout thrashing); đọc gộp trước chỉ tốn đúng một lần tính layout.
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const inView = nodes.map((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top < vh * 0.98 && rect.bottom > vh * 0.02;
    });

    nodes.forEach((el, i) => {
      if (inView[i]) {
        el.classList.add("is-visible");
        return;
      }
      el.classList.remove("is-visible");
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
