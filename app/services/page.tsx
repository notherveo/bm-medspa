"use client";

import type { ReactNode } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

function TreatmentItem({
  icon,
  title,
  description,
  duration,
  price,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  duration: string;
  price: string;
}) {
  return (
    <Reveal>
      <div className="treatment-card relative overflow-hidden rounded-[1.25rem] border border-[#EFECE6] bg-white p-6 shadow-[0_12px_30px_-12px_rgba(25,25,25,0.06)] transition-colors hover:border-[#D4AF37]/40">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F0EBE2] text-[#D4AF37]">
              {icon}
            </div>
            <div>
              <h3 className="text-[1.125rem] font-semibold tracking-tight">
                {title}
              </h3>
              <p className="text-[0.8125rem] text-[#6B7276]">{duration}</p>
            </div>
          </div>
          <span className="text-[1.0625rem] font-semibold text-[#D4AF37]">
            {price}
          </span>
        </div>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-[#5D6368]">
          {description}
        </p>
      </div>
    </Reveal>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section aria-labelledby="services-title" className="relative min-h-[60dvh] overflow-hidden px-4 pt-24 pb-16 lg:px-6 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,#F2EFE5,transparent_60%)]" />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 id="services-title" className="text-[clamp(2.5rem,5.5vw,4rem)] font-semibold tracking-[-0.02em] text-[#1B2024]">
                  Our treatments
                </h1>
                <p className="mt-3 max-w-[28rem] text-[1rem] text-[#6B7276]">
                  Laser hair removal and aesthetic treatments designed for
                  your skin.
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
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-[#1B2024]">
              Laser hair removal
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <TreatmentItem
              icon={<Sparkles className="size-5" />}
              title="Face & Body"
              description="A versatile laser that works on multiple areas. Gentle, precise and effective for longer-lasting results."
              duration="20–35 min"
              price="From $99"
            />
            <TreatmentItem
              icon={<Sparkles className="size-5" />}
              title="Facial Hair Removal"
              description="Targeted treatment for the face and neck. Gentle and precise, with minimal downtime."
              duration="15–20 min"
              price="From $85"
            />
          </div>

          <Reveal delay={0.2}>
            <h2 className="mt-16 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-[#1B2024]">
              Facials & rejuvenation
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <TreatmentItem
              icon={<Sparkles className="size-5" />}
              title="Hydrafacial"
              description="A gentle, hydrating facial that removes impurities and restores radiance. No downtime required."
              duration="45 min"
              price="From $145"
            />
            <TreatmentItem
              icon={<Sparkles className="size-5" />}
              title="Chemical Peel"
              description="A customized peel to refresh your skin tone and texture. Gentle, precise and tailored to your skin."
              duration="30–45 min"
              price="From $120"
            />
          </div>
        </div>
      </section>
    </>
  );
}
