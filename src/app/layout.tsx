/* eslint-disable @next/next/no-css-tags, @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Script from "next/script";
import { RouteScripts } from "@/components/RouteScripts";
import { Preloader } from "@/components/Preloader";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panzer-it",
  description: "Panzer IT website (converted from static HTML template)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The legacy template scripts (Lenis, GSAP, etc.) can add classes/styles to <html>/<body>
    // before React hydration. We suppress hydration warnings for these root elements.
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/images/favicons/favicon.png" sizes="32x32" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        {/* Template CSS (kept as-is) */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css?v=20260524" />
        <link rel="stylesheet" href="/assets/fontawesome/css/fontawesome.min.css?v=20260524" />
        <link rel="stylesheet" href="/assets/css/flaticon.min.css?v=20260524" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css?v=20260524" />
        <link rel="stylesheet" href="/assets/css/animate.min.css?v=20260524" />
        <link rel="stylesheet" href="/assets/css/select2.min.css?v=20260524" />
        <link rel="stylesheet" href="/assets/css/odometer.css?v=20260524" />
        <link rel="stylesheet" href="/assets/css/style.css?v=20260603-17" />
      </head>
      <body suppressHydrationWarning>
        <SiteChrome>
          <Preloader />
          {children}
        </SiteChrome>

        {/* Template JS (kept as-is). Order matters. Vendor libraries load early, then
            main.js runs after hydration so it cannot rewrite the DOM before React starts. */}
        <Script src="/assets/js/vendor/jquery-3.7.1.min.js" strategy="beforeInteractive" />

        <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery-ui.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/gsap-scroll-to-plugin.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/ScrollSmoother.js" strategy="beforeInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/marquee.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/select2.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.validate.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.appear.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.odometer.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.fancybox.js" strategy="beforeInteractive" />
        <Script src="/assets/js/wow.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/lenis.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/splite-type.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/vanilla-tilt.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/three.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/hover.js" strategy="beforeInteractive" />

        <Script src="/assets/js/main.js?v=20260603-1" strategy="afterInteractive" />
        <RouteScripts />
      </body>
    </html>
  );
}
