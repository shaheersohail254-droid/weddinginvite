import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
      <body>{children}</body>
    </html>
  );
}
