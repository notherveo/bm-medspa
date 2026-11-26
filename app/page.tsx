"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/counter";
import { SplitText } from "@/components/split-text";
import { Reveal } from "@/components/reveal";

function TreatmentCard({
  icon,
  title,
  description,
  duration,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  duration: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="treatment-card relative overflow-hidden rounded-[1.25rem] border border-[#EFECE6] bg-white p-6 shadow-[0_12px_30px_-12px_rgba(25,25,25,0.06)]"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#F0EBE2] text-[#D4AF37]">
          {icon}
        </div>
        <div>
          <h3 className="text-[1.125rem] font-semibold tracking-tight">
            {title}
          </h3>
          <p className="text-[0.875rem] text-[#6B7276]">{duration}</p>
        </div>
      </div>
      <p className="mt-5 text-[0.9375rem] leading-relaxed text-[#5D6368]">
        {description}
      </p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */ }
      <section aria-labelledby="hero-title" className="relative min-h-[100dvh] overflow-hidden lg:min-h-[110svh]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,#F2EFE5,transparent_60%),radial-gradient(80%_100%_at_100%_0%,#EAE5D9,transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#E9E7E1_1px,transparent_1px),linear-gradient(to_bottom,#E9E7E1_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#00000040,transparent)]" />

        <div className="mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-col items-center justify-center px-4 pt-24 pb-16 text-center lg:px-6 lg:pt-36 lg:pb-24">
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E3E1DA] bg-[#F9F8F6] px-4 py-1.5 text-[0.8125rem] font-medium text-[#5D6368]">
              <Sparkles className="size-3.5 text-[#D4AF37]" />
              Now accepting new clients
            </span>
          </Reveal>

          <Reveal delay={0.25}>
            <h1 className="mx-auto max-w-[60rem] pt-6 text-[clamp(3.75rem,6.5vw,7.5rem)] font-semibold tracking-[-0.03em] leading-[1.02] text-[#1B2024]">
              <SplitText className="revelation">
                <span>
                  Your best
                  <br />
                  <span className="text-[#D4AF37]">self</span> starts
                  <br />
                  here.
                </span>
              </SplitText>
            </h1>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="mx-auto max-w-[34rem] mt-8 text-[1.0625rem] leading-[1.7] text-[#5D6368]">
              A modern clinic for gentle, precise treatments. Laser hair
              removal, facial rejuvenation and body contouring — tailored to
              your skin.
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" className="group gap-2">
                Book a consultation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="gap-2"
                onClick={() =>
                  document.getElementById("treatments")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Explore treatments
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
      </section>

      {/* TREATMENT SHOWCASE */ }
      <section id="treatments" aria-labelledby="treatments-title" className="scroll-mt-6 px-4 py-24 lg:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-6 border-b border-[#EFECE6] pb-12 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 id="treatments-title" className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold tracking-[-0.02em] text-[#1B2024]">
                  Treatments
                </h2>
                <p className="mt-3 max-w-[28rem] text-[1rem] text-[#6B7276]">
                  Gentle, precise care for your skin, hair and confidence.
                </p>
              </div>
              <a
                href="/services"
                className="text-[0.9375rem] font-medium text-[#D4AF37] hover:text-[#b8962e] transition-colors"
              >
                See all treatments
                <ArrowRight className="inline-block size-3.5 ml-1.5" />
              </a>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 md:grid-cols-3">
            <TreatmentCard
              icon={<Sparkles className="size-5" />}
              title="Laser Hair Removal"
              duration="20–35 min"
              description="Fast, precise, and comfortable. Multiple sessions for longer-lasting results, tailored to your skin tone."
            />
            <TreatmentCard
              icon={<Check className="size-5" />}
              title="Facial Rejuvenation"
              duration="45–60 min"
              description="Custom facials and treatments that restore radiance, smooth texture and reduce fine lines."
            />
            <TreatmentCard
              icon={<Sparkles className="size-5" />}
              title="Body Contouring"
              duration="30–45 min"
              description="Non-invasive treatments to refine your silhouette. Targeted and gentle, with no downtime."
            />
          </div>
        </div>
      </section>

      {/* LASER HAIR REMOVAL */ }
      <section aria-labelledby="laser-title" className="relative scroll-mt-6 overflow-hidden px-4 py-24 lg:px-6 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_120%_at_100%_0%,#F2EFE5,transparent_55%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E3E1DA] bg-[#F9F8F6] px-4 py-1.5 text-[0.8125rem] font-medium text-[#5D6368]">
                  <Sparkles className="size-3.5 text-[#D4AF37]" />
                  Laser Hair Removal
                </span>
                <h2 id="laser-title" className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold tracking-[-0.02em] text-[#1B2024]">
                  Gentle precision.
                  <br />
                  Lasting results.
                </h2>
                <p className="mt-5 max-w-[32rem] text-[1.0625rem] leading-[1.7] text-[#5D6368]">
                  Our laser hair removal treatments are designed to be fast,
                  precise and comfortable. With multiple sessions, you can
                  enjoy longer-lasting results tailored to your skin tone.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "Multiple sessions for lasting results",
                    "Custom settings for your skin tone",
                    "Fast, precise and comfortable",
                    "No downtime needed",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-[0.9375rem] text-[#5D6368]"
                    >
                      <Check className="size-4 shrink-0 text-[#D4AF37]" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                    Book your session
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-[#EFECE6] bg-white shadow-[0_20px_40px_-12px_rgba(25,25,25,0.08)]">
                <img
                  src="https://picsum.photos/seed/laser-treatment/800/900"
                  alt="A client receiving laser hair removal"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[0.875rem] font-medium text-white/90">
                    Inclusive care for every skin tone
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TREATMENT AREAS */ }
      <section aria-labelledby="areas-title" className="scroll-mt-6 px-4 py-24 lg:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="border-b border-[#EFECE6] pb-12">
              <h2 id="areas-title" className="text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold tracking-[-0.02em] text-[#1B2024]">
                Treatment areas
              </h2>
              <p className="mt-3 max-w-[28rem] text-[1rem] text-[#6B7276]">
                From face to body, every area deserves gentle care.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Face",
                areas: "Forehead, cheeks, chin, upper lip, sideburns",
              },
              {
                title: "Underarms",
                areas: "Both underarms",
              },
              {
                title: "Legs",
                areas: "Upper and lower legs",
              },
              {
                title: "Back",
                areas: "Upper and lower back",
              },
            ].map((area, i) => (
              <Reveal key={area.title} delay={i * 0.08}>
                <div className="rounded-[1.25rem] border border-[#EFECE6] bg-white p-6 transition-colors hover:border-[#D4AF37]/40">
                  <h3 className="text-[1.125rem] font-semibold tracking-tight">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] text-[#5D6368]">
                    {area.areas}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */ }
      <section aria-labelledby="cta-title" className="relative scroll-mt-6 overflow-hidden px-4 py-24 lg:px-6 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_100%_at_0%_0%,#F2EFE5,transparent_50%)]" />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-[2rem] border border-[#EFECE6] bg-[#F9F8F6] px-8 py-20 text-center shadow-[0_20px_40px_-12px_rgba(25,25,25,0.08)] md:px-16 md:py-28">
              <h2 id="cta-title" className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.02em] text-[#1B2024]">
                Ready to begin your journey?
              </h2>
              <p className="mx-auto mt-5 max-w-[32rem] text-[1.0625rem] leading-[1.7] text-[#5D6368]">
                Book a consultation and let us tailor a treatment plan that
                fits your goals.
              </p>
              <div className="mt-10">
                <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Book a consultation
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CREDIBILITY */ }
      <section aria-labelledby="stats-title" className="scroll-mt-6 border-t border-[#EFECE6] px-4 py-16 lg:px-6 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4 md:items-end">
          {[
            { value: 5000, label: "Treatments completed" },
            { value: 12, label: "Years of expertise" },
            { value: 98, label: "Client satisfaction" },
            { value: 3, label: "Certified specialists" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div>
                <Counter value={stat.value} format="n" />
                <p className="mt-1 text-[0.9375rem] text-[#5D6368]">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
