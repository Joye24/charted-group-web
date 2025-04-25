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
  title: "Charted Group | Transportation - Think Charted",
  description:
    "Experience premium ground transportation in Ireland with our on-demand fleet, fare calculator, and hospitality services. Charted Group ensures seamless, reliable, and luxurious travel for business, events, and tours.",
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
        <meta property="og:title" content={`${metadata.title}`}></meta>

        <meta property="og:site_name" content={`${metadata.title}`}></meta>
        <meta name="og:description" content={`${metadata.description}`}></meta>
        <meta property="og:locale" content="en"></meta>
        <meta name="robots" content="index, follow, nocache"></meta>
        <meta name="googlebot" content="index, follow, nocache"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"></meta>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"></meta>
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
