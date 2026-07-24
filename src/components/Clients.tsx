import Image from "next/image";
import { CLIENTS } from "@/lib/site";

export default function Clients() {
  return (
    <section className="bg-black/[0.02] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-ink/50">
          ลูกค้าและพันธมิตรที่ไว้วางใจเรา
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {CLIENTS.map((c) => (
            <div
              key={c.name}
              className="flex h-20 items-center justify-center rounded-xl bg-white p-4 shadow-sm grayscale transition hover:grayscale-0"
            >
              <div className="relative h-full w-full">
                <Image src={c.image} alt={c.name} fill sizes="160px" className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
