"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full bg-[#D4AF37] text-white">
            <Sparkles className="size-5" />
          </span>
          <span className="text-[1.125rem] font-semibold tracking-tight text-[#1B2024]">
            LUMIÈRE AESTHETICS
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-[0.9375rem] font-medium transition-colors ${
                pathname === item.href
                  ? "text-[#D4AF37]"
                  : "text-[#5D6368] hover:text-[#1B2024]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          size="sm"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Book a consultation
        </Button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: 2 }}
        transition={{ duration: 0.3 }}
        className="h-0.5 bg-[#D4AF37]"
      />
    </header>
  );
}
