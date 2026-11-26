"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export function Counter({
  value,
  format = "n",
  className = "",
}: {
  value: number;
  format?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const done = useRef(false);

  useEffect(() => {
    if (reduced || done.current) return;
    done.current = true;
    const el = ref.current;
    if (!el) return;
    const target = value.toLocaleString("en-US", {
      ...(format === "n" ? { maximumFractionDigits: 0 } : {}),
    });
    let from = 0;
    const duration = 1600;
    const steps = Math.max(30, Math.round(duration / 16));
    const interval = setInterval(() => {
      from += (value - from) / (steps + 1);
      el.textContent = from.toLocaleString("en-US", {
        ...(format === "n" ? { maximumFractionDigits: 0 } : {}),
      });
      if (from >= value) {
        clearInterval(interval);
        el.textContent = target;
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [value, format, reduced]);

  return (
    <span
      ref={ref}
      className={`counter-value ${className} ${reduced ? "" : "counting"}`}
    />
  );
}
