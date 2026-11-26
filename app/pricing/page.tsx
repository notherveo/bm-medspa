"use client";

import type { ReactNode } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export default function PricingPage() {
  return (
    <>
      <section aria-labelledby="pricing-title" className="relative min-h-[60dvh] overflow-hidden px-4 pt-24 pb-16 lg:px-6 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,#F2EFE5,transparent_60%)]" />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 id="pricing-title" className="text-[clamp(2.5rem,5.5vw,4rem)] font-semibold tracking-[-0.02em] text-[#1B2024]">
                  Pricing
                </h1>
                <p className="mt-3 max-w-[28rem] text-[1rem] text-[#6B7276]">
                  Transparent pricing for laser hair removal and aesthetic treatments.
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
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Laser Hair Removal",
                  price: "From $99",
                  description: "Face & body sessions, tailored to your skin.",
                  features: [
                    "Multiple sessions for lasting results",
                    "Custom settings for your skin tone",
                    "Fast, precise and comfortable",
                  ],
                },
                {
                  name: "Facial Rejuvenation",
                  price: "From $120",
                  description: "Gentle facials that restore radiance.",
                  features: [
                    "Hydrafacial, chemical peel treatments",
                    "Customized for your skin type",
                    "Minimal downtime required",
                  ],
                },
                {
                  name: "Body Contouring",
                  price: "From $145",
                  description: "Non-invasive treatments for your silhouette.",
                  features: [
                    "Targeted and gentle",
                    "No downtime needed",
                    "Customized treatment plan",
                  ],
                },
              ].map((plan, i) => (
                <Reveal key={plan.name} delay={i * 0.1}>
                  <div className="treatment-card relative overflow-hidden rounded-[1.25rem] border border-[#EFECE6] bg-white p-6 shadow-[0_12px_30px_-12px_rgba(25,25,25,0.06)] transition-colors hover:border-[#D4AF37]/40">
                    <h3 className="text-[1.25rem] font-semibold tracking-tight">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-[1.5rem] font-semibold text-[#D4AF37]">
                      {plan.price}
                    </p>
                    <p className="mt-2 text-[0.9375rem] text-[#5D6368]">
                      {plan.description}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {plan.features.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-[0.9375rem] text-[#5D6368]">
                          <Sparkles className="size-4 shrink-0 text-[#D4AF37]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
