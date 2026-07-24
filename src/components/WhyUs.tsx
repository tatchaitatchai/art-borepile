import { ADVANTAGES } from "@/lib/site";
import { CheckIcon } from "./icons";
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((a) => (
            <div key={a.title} className="flex gap-4 rounded-2xl border border-black/5 bg-black/[0.02] p-6">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <CheckIcon className="h-4 w-4" />
              </span>
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
