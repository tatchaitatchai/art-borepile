import { SITE } from "@/lib/site";
import { PhoneIcon, MailIcon, LineIcon, PinIcon } from "./icons";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="ติดต่อเรา"
          title="สอบถามงาน หรือขอใบเสนอราคา"
          description="ทีมงานพร้อมให้คำปรึกษาและลงพื้นที่สำรวจหน้างานฟรี"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={`tel:${SITE.phone}`}
            className="flex flex-col items-center gap-3 rounded-2xl border-2 border-black/5 p-6 text-center transition hover:-translate-y-1 hover:border-brand"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
              <PhoneIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-bold text-ink">{SITE.phoneContact}</p>
              <p className="text-sm text-ink/60">{SITE.phoneDisplay}</p>
            </div>
          </a>

          <a
            href={SITE.line.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border-2 border-black/5 p-6 text-center transition hover:-translate-y-1 hover:border-[#06C755]"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#06C755]/10 text-[#06C755]">
              <LineIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-bold text-ink">LINE</p>
              <p className="text-sm text-ink/60">{SITE.line.id}</p>
            </div>
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="flex flex-col items-center gap-3 rounded-2xl border-2 border-black/5 p-6 text-center transition hover:-translate-y-1 hover:border-brand"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
              <MailIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-bold text-ink">อีเมล</p>
              <p className="text-sm break-all text-ink/60">{SITE.email}</p>
            </div>
          </a>

          <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-black/5 p-6 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
              <PinIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-bold text-ink">ที่อยู่</p>
              <p className="text-sm text-ink/60">{SITE.address.province}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
