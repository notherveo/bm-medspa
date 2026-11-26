"use client";

import { useEffect, useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  className = "",
}: {
  before: string;
  after: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handle = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const rect = el.getBoundingClientRect();
      const x = Math.max(0, Math.min(rect.width, (e as MouseEvent).clientX - rect.left));
      setPos((x / rect.width) * 100);
    };
    const up = () => setIsDragging(false);
    el.addEventListener("mousedown", () => setIsDragging(true));
    el.addEventListener("touchstart", () => setIsDragging(true));
    window.addEventListener("mousemove", handle);
    window.addEventListener("touchmove", handle);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      el.removeEventListener("mousedown", () => {});
      el.removeEventListener("touchstart", () => {});
      window.removeEventListener("mousemove", handle);
      window.removeEventListener("touchmove", handle);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: "4 / 5" }}
    >
      <img
        src={before}
        alt="Before treatment"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={after}
        alt="After treatment"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <div
        className="absolute inset-y-0 left-1/2 w-0.5 bg-white/60"
        style={{ left: `${pos}%` }}
      />
      <div
        className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 cursor-grab active:cursor-grabbing"
        style={{ left: `${pos}%` }}
      >
        <div className="flex h-8 items-center justify-center rounded-full bg-white/90 px-3 text-[0.8125rem] font-medium text-[#1B2024] shadow">
          Drag to compare
        </div>
      </div>
    </div>
  );
}
