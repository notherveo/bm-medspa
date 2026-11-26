Build a complete, production-quality multi-page Next.js (App Router) website — a **luxury
medical spa & laser aesthetics clinic**. The feeling: an upscale skincare editorial — calm,
luminous, clinically trustworthy, and expensive. A boutique clinic inside a design hotel.

## Routes (all must be fully implemented and linked from the nav)
`/`, `/services`, `/about`, `/pricing`, `/contact`

## Engineering contract (follow exactly)
**Stack is already configured — NEVER emit config files** (no package.json / tsconfig / next.config / postcss).
- Next.js App Router + TypeScript, Tailwind CSS v4, shadcn/ui primitives.
- Icons: `lucide-react`.
- Animation: motion v12 — `import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";`
- Class helper: `import { cn } from "@/lib/utils";`

**Components you may import (ONLY these exist in the project):**
- `@/components/ui/button` → `{ Button }`
- `@/components/ui/card` → `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }`
- `@/components/ui/badge` → `{ Badge }`
- `@/components/ui/input` → `{ Input }`
- `@/components/ui/label` → `{ Label }`
Everything else (reveal, before/after slider, accordion, marquee, counter, etc.) you MUST write yourself as a new file under `components/` and import your own file. NEVER import from `@/components/magicui/*`, `@/components/reactbits/*`, `@/components/blocks/*`, or any path you did not create in this response.

**Hard rules — the build runs `tsc --noEmit` + `next build` and MUST pass:**
1. Any file using hooks, `motion`, or browser APIs starts with `"use client"` on line 1.
2. Icons are components: `<Sparkles className="size-4" />`. NEVER write `{icon.size}`. NEVER wrap an icon in `<p>`. JSX component names MUST be Capitalized (never `<icon />`).
3. Shared chrome (header/nav, footer) is defined in `app/layout.tsx` and rendered EXACTLY ONCE. Pages must NOT render the header or footer themselves.
4. Import every symbol you use. No unused imports. No `any`. Type props explicitly.
5. Photos: plain `<img>` (NEVER `next/image`) with `loading="lazy"`, a real `alt`, and `className="… object-cover"`. Use `https://picsum.photos/seed/<unique-slug>/<w>/<h>` for photography, and CSS gradients / inline SVG for graphics. No empty src.
6. Respect reduced motion: read `useReducedMotion()` and skip/shorten animations when true.
7. Realistic, specific, non-repetitive copy. No "Lorem ipsum", no "TODO", no "sample text".
8. Responsive mobile-first; never overflow horizontally.

## Design language (luxury medical aesthetics)
- Palette: warm ivory `#FAF7F2`, soft beige, champagne/gold accent, muted sage or dusty-rose secondary, deep charcoal text. Airy and luminous.
- Typography: an elegant high-contrast serif for display headlines, paired with a clean humanist sans for body. Wide-tracked small-caps eyebrows.
- Editorial composition: large image columns, thin champagne hairline rules, generous whitespace, oversized section numbers.
- Glassmorphism: frosted translucent cards (`backdrop-blur-xl bg-white/60 border-white/40`) layered over soft imagery.
- Photography: skincare, treatment rooms, glowing close-up skin, soft natural light. Use descriptive picsum seeds.

## Motion language (this site's signature — refined and expensive)
- **Elegant image reveals**: clip-path / mask-up reveals with soft 400–600ms ease-out.
- **Animated headline reveals**: your own split-text word-by-word stagger.
- **Subtle parallax** on hero imagery.
- **Refined hover** on treatment cards (image zoom + gradient sheen).
- A **before/after comparison slider** (draggable divider) for the demo gallery.
- A quiet **counter** for credibility stats (years, treatments, satisfaction).

Write these components: `components/reveal.tsx`, `components/before-after.tsx`, `components/marquee.tsx`, `components/split-text.tsx`, `components/counter.tsx`, `components/accordion.tsx`, `components/site-header.tsx`, `components/site-footer.tsx`.

## Content
Fictional clinic **"LUMIÈRE AESTHETICS"** — luxury med spa, laser hair removal & aesthetic treatments.
- `/` — premium hero with consultation CTA; treatment showcase grid; laser hair removal benefits; treatment areas (illustrated with inline SVG / gradient art, e.g. face, underarms, legs, back); before-and-after demo gallery (clearly labeled illustrative); consultation process steps; testimonials (labeled illustrative); FAQ accordion; closing booking CTA.
- `/services` — full treatment menu: laser hair removal (face & body), facials (hydrafacial, chemical peel), injectables, skin resurfacing, body contouring — each with description, duration, and a short benefit list.
- `/about` — clinic story, philosophy, the team (fictional names + roles), technology, safety & hygiene standards.
- `/pricing` — tiered treatment pricing tables + packages/memberships; an FAQ for pricing.
- `/contact` — consultation booking form (name / email / phone / treatment interest / preferred date / message) with client-side validation and success feedback; clinic address, hours, and a map-style placeholder.

Clearly label all testimonials and before/after imagery as illustrative demo content. Use a fictional business name and sample contact details — do not present invented credentials or reviews as verified facts.

## Output
Start with a short `thinking` plan (a few lines). Then emit ONLY `<file path="…">…</file>` blocks — no markdown fences, no prose. Emit `app/layout.tsx`, every route above, and every component you reference.
