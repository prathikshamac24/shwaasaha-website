import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#faf7f2",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shwaasaha.com"),
  title: "SHWAASA: — Breathe Into Your True Self | Yoga • Breath • Awareness",
  description:
    "You don't need to be flexible. You don't need to know yoga. You just need to begin. Traditional Indian wisdom with Chethan & Indira Yadav for today's life.",
  keywords: [
    "Yoga",
    "Pranayama",
    "Breathwork",
    "Awareness",
    "Stillness",
    "SHWAASA:",
    "Chethan Yadav",
    "Indira Yadav",
    "Meditation",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "SHWAASA: — Breathe Into Your True Self",
    description:
      "You don't need to be flexible. You don't need to know yoga. You just need to begin.",
    url: "https://www.shwaasaha.com",
    siteName: "SHWAASA:",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "SHWAASA: — Breathe Into Your True Self | Yoga • Breath • Awareness",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHWAASA: — Breathe Into Your True Self",
    description:
      "You don't need to be flexible. You don't need to know yoga. You just need to begin.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1781804459757595');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1781804459757595&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

