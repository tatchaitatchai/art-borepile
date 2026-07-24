import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import MobileContactBar from "@/components/MobileContactBar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { PhoneIcon, MailIcon, LineIcon, PinIcon } from "@/components/icons";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const title = "ติดต่อเรา";
const description = `ติดต่อ ${SITE.brandFull} สอบถามงานเสาเข็มเจาะ หรือขอใบเสนอราคา โทร ${SITE.phoneDisplay} อีเมล ${SITE.email} หรือแชท LINE`;

export const metadata: Metadata = buildMetadata({ title, description, path: "/contact" });

const mapQuery = encodeURIComponent(SITE.address.full);

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <Breadcrumbs items={[{ name: "หน้าแรก", href: "/" }, { name: "ติดต่อเรา", href: "/contact" }]} />

        <section className="mx-auto max-w-4xl px-4 py-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">ติดต่อเรา</span>
          <h1 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">พร้อมให้คำปรึกษางานเสาเข็มเจาะ</h1>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/65">
            สอบถามรายละเอียดงาน ขอใบเสนอราคา หรือนัดสำรวจหน้างาน ทีมงานยินดีให้คำปรึกษาฟรี
          </p>
        </section>

        <section className="pb-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-4 rounded-2xl border-2 border-black/5 p-6 transition hover:-translate-y-0.5 hover:border-brand"
              >
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-bold text-ink">{SITE.phoneContact}</p>
                  <p className="text-ink/60">{SITE.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={SITE.line.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border-2 border-black/5 p-6 transition hover:-translate-y-0.5 hover:border-[#06C755]"
              >
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#06C755]/10 text-[#06C755]">
                  <LineIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-bold text-ink">LINE ID</p>
                  <p className="text-ink/60">{SITE.line.id}</p>
                </div>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 rounded-2xl border-2 border-black/5 p-6 transition hover:-translate-y-0.5 hover:border-brand"
              >
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <MailIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-bold text-ink">อีเมล</p>
                  <p className="break-all text-ink/60">{SITE.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border-2 border-black/5 p-6">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <PinIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-bold text-ink">ที่อยู่บริษัท</p>
                  <address className="not-italic text-ink/60">{SITE.address.full}</address>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border-2 border-black/5 lg:col-span-3">
              <iframe
                title="แผนที่บริษัท เออาร์ที เสาเข็มเจาะ จำกัด"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
      <MobileContactBar />
    </>
  );
}
