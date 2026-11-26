"use client";

import { useState } from "react";

export function Accordion({ items }: { items: { title: string; content: string }[] }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="divide-y divide-[#EFECE6]">
      {items.map((item, i) => (
        <div key={item.title}>
          <button
            onClick={() => setOpen(open === item.title ? null : item.title)}
            className="flex w-full items-center justify-between px-6 py-4 text-left"
          >
            <span className="text-[1rem] font-medium text-[#1B2024]">
              {item.title}
            </span>
            <span className="text-[#D4AF37]">
              {open === item.title ? "−" : "+"}
            </span>
          </button>
          {open === item.title && (
            <p className="px-6 pb-4 text-[0.9375rem] text-[#5D6368]">
              {item.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
