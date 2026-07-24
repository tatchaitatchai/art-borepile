import { SITE } from "@/lib/site";
import { PhoneIcon, LineIcon } from "./icons";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-40 hidden flex-col gap-3 lg:flex">
      <a
        href={SITE.line.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LINE"
        className="inline-flex h-13 w-13 items-center justify-center rounded-full bg-[#06C755] p-3.5 text-white shadow-lg transition hover:scale-110"
      >
        <LineIcon className="h-6 w-6" />
      </a>
      <a
        href={`tel:${SITE.phone}`}
        aria-label={`โทร ${SITE.phoneDisplay}`}
        className="inline-flex h-13 w-13 items-center justify-center rounded-full bg-brand p-3.5 text-white shadow-lg shadow-brand/40 transition hover:scale-110"
      >
        <PhoneIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
