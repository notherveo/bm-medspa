"use client";
import * as React from "react";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const revealed = useRef(false);

  useEffect(() => {
    if (reduced || revealed.current) return;
    revealed.current = true;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>(".reveal-item").forEach((item, i) => {
            item.classList.add("revealed");
            item.style.transitionDelay = `${delay + i * 0.08}s`;
          });
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, reduced]);

  return (
    <div
      ref={ref}
      className={`reveal-section ${className} ${reduced ? "" : "reveal-items"}`}
    >
      {children}
    </div>
  );
}
