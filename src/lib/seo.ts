import type { Metadata } from "next";
import { SITE } from "./site";

export const defaultKeywords = [
  "เสาเข็มเจาะ",
  "รับทำเสาเข็มเจาะ",
  "เสาเข็มเจาะราคาถูก",
  "เสาเข็มเจาะระบบแห้ง",
  "เสาเข็มเจาะระบบเปียก",
  "เสาเข็มไมโครไพล์",
  "ไมโครไพล์",
  "รถสว่านเจาะ",
  "เสาเข็มเจาะสามขา",
  "เสาเข็มเจาะสมุทรปราการ",
  "เสาเข็มเจาะ กรุงเทพ",
  "A.R.T.BOREPILE",
  "เออาร์ทีเสาเข็มเจาะ",
];

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = image ?? "/images/home/hero-bg.webp";

  return {
    title,
    description,
    keywords: keywords ?? defaultKeywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "th_TH",
      url,
      siteName: SITE.brandName,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
