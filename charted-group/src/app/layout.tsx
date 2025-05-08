import Footer from "@/components/footer/Footer";
import MenuHeader from "@/components/MenuHeader";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import LenisWrapper from "@components/LenisWrapper";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { inter } from "./fonts";
import "./globals.css";
import { CountryProvider } from "./context/CountryContext";
import { Suspense } from "react";

export const metadata: Metadata = {
  icons: {
    icon: "/images/ce-logo-white-bg.png",
    shortcut: "/images/ce-logo-white-bg.png",
    apple: "/images/ce-logo-white-bg.png",
  },
  title: "Charted Group | Luxury Chauffeur Services",
  description:
    "Luxury chauffeur services across Ireland, Nigeria, UK, and Spain. Executive transfers, weddings, private tours & secure transport.",
  keywords:
    "luxury chauffeur Ireland, private driver Nigeria, executive transportation UK, wedding car Spain, VIP transport, secure ground travel, Charted Group, chauffeur services, luxury travel, private chauffeur, executive transfers, wedding transportation, private tours, secure transport, luxury car hire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="utf-8"></meta>
        <title>Charted Group | Luxury Chauffeur Services</title>
        <meta name="description" content={`${metadata.description}`}></meta>
        <meta name="keywords" content={`${metadata.keywords}`}></meta>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"></meta>
        <meta name="author" content="Charted Group" />

        <meta property="og:title" content={`${metadata.title}`}></meta>
        <meta property="og:site_name" content={`${metadata.title}`}></meta>
        <meta name="og:description" content={`${metadata.description}`}></meta>
        <meta property="og:image" content="/images/ce-logo-white-bg.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chartedgroup.site" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:locale" content="en"></meta>

        <meta name="robots" content="index, follow, nocache"></meta>
        <meta name="googlebot" content="index, follow, nocache"></meta>
      </head>
      <body>
        <Suspense fallback={/* you can put a spinner or null here */ null}>
          <CountryProvider>
            <LenisWrapper>
              <ParallaxWrapper>
                <MenuHeader />
                {children}
                <Toaster position="bottom-center" />
              </ParallaxWrapper>
              <Footer />
            </LenisWrapper>
          </CountryProvider>
        </Suspense>
      </body>
    </html>
  );
}
