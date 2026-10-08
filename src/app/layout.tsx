import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://weddinginvite-eu8m.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Arham Zubair & Umaima Akhtar | Walima Reception Invitation",
  description:
    "Mr. & Mrs. Zubair Akhtar cordially invite you at the Walima Dinner Reception celebrating the marriage of Arham Zubair to Umaima Akhtar.",
  openGraph: {
    title: "Arham Zubair & Umaima Akhtar | Walima Reception Invitation",
    description:
      "Mr. & Mrs. Zubair Akhtar cordially invite you at the Walima Dinner Reception celebrating the marriage of Arham Zubair to Umaima Akhtar.",
    url: siteUrl,
    siteName: "Arham & Umaima Wedding",
    images: [
      {
        url: "/images/og_preview.jpg",
        width: 1200,
        height: 630,
        alt: "Arham Zubair & Umaima Akhtar Walima Reception",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arham Zubair & Umaima Akhtar | Walima Reception Invitation",
    description:
      "Mr. & Mrs. Zubair Akhtar cordially invite you at the Walima Dinner Reception celebrating the marriage of Arham Zubair to Umaima Akhtar.",
    images: ["/images/og_preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Alex+Brush&family=Allura&family=Italianno&family=Parisienne&family=Tangerine:wght@400;700&family=Marck+Script&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,600;1,6..96,400&family=Prata&family=Marcellus&family=Cinzel:wght@500;600;700;800&family=Cinzel+Decorative:wght@400;700&family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Direct Open Graph Meta Tags for WhatsApp & Social Media Preview Cards */}
        <meta property="og:image" content="https://weddinginvite-eu8m.vercel.app/images/og_preview.jpg" />
        <meta property="og:image:secure_url" content="https://weddinginvite-eu8m.vercel.app/images/og_preview.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Arham Zubair & Umaima Akhtar Walima Reception" />
      </head>
      <body>{children}</body>
    </html>
  );
}
