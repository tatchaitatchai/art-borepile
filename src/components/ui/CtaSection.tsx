import { SITE } from "@/lib/site";
import { PhoneIcon, LineIcon } from "../icons";

export default function CtaSection({
  title = "พร้อมเริ่มงานเสาเข็มเจาะของคุณแล้วหรือยัง?",
  description = "ติดต่อทีมงานเพื่อสำรวจหน้างานและรับคำปรึกษาฟรี ไม่มีค่าใช้จ่าย",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-20">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-3 text-white/70">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-brand-mint bg-brand px-7 py-3.5 text-base font-bold text-white transition hover:-translate-y-0.5 hover:shadow-hard-brand"
          >
            <PhoneIcon className="h-5 w-5" />
            {SITE.phoneContact} {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.line.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 bg-[#06C755] px-7 py-3.5 text-base font-bold text-white transition hover:-translate-y-0.5 hover:border-white/40"
          >
            <LineIcon className="h-5 w-5" />
            ติดต่อ LINE {SITE.line.id}
          </a>
        </div>
      </div>
    </section>
  );
}
