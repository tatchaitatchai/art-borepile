import { ADVANTAGES } from "@/lib/site";
import SectionHeading from "./ui/SectionHeading";

export default function WhyUs() {
  return (
    <section id="why" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="จุดเด่นของเรา"
          title="ทำไมต้องเลือก A.R.T.BOREPILE"
          description="มาตรฐานงานเจาะเสาเข็ม ที่เจ้าของโครงการมั่นใจได้"
        />

        <div className="mt-2 grid divide-y-2 divide-ink/10 sm:grid-cols-2 sm:gap-x-8 sm:divide-y-0 lg:grid-cols-3">
          {ADVANTAGES.map((a, i) => (
            <div key={a.title} className="flex gap-4 border-t-2 border-ink/10 py-7 first:border-t-0 sm:border-t-0 sm:border-b-2 sm:py-6">
              <span className="font-mono text-2xl font-bold text-brand/40">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-bold text-ink">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
