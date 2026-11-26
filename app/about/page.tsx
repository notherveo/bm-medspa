"use client";

import type { ReactNode } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-title" className="relative min-h-[60dvh] overflow-hidden px-4 pt-24 pb-16 lg:px-6 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,#F2EFE5,transparent_60%)]" />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 id="about-title" className="text-[clamp(2.5rem,5.5vw,4rem)] font-semibold tracking-[-0.02em] text-[#1B2024]">
                  About LUMIÈRE
                </h1>
                <p className="mt-3 max-w-[28rem] text-[1rem] text-[#6B7276]">
                  A modern clinic for gentle, precise treatments.
                </p>
              </div>
              <Button
                size="lg"
                variant="ghost"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Book a consultation
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="scroll-mt-6 px-4 py-24 lg:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-[#1B2024]">
                  Your skin, your confidence.
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#5D6368]">
                  LUMIÈRE AESTHETICS is a modern clinic for gentle, precise
                  treatments. Our laser hair removal, facial rejuvenation and
                  body contouring services are tailored to your skin, with
                  minimal downtime and maximum results.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Experienced specialists",
                    "Advanced laser technology",
                    "Personalized treatment plans",
                    "A welcoming, private environment",
                  ].map((item, i) => (
                    <p
                      key={item}
                      className="flex items-center gap-2.5 text-[0.9375rem] text-[#5D6368]"
                    >
                      <Sparkles className="size-4 shrink-0 text-[#D4AF37]" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <Reveal delay={0.2}>
                <div className="overflow-hidden rounded-[1.75rem] border border-[#EFECE6] bg-white shadow-[0_20px_40px_-12px_rgba(25,25,25,0.08)]">
                  <img
                    src="https://picsum.photos/seed/about-clinic/800/900"
                    alt="A modern aesthetic clinic interior"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
