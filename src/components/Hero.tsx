import Image from "next/image";
import { SITE } from "@/lib/site";
import { PhoneIcon, LineIcon } from "./icons";

export default function Hero() {
  return (
    <section id="home" className="relative grid overflow-hidden pt-15 lg:grid-cols-[1.1fr_1fr] lg:pt-23">
      {/* ฝั่งซ้าย: ข้อความหลักบนพื้นเข้ม ลายบลูปรินต์ */}
      <div className="relative flex items-center bg-ink px-4 py-16 sm:px-8 lg:py-0">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />

        <div className="animate-fade-up relative mx-auto w-full max-w-xl lg:mx-0 lg:py-10">
          <span className="inline-flex items-center gap-2 border border-brand-mint/40 bg-brand/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-mint">
            <span className="h-1.5 w-1.5 bg-brand-mint" />
            บริษัทรับทำเสาเข็มเจาะ
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            <span className="text-brand-mint">A.R.T.</span>BOREPILE
            <br />
            <span className="text-2xl font-semibold text-white/85 sm:text-3xl">
              เสาเข็มเจาะ · ไมโครไพล์ · รถสว่านเจาะ
            </span>
          </h1>

          <p className="mt-6 max-w-lg leading-relaxed text-white/70">
            รับทำ<strong className="font-semibold text-white">เสาเข็มเจาะระบบแห้งและระบบเปียก ขนาด 35, 40, 50, 60 ซม.
            เสาเข็มไมโครไพล์ และรถสว่านเจาะ</strong> ทีมงานเจาะเสาเข็มกว่า 20 ทีม
            กำลังคนกว่า 100 คน รับงานทุกขนาด
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-mint bg-brand px-6 py-3.5 text-base font-bold text-white transition hover:-translate-y-0.5 hover:shadow-hard-brand"
            >
              <PhoneIcon className="h-5 w-5" />
              โทรปรึกษาฟรี {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 bg-[#06C755] px-6 py-3.5 text-base font-bold text-white transition hover:-translate-y-0.5 hover:border-white/40"
            >
              <LineIcon className="h-5 w-5" />
              LINE {SITE.line.id}
            </a>
          </div>

          <div className="mt-10 flex divide-x divide-white/15 border-t border-white/15 pt-6">
            {SITE.stats.map((s) => (
              <div key={s.l} className="flex-1 px-4 first:pl-0">
                <p className="font-mono text-2xl font-bold text-brand-mint sm:text-3xl">{s.n}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/60">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ฝั่งขวา: ภาพหน้างานจริง */}
      <div className="relative min-h-[46vh] lg:min-h-0">
        <Image
          src="/images/home/hero-bg.webp"
          alt="ทีมงาน A.R.T.BOREPILE เจาะเสาเข็มหน้างานก่อสร้างกลางเมือง"
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-ink/40 lg:via-transparent lg:to-transparent" />
        <a
          href="#services"
          className="absolute bottom-5 right-5 inline-flex items-center gap-2 border-2 border-ink bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-ink shadow-hard-sm transition hover:-translate-y-0.5"
        >
          ดูบริการทั้งหมด ↓
        </a>
      </div>
    </section>
  );
}
