import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Arham Zubair & Umaima Akhtar | Walima Reception Invitation",
  description:
    "Mr. & Mrs. Zubair Akhtar cordially invite you at the Walima Dinner Reception celebrating the marriage of Arham Zubair to Umaima Akhtar.",
  openGraph: {
    title: "Arham Zubair & Umaima Akhtar | Walima Reception Invitation",
    description:
      "Mr. & Mrs. Zubair Akhtar cordially invite you at the Walima Dinner Reception celebrating the marriage of Arham Zubair to Umaima Akhtar.",
    images: [
      {
        url: "/images/olive_landscape.jpg",
        width: 1200,
        height: 630,
        alt: "Arham Zubair & Umaima Akhtar Walima Reception",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arham Zubair & Umaima Akhtar | Walima Reception Invitation",
    description:
      "Mr. & Mrs. Zubair Akhtar cordially invite you at the Walima Dinner Reception celebrating the marriage of Arham Zubair to Umaima Akhtar.",
    images: ["/images/olive_landscape.jpg"],
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
      </head>
      <body>{children}</body>
    </html>
  );
}
