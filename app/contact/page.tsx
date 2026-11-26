"use client";

import type { ReactNode } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/reveal";

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-title" className="relative min-h-[60dvh] overflow-hidden px-4 pt-24 pb-16 lg:px-6 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,#F2EFE5,transparent_60%)]" />
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 id="contact-title" className="text-[clamp(2.5rem,5.5vw,4rem)] font-semibold tracking-[-0.02em] text-[#1B2024]">
                  Book a consultation
                </h1>
                <p className="mt-3 max-w-[28rem] text-[1rem] text-[#6B7276]">
                  Let us tailor a treatment plan that fits your goals.
                </p>
              </div>
              <Button
                size="lg"
                variant="ghost"
                onClick={() =>
                  document.getElementById("contact-form")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Book now
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="scroll-mt-6 px-4 py-24 lg:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-[#1B2024]">
                  Your consultation
                </h2>
                <p className="mt-5 text-[1.0625rem] leading-[1.7] text-[#5D6368]">
                  Fill out the form and we&apos;ll get back to you within one
                  business day. A specialist will review your skin and discuss
                  the best treatments for your goals.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    {
                      label: "Laser Hair Removal",
                      description: "Face & body sessions",
                    },
                    {
                      label: "Facial Rejuvenation",
                      description: "Hydrafacial, chemical peel",
                    },
                    {
                      label: "Body Contouring",
                      description: "Non-invasive treatments",
                    },
                  ].map((item, i) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-lg border border-[#EFECE6] p-4"
                    >
                      <Sparkles className="mt-0.5 size-4 shrink-0 text-[#D4AF37]" />
                      <div>
                        <p className="font-medium text-[#1B2024]">
                          {item.label}
                        </p>
                        <p className="text-[0.9375rem] text-[#5D6368]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Reveal delay={0.2}>
                <form
                  id="contact-form"
                  className="rounded-[1.75rem] border border-[#EFECE6] bg-white p-6 shadow-[0_20px_40px_-12px_rgba(25,25,25,0.08)]"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you! We&apos;ll be in touch shortly.");
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">Treatment interest</Label>
                      <Input
                        id="interest"
                        name="interest"
                        placeholder="e.g. laser hair removal"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your goals…"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gap-2"
                    >
                      Send request
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </form>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
