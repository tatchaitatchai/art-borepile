import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import MobileContactBar from "@/components/MobileContactBar";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/ui/GalleryGrid";
import CtaSection from "@/components/ui/CtaSection";
import { CheckIcon } from "@/components/icons";
import { micropileGallery } from "@/data/galleries";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const title = "เสาเข็มไมโครไพล์";
const description =
  "รับตอกเสาเข็มไมโครไพล์ (Micropile) เหมาะสำหรับพื้นที่แคบและหลังคาเตี้ย เลือกได้ทั้งเสาเข็มไอตัน 18x18, 22x22 ซม. และเสาเข็มหกเหลี่ยม 20-30 ซม. ความยาวท่อนละ 1.50 เมตร";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/micropile",
  image: micropileGallery[0].src,
});

const pileTypes = [
  { name: "เสาเข็มไอ 18x18 ซม.", desc: "เสาเข็มตันหน้าตัดรูปตัวไอ รับน้ำหนักปานกลาง เหมาะงานต่อเติมบ้าน" },
  { name: "เสาเข็มไอ 22x22 ซม.", desc: "หน้าตัดใหญ่ขึ้น รับน้ำหนักได้มากกว่า เหมาะโครงสร้างขนาดกลาง" },
  { name: "เสาเข็มหกเหลี่ยม 20-30 ซม.", desc: "หน้าตัดกลวงหกเหลี่ยม น้ำหนักเบา ตอกง่ายในพื้นที่จำกัด" },
];

const useCases = [
  "งานต่อเติมบ้านที่ต้องการหลีกเลี่ยงแรงสั่นสะเทือนกับโครงสร้างเดิม",
  "พื้นที่แคบ ซอยเล็ก หรือหลังคาเตี้ยที่เครื่องจักรใหญ่เข้าไม่ได้",
  "งานฐานรากป้ายโฆษณา เสาไฟ หรือโครงสร้างขนาดเล็ก",
  "พื้นที่ใกล้ชิดอาคารข้างเคียงที่ต้องควบคุมแรงสั่นสะเทือน",
];

export default function MicropilePage() {
  return (
    <>
      <Navbar />
      <main>
        <Breadcrumbs items={[{ name: "หน้าแรก", href: "/" }, { name: "ไมโครไพล์", href: "/micropile" }]} />

        <section className="mx-auto max-w-4xl px-4 py-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">บริการของเรา</span>
          <h1 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink/65">{description}</p>
        </section>

        <section className="bg-black/[0.02] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-xl font-bold text-ink">เลือกขนาดเสาเข็มไมโครไพล์ได้ตามหน้างาน</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {pileTypes.map((p) => (
                <div key={p.name} className="border-2 border-ink bg-white p-6">
                  <h3 className="font-bold text-ink">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{p.desc}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-ink/55">
              ทุกท่อนยาว 1.50 เมตร ตอกลงไปทีละท่อนต่อเนื่องจนได้ระดับความลึกที่ต้องการหรือจนถึงชั้นดินแข็ง (Refusal)
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeading eyebrow="เหมาะกับงานแบบไหน" title="ไมโครไพล์ เหมาะกับพื้นที่แบบนี้" />
            <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
              {useCases.map((u) => (
                <li key={u} className="flex items-start gap-3 border-2 border-ink/10 bg-black/[0.02] p-5 text-sm text-ink/70">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center border border-brand bg-brand/15 text-brand">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-black/[0.02] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeading eyebrow="ผลงานของเรา" title="หน้างานจริงตอกเสาเข็มไมโครไพล์" />
            <div className="mt-10">
              <GalleryGrid images={micropileGallery} />
            </div>
          </div>
        </section>

        <CtaSection
          title="สอบถามเสาเข็มไมโครไพล์"
          description={`โทร ${SITE.phoneContact} ${SITE.phoneDisplay} หรือแชท LINE เพื่อรับคำปรึกษาฟรี`}
        />
      </main>
      <Footer />
      <FloatingContact />
      <MobileContactBar />
    </>
  );
}
