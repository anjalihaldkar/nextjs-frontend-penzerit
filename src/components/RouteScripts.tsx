"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const routeScripts: Record<string, string> = {
  "/": "/page-scripts/home.js?v=20260528",
  "/brand": "/page-scripts/brand.js?v=20260528",
  "/solution": "/page-scripts/solution.js?v=20260528",
};

export function RouteScripts() {
  const pathname = usePathname();
  const src = routeScripts[pathname];

  useEffect(() => {
    const closePreloader = () => {
      document.querySelectorAll(".loading-screen").forEach((element) => {
        element.remove();
      });
    };

    const timer = window.setTimeout(closePreloader, 700);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  if (!src) {
    return null;
  }

  return <Script key={src} src={src} strategy="afterInteractive" />;
}
