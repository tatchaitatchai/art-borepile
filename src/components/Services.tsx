import { SERVICES, SITE } from "@/lib/site";
import { ServiceIcon, PhoneIcon } from "./icons";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">บริการของเรา</span>
          <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">งานเสาเข็มเจาะ ครบจบที่เดียว</h2>
          <p className="mt-4 text-ink/60">
            รับงานทั้งบ้านพักอาศัย งานต่อเติม อาคาร และโรงงาน ด้วยเครื่องจักรและทีมช่างผู้ชำนาญ
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={s.href}
              className="group flex flex-col items-center rounded-2xl border-2 border-black/5 bg-white p-7 text-center transition hover:-translate-y-1 hover:border-brand"
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-lg shadow-brand/30">
                <ServiceIcon name={s.icon} className="h-8 w-8" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="text-xs font-medium uppercase tracking-wide text-brand">{s.short}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.description}</p>
              <span className="mt-4 text-sm font-semibold text-brand opacity-0 transition group-hover:opacity-100">
                ดูรายละเอียด →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark"
          >
            <PhoneIcon className="h-5 w-5" />
            สอบถาม/ขอใบเสนอราคา {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
