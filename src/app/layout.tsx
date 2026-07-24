import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import { defaultKeywords } from "@/lib/seo";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.brandName} | รับทำเสาเข็มเจาะ ไมโครไพล์ รถสว่านเจาะ`,
    template: `%s | ${SITE.brandName}`,
  },
  description: SITE.description,
  keywords: defaultKeywords,
  authors: [{ name: SITE.brandFull }],
  creator: SITE.brandFull,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE.url,
    siteName: SITE.brandName,
    title: `${SITE.brandName} | รับทำเสาเข็มเจาะ ไมโครไพล์ รถสว่านเจาะ`,
    description: SITE.description,
    images: [{ url: "/images/home/hero-bg.webp", width: 1920, height: 1440, alt: SITE.brandName }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.brandName,
    description: SITE.description,
    images: ["/images/home/hero-bg.webp"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo/logo-mark.webp", apple: "/images/logo/logo-mark.webp" },
  category: "construction",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: SITE.brandFull,
  alternateName: SITE.brandName,
  image: `${SITE.url}/images/logo/logo-full.webp`,
  logo: `${SITE.url}/images/logo/logo-mark.webp`,
  url: SITE.url,
  telephone: `+66${SITE.phone.slice(1)}`,
  email: SITE.email,
  description: SITE.description,
  priceRange: "฿฿",
  areaServed: { "@type": "Country", name: "ประเทศไทย" },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.district,
    addressRegion: SITE.address.province,
    postalCode: SITE.address.postalCode,
    addressCountry: "TH",
  },
  makesOffer: ["เสาเข็มเจาะระบบแห้ง", "เสาเข็มเจาะระบบเปียก", "เสาเข็มไมโครไพล์", "รถสว่านเจาะ"].map(
    (name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    }),
  ),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${prompt.variable} antialiased`}>
      <head>
        <link rel="preload" as="image" href="/images/home/hero-bg.webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/logo/logo-mark.webp" fetchPriority="high" />
      </head>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
