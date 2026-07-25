import Image from "next/image";
import { SITE, navigation } from "@/lib/site";
import { PhoneIcon, MailIcon, LineIcon, PinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-brand bg-ink pb-16 text-white/70 lg:pb-0">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid divide-y-2 divide-white/10 sm:grid-cols-2 sm:divide-x-2 sm:divide-y-0 lg:grid-cols-4">
          <div className="pb-8 sm:col-span-2 sm:pr-8 sm:pb-0">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/logo-mark.webp"
                alt={`โลโก้ ${SITE.brandName}`}
                width={40}
                height={42}
                className="h-9 w-auto"
              />
              <div>
                <p className="text-lg font-bold text-white">{SITE.brandShort}</p>
                <p className="text-sm">A.R.T.BOREPILE CO., LTD.</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {SITE.brandFull} — บริษัทรับทำเสาเข็มเจาะ ระบบแห้งและระบบเปียก เสาเข็มไมโครไพล์
              และบริการรถสว่านเจาะ ทีมงานมืออาชีพ เครื่องจักรพร้อม รับงานทุกขนาดโครงการ
            </p>
          </div>

          <div className="py-8 sm:px-8 sm:py-0">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-mint">เมนู</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navigation.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-brand-mint">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 sm:pt-0 sm:pl-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-mint">ติดต่อ</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 hover:text-brand-mint">
                  <PhoneIcon className="h-4 w-4 shrink-0" /> {SITE.phoneContact} {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 break-all hover:text-brand-mint">
                  <MailIcon className="h-4 w-4 shrink-0" /> {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.line.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-mint">
                  <LineIcon className="h-4 w-4 shrink-0" /> LINE ID: {SITE.line.id}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0" />
                <address className="not-italic">{SITE.address.full}</address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} {SITE.brandFull} · สงวนลิขสิทธิ์
        </div>
      </div>
    </footer>
  );
}
