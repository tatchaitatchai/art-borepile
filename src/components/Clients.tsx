import Image from "next/image";
import { CLIENTS } from "@/lib/site";

export default function Clients() {
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section className="border-y-2 border-ink bg-ink py-10">
      <p className="px-4 text-center text-xs font-bold uppercase tracking-widest text-white/50">
        ลูกค้าและพันธมิตรที่ไว้วางใจเรา
      </p>
      <div className="relative mt-7 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-12">
          {track.map((c, i) => (
            <div key={`${c.name}-${i}`} className="flex h-14 w-36 shrink-0 items-center justify-center">
              <div className="relative h-full w-full opacity-70 grayscale invert transition hover:opacity-100">
                <Image src={c.image} alt={c.name} fill sizes="144px" className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
