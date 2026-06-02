"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const routeScripts: Record<string, string> = {
  "/": "/page-scripts/home.js?v=20260602-1",
  "/brand": "/page-scripts/brand.js?v=20260528",
  "/solution": "/page-scripts/solution.js?v=20260528",
};

export function RouteScripts() {
  const pathname = usePathname();
  const src = routeScripts[pathname];

  useEffect(() => {
    // Other route-specific cleanup can go here if needed
  }, [pathname]);

  if (!src) {
    return null;
  }

  return <Script key={src} src={src} strategy="afterInteractive" />;
}
