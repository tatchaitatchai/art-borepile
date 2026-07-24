import Image from "next/image";
import { SITE } from "@/lib/site";
import { PhoneIcon, LineIcon } from "./icons";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Image
        src="/images/home/hero-bg.webp"
        alt="ทีมงาน A.R.T.BOREPILE เจาะเสาเข็มหน้างานก่อสร้างกลางเมือง"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/60" />

      <div className="relative mx-auto w-full max-w-4xl px-4 pt-28 pb-20 text-center text-white">
        <div className="animate-fade-up">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mint/40 bg-brand/15 px-4 py-1.5 text-sm font-medium text-brand-mint backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-brand-mint" />
              บริษัทรับทำเสาเข็มเจาะ
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-brand-mint to-brand-light bg-clip-text text-transparent">
              A.R.T.BOREPILE
            </span>
            <br />
            เสาเข็มเจาะ ไมโครไพล์ รถสว่านเจาะ
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            รับทำ<strong className="font-semibold">เสาเข็มเจาะระบบแห้งและระบบเปียก ขนาด 35, 40, 50, 60 ซม.
            เสาเข็มไมโครไพล์ และรถสว่านเจาะ</strong> ทีมงานเจาะเสาเข็มกว่า 20 ทีม
            กำลังคนกว่า 100 คน รับงานทุกขนาด
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
            >
              <PhoneIcon className="h-5 w-5" />
              โทรปรึกษาฟรี {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition hover:bg-[#05b54c]"
            >
              <LineIcon className="h-5 w-5" />
              ติดต่อ LINE {SITE.line.id}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              ดูบริการทั้งหมด
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-8 sm:gap-14">
            {SITE.stats.map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-2xl font-bold text-brand-mint sm:text-3xl">{s.n}</p>
                <p className="text-xs text-white/70 sm:text-sm">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
