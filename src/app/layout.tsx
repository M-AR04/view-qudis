import type { Metadata } from "next";
import { Outfit, Playfair_Display, Amiri, Tajawal } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "طلة القدس | View Alquds Restaurant & Cafe",
  description: "Experience breathtaking dining high above the hills of As-Salt. Fine Palestinian & Jordanian heritage cuisine meets a panoramic luxury sunset lounge.",
  keywords: ["طلة القدس", "View Alquds", "Restaurant As-Salt", "Amman Restaurant", "Jordan Restaurant", "Cafe", "Sunset View"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} ${amiri.variable} ${tajawal.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0e0c0a] text-[#f5f2eb] selection:bg-[#bc7924] selection:text-[#0e0c0a]">
        {children}
      </body>
    </html>
  );
}
