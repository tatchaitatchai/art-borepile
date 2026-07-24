"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SITE, navigation } from "@/lib/site";
import { PhoneIcon, LineIcon } from "./icons";

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(!transparent);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const solid = !transparent || scrolled;
  const textCls = solid ? "text-ink/80" : "text-white/90";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/logo/logo-mark.webp"
            alt={`โลโก้ ${SITE.brandName}`}
            width={42}
            height={44}
            className="h-10 w-auto"
            priority
          />
          <span className={`leading-tight transition-colors ${solid ? "text-ink" : "text-white"}`}>
            <span className="block text-lg font-bold">{SITE.brandShort}</span>
            <span className="block text-[10px] font-medium opacity-80">A.R.T.BOREPILE CO., LTD.</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navigation.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-brand ${textCls}`}
            >
              {l.name}
            </a>
          ))}

          <a
            href={SITE.line.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#06C755] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#05b54c]"
          >
            <LineIcon className="h-4 w-4" />
            LINE
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-brand-dark"
          >
            <PhoneIcon className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
        </div>

        <button
          aria-label="เมนู"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${solid ? "text-ink" : "text-white"}`}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white px-4 pb-4 pt-2 shadow-lg lg:hidden">
          {navigation.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-black/5 py-3 text-ink/80"
            >
              {l.name}
            </a>
          ))}

          <a
            href={`tel:${SITE.phone}`}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 font-semibold text-white"
          >
            <PhoneIcon className="h-4 w-4" />
            โทร {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.line.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06C755] px-4 py-3 font-semibold text-white"
          >
            <LineIcon className="h-4 w-4" />
            ติดต่อ LINE {SITE.line.id}
          </a>
        </div>
      )}
    </header>
  );
}
