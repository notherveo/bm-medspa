"use client";
import * as React from "react";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export function SplitText({ className = "", children}: { className?: string; children: React.ReactNode}) {
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
          el.querySelectorAll<HTMLElement>("span").forEach((item, i) => {
            item.classList.add("revealed");
            item.style.transitionDelay = `${i * 0.05}s`;
          });
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <div
      ref={ref}
      className={`split-text ${className} ${reduced ? "" : "reveal-words"}`}
    >
      {children}
    </div>
  );
}
