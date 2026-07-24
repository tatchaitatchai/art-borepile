// ข้อมูลกลางของบริษัท — แก้ไขที่นี่ที่เดียว ใช้ทั้งเว็บ
export const SITE = {
  brandName: "A.R.T.BOREPILE",
  brandShort: "A.R.T.",
  brandFull: "บริษัท เออาร์ที เสาเข็มเจาะ จำกัด",
  brandFullEn: "A.R.T.BOREPILE CO., LTD.",
  tagline: "บริษัทรับทำเสาเข็มเจาะ ระบบแห้ง-เปียก ไมโครไพล์ และรถสว่านเจาะ",
  description:
    "A.R.T.BOREPILE บริษัทรับทำเสาเข็มเจาะ ระบบแห้งและระบบเปียก ขนาด 35, 40, 50, 60 ซม. เสาเข็มไมโครไพล์ และให้บริการรถสว่านเจาะ ทีมงานเจาะเสาเข็มกว่า 20 ทีม กำลังคนกว่า 100 คน รับงานทุกขนาดโครงการ",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://xn--22c5b5af0bpa4bd2a9igc3h1c.com",
  phone: "0899226552",
  phoneDisplay: "089-922-6552",
  phoneContact: "คุณธาดาดล",
  email: "art.bpile@gmail.com",
  line: {
    id: "totalnote",
    url: "https://line.me/ti/p/LL0flFiAZi",
  },
  address: {
    street: "998/93 หมู่ 5 ถนนสุขุมวิท",
    subDistrict: "ตำบลท้ายบ้านใหม่",
    district: "อำเภอเมืองสมุทรปราการ",
    province: "จังหวัดสมุทรปราการ",
    postalCode: "10280",
    full: "998/93 หมู่ 5 ถนนสุขุมวิท ตำบลท้ายบ้านใหม่ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ 10280",
  },
  stats: [
    { n: "20+", l: "ทีมเจาะเสาเข็ม" },
    { n: "100+", l: "กำลังคนพร้อมทำงาน" },
    { n: "4", l: "บริการหลัก" },
  ],
} as const;

export const navigation = [
  { name: "หน้าแรก", href: "/" },
  { name: "เสาเข็มเจาะ", href: "/bored-pile" },
  { name: "รถสว่านเจาะ", href: "/drilling-truck" },
  { name: "ไมโครไพล์", href: "/micropile" },
  { name: "ติดต่อเรา", href: "/contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: "dry" | "wet" | "micropile" | "truck";
  href: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "dry-system",
    title: "เสาเข็มเจาะระบบแห้ง",
    short: "DRY SYSTEM BORED PILE",
    description:
      "เจาะด้วยขาสามขา ขนาด 35, 40, 50, 60 ซม. สั่นสะเทือนน้อย เหมาะพื้นที่ใกล้อาคารข้างเคียง",
    icon: "dry",
    href: "/bored-pile",
    image: "/images/bored-pile/bored-pile-01.webp",
  },
  {
    slug: "wet-system",
    title: "เสาเข็มเจาะระบบเปียก",
    short: "WET SYSTEM BORED PILE",
    description:
      "ใช้สารเคมีป้องกันดินยุบตัวขณะเจาะ เจาะได้ลึกถึงชั้นดินแข็งหรือชั้นทราย รับน้ำหนักได้สูง",
    icon: "wet",
    href: "/bored-pile",
    image: "/images/bored-pile/bored-pile-05.webp",
  },
  {
    slug: "micropile",
    title: "เสาเข็มไมโครไพล์",
    short: "MICROPILE",
    description:
      "เหมาะพื้นที่แคบ หลังคาเตี้ย เลือกได้ทั้งเสาเข็มไอ (18x18, 22x22 ซม.) และเสาเข็มหกเหลี่ยม",
    icon: "micropile",
    href: "/micropile",
    image: "/images/micropile/micropile-01.webp",
  },
  {
    slug: "drilling-truck",
    title: "รถสว่านเจาะ",
    short: "DRILLING TRUCK",
    description:
      "บริการรถสว่านเจาะ เคลื่อนย้ายเข้าไซต์งานได้รวดเร็ว เจาะได้ลึก 18-20 เมตร งานเสร็จไว",
    icon: "truck",
    href: "/drilling-truck",
    image: "/images/drilling-truck/drilling-truck-01.webp",
  },
];

export const ADVANTAGES = [
  {
    title: "ทีมงานมืออาชีพ ประสบการณ์สูง",
    description: "ทีมช่างผ่านงานเจาะเสาเข็มมาแล้วหลากหลายโครงการ ทำงานตามมาตรฐานวิศวกรรม",
  },
  {
    title: "เครื่องจักรพร้อม ไม่มีงานล่าช้า",
    description: "มีทีมเจาะเสาเข็มกว่า 20 ทีม กำลังคนกว่า 100 คน รองรับงานหลายไซต์พร้อมกัน",
  },
  {
    title: "วัสดุได้มาตรฐาน",
    description: "เหล็กเสริมและคอนกรีตกำลังอัด 240-280 ksc. ตามแบบวิศวกรรมทุกงาน",
  },
  {
    title: "สำรวจหน้างานให้คำปรึกษาฟรี",
    description: "ลงพื้นที่สำรวจหน้างานจริงก่อนเริ่มงาน แนะนำขนาดและระบบเสาเข็มที่เหมาะสม",
  },
  {
    title: "ตรวจสอบคุณภาพเสาเข็มได้",
    description: "รองรับการทดสอบความสมบูรณ์ของเสาเข็ม (Seismic Test) หลังก่อสร้างแล้วเสร็จ",
  },
  {
    title: "รับงานทุกขนาด",
    description: "ตั้งแต่บ้านพักอาศัย งานต่อเติม ไปจนถึงโรงงานและอาคารขนาดใหญ่",
  },
] as const;

export const CLIENTS = [
  { name: "Thai Shimizu", image: "/images/home/client-thai-shimizu.webp" },
  { name: "Italian-Thai Development PCL.", image: "/images/home/client-italian-thai.webp" },
  { name: "Brickwhale Construction", image: "/images/home/client-brickwhale.webp" },
  { name: "Channakorn Engineering", image: "/images/home/client-channakorn.webp" },
  { name: "T. Peeragrich", image: "/images/home/client-t-peeragrich.webp" },
  { name: "Charn Issara", image: "/images/home/client-charnissara.webp" },
] as const;

export const PROCESS_STEPS = [
  "ตั้งเครื่องเจาะและปรับระดับตำแหน่งเสาเข็มตามแบบ",
  "ใส่ปลอกเหล็กชั่วคราว (Casing) ป้องกันดินยุบตัว",
  "เจาะดินตามลำดับจนถึงระดับความลึกที่กำหนด",
  "ใส่เหล็กเสริม (SD40 / SR24) ตามแบบวิศวกรรม",
  "เทคอนกรีตกำลังอัด 240-280 ksc. ลงเสาเข็ม",
  "ถอนปลอกเหล็กชั่วคราวออก เสร็จสิ้นการเจาะเสาเข็ม 1 ต้น",
] as const;
