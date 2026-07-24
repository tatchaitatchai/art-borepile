import Image from "next/image";
import { SITE } from "@/lib/site";
import { CheckIcon } from "./icons";

const points = [
  "เสาเข็มเจาะระบบแห้งและระบบเปียก ขนาด 35, 40, 50, 60 ซม.",
  "เหล็กเสริมมาตรฐาน SD40 / SR24 และคอนกรีตกำลังอัด 240-280 ksc.",
  "สำรวจหน้างานจริงก่อนเริ่มงาน ให้คำปรึกษาฟรี",
  "รองรับการทดสอบความสมบูรณ์ของเสาเข็มหลังก่อสร้าง",
];

export default function About() {
  return (
    <section id="about" className="bg-black/[0.02] py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/bored-pile/bored-pile-04.webp"
            alt="รถโม่ปูนเทคอนกรีตเสาเข็มเจาะพร้อมตึกสูงด้านหลัง"
            fill
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">เกี่ยวกับเรา</span>
          <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">
            {SITE.brandFull}
          </h2>
          <p className="mt-4 leading-relaxed text-ink/65">
            A.R.T.BOREPILE บริษัทรับทำเสาเข็มเจาะ (Bored Pile) สำหรับงานฐานรากอาคารและสิ่งปลูกสร้างทุกประเภท
            ด้วยทีมเจาะเสาเข็มกว่า 20 ทีม กำลังคนกว่า 100 คน รองรับงานได้ทั้งโครงการขนาดเล็กและขนาดใหญ่
            พร้อมทีมช่างผู้ชำนาญและวัสดุที่ได้มาตรฐานวิศวกรรมในทุกงาน
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-ink/75">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
