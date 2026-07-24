# A.R.T.BOREPILE — เว็บไซต์บริษัท

เว็บไซต์ บริษัท เออาร์ที เสาเข็มเจาะ จำกัด (A.R.T.BOREPILE CO., LTD.) — รับทำเสาเข็มเจาะ
ระบบแห้ง/ระบบเปียก เสาเข็มไมโครไพล์ และรถสว่านเจาะ
สร้างด้วย Next.js (App Router) + TypeScript + Tailwind CSS v4 เน้น SEO และความเบา (static export, ภาพเป็น WebP ทั้งหมด)

<!-- deploy test: Cloudflare Workers Builds -->

สร้างใหม่จากเว็บไซต์เดิม `xn--22c5b5af0bpa4bd2a9igc3h1c.com` (เออาร์ทีเสาเข็มเจาะ.com)

## เริ่มใช้งาน

```bash
npm install      # ติดตั้ง dependency (ทำครั้งแรก)
npm run dev      # รันโหมดพัฒนา → http://localhost:3000
npm run build    # build production (static export → โฟลเดอร์ out/)
npm run start    # รัน production server (สำหรับพรีวิว)
```

ตั้งค่าโดเมนจริงก่อน deploy ผ่าน environment variable:

```bash
NEXT_PUBLIC_SITE_URL=https://xn--22c5b5af0bpa4bd2a9igc3h1c.com
```

## โครงสร้างโปรเจกต์

```
src/
├── app/
│   ├── page.tsx           # หน้าแรก
│   ├── bored-pile/        # เสาเข็มเจาะ (ระบบแห้ง/เปียก)
│   ├── drilling-truck/    # รถสว่านเจาะ
│   ├── micropile/         # เสาเข็มไมโครไพล์
│   ├── contact/           # ติดต่อเรา + แผนที่
│   ├── sitemap.ts, robots.ts
│   └── not-found.tsx
├── components/             # Navbar (sticky), Footer, FloatingContact,
│                            MobileContactBar, Hero, Services, About, WhyUs,
│                            Clients, Contact, ProcessSteps, ui/*
├── lib/
│   ├── site.ts             # ★ ข้อมูลบริษัท เบอร์โทร LINE ที่อยู่ เมนู บริการ ★
│   └── seo.ts               # helper สร้าง metadata ทุกหน้า
└── data/galleries.ts        # รูปภาพ + alt text ทุกแกลเลอรี

public/images/               # รูป WebP ทั้งหมด แยกโฟลเดอร์ตามหมวด (ย่อจาก 15MB เหลือ ~3.4MB)
```

แก้เบอร์โทร LINE อีเมล ที่อยู่ ได้ที่ไฟล์เดียว: `src/lib/site.ts`

## SEO ที่ทำไว้

- Metadata ครบทุกหน้า (title, description, keywords, canonical, OG, Twitter Card) ผ่าน `buildMetadata()`
- JSON-LD structured data (`GeneralContractor` + `Offer` ต่อบริการ) ใน `layout.tsx`
- `sitemap.xml` และ `robots.txt` สร้างอัตโนมัติ
- Semantic HTML, breadcrumb ทุกหน้าใน, `<address>` สำหรับที่อยู่
- ภาพทั้งหมดเป็น WebP, ใช้ `next/image` พร้อม `alt` ภาษาไทยทุกรูป
- `<html lang="th">`, `og:locale=th_TH`, ฟอนต์ไทย Prompt ผ่าน `next/font` (ไม่มี layout shift)
- Static export (SSG) ทั้งเว็บ โหลดเร็ว ไม่ต้องมี server

## ก่อน deploy จริง

1. ตั้ง `NEXT_PUBLIC_SITE_URL` เป็นโดเมนจริง
2. ยืนยันเว็บใน Google Search Console แล้ว submit sitemap
3. Deploy โฟลเดอร์ `out/` ขึ้น hosting แบบ static ได้ทันที (Vercel, Cloudflare Pages, ฯลฯ)

ช่องทางติดต่อ: คุณธาดาดล 089-922-6552 · art.bpile@gmail.com · LINE ID: totalnote
