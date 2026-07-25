import { SERVICES, SITE } from "@/lib/site";
import { ServiceIcon, PhoneIcon } from "./icons";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col justify-between gap-4 border-b-2 border-ink pb-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">บริการของเรา</span>
            <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">งานเสาเข็มเจาะ ครบจบที่เดียว</h2>
          </div>
          <p className="max-w-sm text-sm text-ink/60">
            รับงานทั้งบ้านพักอาศัย งานต่อเติม อาคาร และโรงงาน ด้วยเครื่องจักรและทีมช่างผู้ชำนาญ
          </p>
        </div>

        <div className="mt-2 divide-y-2 divide-ink/10">
          {SERVICES.map((s, i) => (
            <a
              key={s.slug}
              href={s.href}
              className="group flex flex-col gap-5 py-7 transition hover:bg-brand/4 sm:flex-row sm:items-center"
            >
              <span className="font-mono text-3xl font-bold text-ink/15 group-hover:text-brand sm:w-16 sm:shrink-0 sm:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center border-2 border-ink bg-brand text-white transition group-hover:bg-ink">
                <ServiceIcon name={s.icon} className="h-7 w-7" />
              </span>

              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-brand">{s.short}</p>
                <h3 className="mt-1 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{s.description}</p>
              </div>

              <span className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-bold text-ink/40 transition group-hover:translate-x-1 group-hover:text-brand sm:self-center">
                ดูรายละเอียด →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-hard-sm"
          >
            <PhoneIcon className="h-5 w-5" />
            สอบถาม/ขอใบเสนอราคา {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
