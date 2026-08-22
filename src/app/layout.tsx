import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Arham & Umaima | Wedding Invitation",description:"Traditional Pakistani wedding invitation for Arham Zubair & Umaima Akhtar."};
export default function RootLayout({children}:{readonly children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
