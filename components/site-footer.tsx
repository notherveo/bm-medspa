import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer border-t border-[#EFECE6]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 text-[0.9375rem] text-[#5D6368] sm:flex-row">
        <p>&copy; 2026 LUMIÈRE AESTHETICS. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/services" className="hover:text-[#1B2024] transition-colors">
            Services
          </Link>
          <Link href="/pricing" className="hover:text-[#1B2024] transition-colors">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-[#1B2024] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
