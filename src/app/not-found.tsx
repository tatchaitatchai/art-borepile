import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import { PhoneIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">404</p>
        <h1 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">ไม่พบหน้าที่คุณต้องการ</h1>
        <p className="mt-4 max-w-md text-ink/60">
          หน้านี้อาจถูกย้ายหรือไม่มีอยู่จริง ลองกลับไปหน้าแรกหรือติดต่อทีมงานของเรา
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="/" className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark">
            กลับหน้าแรก
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-brand-dark"
          >
            <PhoneIcon className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
