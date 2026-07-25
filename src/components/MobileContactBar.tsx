import { SITE } from "@/lib/site";
import { PhoneIcon, LineIcon, MailIcon } from "./icons";

export default function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t-2 border-ink bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={`mailto:${SITE.email}`}
        aria-label="อีเมล"
        className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-ink/70"
      >
        <MailIcon className="h-5 w-5" />
        <span className="text-[11px] font-medium">อีเมล</span>
      </a>
      <a
        href={SITE.line.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LINE"
        className="flex flex-1 flex-col items-center gap-0.5 bg-[#06C755] py-2.5 text-white"
      >
        <LineIcon className="h-5 w-5" />
        <span className="text-[11px] font-semibold">LINE</span>
      </a>
      <a
        href={`tel:${SITE.phone}`}
        aria-label={`โทร ${SITE.phoneDisplay}`}
        className="flex flex-1 flex-col items-center gap-0.5 bg-brand py-2.5 text-white"
      >
        <PhoneIcon className="h-5 w-5" />
        <span className="text-[11px] font-semibold">โทรเลย</span>
      </a>
    </div>
  );
}
