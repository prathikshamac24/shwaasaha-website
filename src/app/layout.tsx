import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#faf7f2",
};

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shwaasa.in"),
  title: "SHWAASA: — Breathe Into Your True Self | Yoga • Breath • Awareness",
  description:
    "You don't need to be flexible. You don't need to know yoga. You just need to begin. Traditional Indian wisdom with Chethan & Indira Yadav for today's life.",
  keywords: ["Yoga", "Pranayama", "Breathwork", "Awareness", "Stillness", "SHWAASA:", "Chethan Yadav", "Indira Yadav", "Meditation"],
  openGraph: {
    title: "SHWAASA: — Breathe Into Your True Self",
    description: "You don't need to be flexible. You don't need to know yoga. You just need to begin.",
    images: ["/logo-vertical-clean.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}

