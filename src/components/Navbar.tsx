"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE, navigation } from "@/lib/site";
import { PhoneIcon, LineIcon, MailIcon } from "./icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* แถบข้อมูลติดต่อบนสุด */}
      <div className="hidden bg-ink text-white/70 lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1.5 text-xs">
          <span className="tracking-wide">{SITE.tagline}</span>
          <div className="flex items-center gap-5">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-brand-mint">
              <MailIcon className="h-3.5 w-3.5" /> {SITE.email}
            </a>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-1.5 hover:text-brand-mint">
              <PhoneIcon className="h-3.5 w-3.5" /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <nav className="border-b-2 border-ink bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/images/logo/logo-mark.webp"
              alt={`โลโก้ ${SITE.brandName}`}
              width={42}
              height={44}
              className="h-10 w-auto"
              priority
            />
            <span className="leading-tight text-ink">
              <span className="block text-lg font-bold">{SITE.brandShort}</span>
              <span className="block text-[10px] font-medium uppercase tracking-wider opacity-70">
                A.R.T.BOREPILE CO., LTD.
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold uppercase tracking-wide text-ink/70 transition-colors hover:text-brand"
              >
                {l.name}
              </a>
            ))}

            <a
              href={SITE.line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border-2 border-ink bg-[#06C755] px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-hard-sm"
            >
              <LineIcon className="h-4 w-4" />
              LINE
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 border-2 border-ink bg-brand px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-hard-sm"
            >
              <PhoneIcon className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
          </div>

          <button
            aria-label="เมนู"
            onClick={() => setOpen((v) => !v)}
            className="text-ink lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-b-2 border-ink bg-white px-4 pb-4 pt-2 shadow-hard lg:hidden">
          {navigation.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-black/10 py-3 font-medium text-ink/80"
            >
              {l.name}
            </a>
          ))}

          <a
            href={`tel:${SITE.phone}`}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 border-2 border-ink bg-brand px-4 py-3 font-semibold text-white"
          >
            <PhoneIcon className="h-4 w-4" />
            โทร {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.line.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 border-2 border-ink bg-[#06C755] px-4 py-3 font-semibold text-white"
          >
            <LineIcon className="h-4 w-4" />
            ติดต่อ LINE {SITE.line.id}
          </a>
        </div>
      )}
    </header>
  );
}
