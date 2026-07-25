import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import { PhoneIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-ink px-4 pt-24 text-center">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />
        <p className="relative font-mono text-6xl font-bold text-brand-mint sm:text-8xl">404</p>
        <h1 className="relative mt-4 text-3xl font-bold text-white sm:text-4xl">ไม่พบหน้าที่คุณต้องการ</h1>
        <p className="relative mt-4 max-w-md text-white/60">
          หน้านี้อาจถูกย้ายหรือไม่มีอยู่จริง ลองกลับไปหน้าแรกหรือติดต่อทีมงานของเรา
        </p>
        <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="/" className="inline-flex items-center justify-center border-2 border-white/20 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:border-white/40">
            กลับหน้าแรก
          </a>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center justify-center gap-2 border-2 border-brand-mint bg-brand px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-hard-brand"
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
