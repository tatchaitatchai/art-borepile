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

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={`tel:${SITE.phone}`}
            className="group flex items-center gap-4 border-2 border-ink p-6 transition hover:-translate-y-0.5 hover:bg-brand/5 hover:shadow-hard-sm"
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center border-2 border-ink bg-brand text-white transition group-hover:bg-ink">
              <PhoneIcon className="h-5 w-5" />
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
            className="group flex items-center gap-4 border-2 border-ink p-6 transition hover:-translate-y-0.5 hover:bg-[#06C755]/5 hover:shadow-hard-sm"
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center border-2 border-ink bg-[#06C755] text-white transition group-hover:bg-ink">
              <LineIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-bold text-ink">LINE</p>
              <p className="text-sm text-ink/60">{SITE.line.id}</p>
            </div>
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="group flex items-center gap-4 border-2 border-ink p-6 transition hover:-translate-y-0.5 hover:bg-brand/5 hover:shadow-hard-sm"
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center border-2 border-ink bg-brand text-white transition group-hover:bg-ink">
              <MailIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-bold text-ink">อีเมล</p>
              <p className="text-sm break-all text-ink/60">{SITE.email}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 border-2 border-ink p-6">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center border-2 border-ink bg-brand text-white">
              <PinIcon className="h-5 w-5" />
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
