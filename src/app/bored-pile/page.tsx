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
import { boredPileGallery } from "@/data/galleries";
import { PROCESS_STEPS, SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const title = "เสาเข็มเจาะ ระบบแห้งและระบบเปียก";
const description =
  "รับทำเสาเข็มเจาะ (Bored Pile) ระบบแห้งและระบบเปียก ขนาด 35, 40, 50, 60 ซม. เจาะลึกถึงชั้นดินแข็ง สั่นสะเทือนน้อย ปลอดภัยต่ออาคารข้างเคียง โดยทีมช่างมืออาชีพ";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/bored-pile",
  image: boredPileGallery[0].src,
});

const sizes = ["35 ซม.", "40 ซม.", "50 ซม.", "60 ซม."];

const dryAdvantages = [
  "สั่นสะเทือนและเสียงดังน้อยกว่าการตอกเสาเข็ม",
  "ทำงานได้ในพื้นที่จำกัดหรือที่แคบ ความสูงจำกัด",
  "ป้องกันผลกระทบต่ออาคารข้างเคียงจากดินเคลื่อนตัว",
  "เคลื่อนย้ายเครื่องจักรเข้าไซต์งานได้รวดเร็ว เริ่มงานได้ทันที",
  "ตรวจสอบความสมบูรณ์ของเสาเข็มที่ทำเสร็จแล้วได้",
];

const wetAdvantages = [
  "ใช้สารเคมีป้องกันดินยุบตัวขณะเจาะ เจาะได้ลึกขึ้น",
  "เจาะถึงชั้นดินเหนียวแข็งหรือชั้นทรายได้แม่นยำ",
  "รับน้ำหนักบรรทุกได้สูงกว่าระบบแห้งในดินอ่อน",
  "เหมาะกับอาคารขนาดใหญ่ที่ต้องการกำลังรับน้ำหนักสูง",
  "งานเสร็จเร็วกว่าเสาเข็มเจาะระบบสามขาแบบเดิม",
];

export default function BoredPilePage() {
  return (
    <>
      <Navbar />
      <main>
        <Breadcrumbs items={[{ name: "หน้าแรก", href: "/" }, { name: "เสาเข็มเจาะ", href: "/bored-pile" }]} />

        <section className="mx-auto max-w-4xl px-4 py-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">บริการของเรา</span>
          <h1 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/65">{description}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {sizes.map((s) => (
              <span key={s} className="rounded-full bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand-dark">
                ขนาด {s}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-black/[0.02] py-16">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-white p-7">
              <h2 className="text-xl font-bold text-ink">เสาเข็มเจาะระบบแห้ง (Dry Process)</h2>
              <p className="mt-2 text-sm text-ink/60">
                เจาะด้วยขาสามขา เหมาะพื้นที่จำกัด ลึกประมาณ 18-24 เมตร จนถึงชั้นดินเหนียวแข็งหรือชั้นทรายแห้ง
              </p>
              <ul className="mt-5 space-y-2.5">
                {dryAdvantages.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <span className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                      <CheckIcon className="h-2.5 w-2.5" />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-7">
              <h2 className="text-xl font-bold text-ink">เสาเข็มเจาะระบบเปียก (Wet Process)</h2>
              <p className="mt-2 text-sm text-ink/60">
                เจาะลึกประมาณ 18-20 เมตร ใช้สารเคมีป้องกันดินยุบตัว เหมาะกับดินอ่อนหรือชั้นน้ำใต้ดินสูง
              </p>
              <ul className="mt-5 space-y-2.5">
                {wetAdvantages.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <span className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
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
            <SectionHeading
              eyebrow="ขั้นตอนการทำงาน"
              title="กระบวนการเจาะเสาเข็ม 6 ขั้นตอน"
              description={`เหล็กเสริมมาตรฐาน SD40 / SR24 และคอนกรีตกำลังอัด 240-280 ksc. ทุกงาน`}
            />
            <div className="mt-12">
              <ProcessSteps steps={PROCESS_STEPS} />
            </div>
          </div>
        </section>

        <section className="bg-black/[0.02] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeading eyebrow="ผลงานของเรา" title="หน้างานจริงเจาะเสาเข็ม" />
            <div className="mt-10">
              <GalleryGrid images={boredPileGallery} />
            </div>
          </div>
        </section>

        <CtaSection
          title="สอบถามเสาเข็มเจาะ ระบบแห้งหรือระบบเปียก"
          description={`โทร ${SITE.phoneContact} ${SITE.phoneDisplay} หรือแชท LINE เพื่อรับคำปรึกษาฟรี`}
        />
      </main>
      <Footer />
      <FloatingContact />
      <MobileContactBar />
    </>
  );
}
