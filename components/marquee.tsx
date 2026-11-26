import * as React from "react";
import type { ReactNode } from "react";

export function Marquee({
  children,
  className = "",
  speed = 16,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  return (
    <div
      className={`marquee ${className}`}
      style={{ "--marquee-speed": `${speed}px` } as React.CSSProperties}
    >
      <div className="marquee-track">{children}</div>
    </div>
  );
}
