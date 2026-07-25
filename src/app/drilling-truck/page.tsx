import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import MobileContactBar from "@/components/MobileContactBar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/ui/GalleryGrid";
import CtaSection from "@/components/ui/CtaSection";
import ProcessSteps from "@/components/ProcessSteps";
import { CheckIcon } from "@/components/icons";
import { drillingTruckGallery } from "@/data/galleries";
import { PROCESS_STEPS, SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const title = "รถสว่านเจาะ";
const description =
  "บริการรถสว่านเจาะเสาเข็ม เคลื่อนย้ายเข้าไซต์งานได้รวดเร็ว เจาะได้ลึก 18-20 เมตร งานเสร็จไวกว่าเสาเข็มเจาะสามขาแบบเดิม เหมาะกับงานที่ต้องการความรวดเร็ว";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/drilling-truck",
  image: drillingTruckGallery[0].src,
});

const specs = [
  { label: "ระบบเจาะ", value: "ระบบแห้งหรือระบบเปียก" },
  { label: "ขนาดเสาเข็ม", value: "35, 40, 50, 60 ซม." },
  { label: "ความลึกเจาะ", value: "ประมาณ 18-20 เมตร" },
  { label: "กำลังอัดคอนกรีต", value: "240-280 ksc. (ทรงกระบอก)" },
];

const advantages = [
  "สั่นสะเทือนและเสียงดังน้อยกว่าการตอกเสาเข็ม",
  "ป้องกันความเสียหายต่ออาคารข้างเคียงจากดินเคลื่อนตัว",
  "เคลื่อนย้ายเข้าไซต์งานได้รวดเร็ว เริ่มงานได้ทันที",
  "ตรวจสอบความสมบูรณ์ของเสาเข็มที่ทำเสร็จแล้วได้",
  "งานเสร็จเร็วกว่าการเจาะเสาเข็มด้วยขาสามขาแบบเดิม",
];

export default function DrillingTruckPage() {
  return (
    <>
      <Navbar />
      <main>
        <Breadcrumbs items={[{ name: "หน้าแรก", href: "/" }, { name: "รถสว่านเจาะ", href: "/drilling-truck" }]} />

        <section className="mx-auto max-w-4xl px-4 py-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">บริการของเรา</span>
          <h1 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/65">{description}</p>
        </section>

        <section className="bg-black/[0.02] py-16">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2">
            <div className="border-2 border-ink bg-white p-7">
              <h2 className="text-xl font-bold text-ink">สเปกและความสามารถ</h2>
              <dl className="mt-5 divide-y divide-black/5">
                {specs.map((s) => (
                  <div key={s.label} className="flex items-center justify-between py-3 text-sm">
                    <dt className="text-ink/60">{s.label}</dt>
                    <dd className="font-semibold text-ink">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border-2 border-ink bg-white p-7">
              <h2 className="text-xl font-bold text-ink">ข้อดีของรถสว่านเจาะ</h2>
              <ul className="mt-5 space-y-2.5">
                {advantages.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <span className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center border border-brand bg-brand/15 text-brand">
                      <CheckIcon className="h-2.5 w-2.5" />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeading eyebrow="ขั้นตอนการทำงาน" title="กระบวนการเจาะเสาเข็มด้วยรถสว่าน" />
            <div className="mt-12">
              <ProcessSteps steps={PROCESS_STEPS} />
            </div>
          </div>
        </section>

        <section className="bg-black/[0.02] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeading eyebrow="ผลงานของเรา" title="หน้างานจริงรถสว่านเจาะ" />
            <div className="mt-10">
              <GalleryGrid images={drillingTruckGallery} />
            </div>
          </div>
        </section>

        <CtaSection
          title="สอบถามบริการรถสว่านเจาะ"
          description={`โทร ${SITE.phoneContact} ${SITE.phoneDisplay} หรือแชท LINE เพื่อรับคำปรึกษาฟรี`}
        />
      </main>
      <Footer />
      <FloatingContact />
      <MobileContactBar />
    </>
  );
}
