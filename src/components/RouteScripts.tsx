"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const routeScripts: Record<string, string> = {
  "/": "/page-scripts/home.js?v=20260603-1",
  "/brand": "/page-scripts/brand.js?v=20260528",
  "/brand-detail": "/page-scripts/brand.js?v=20260528",
  "/solution": "/page-scripts/solution.js?v=20260528",
  "/solution-details": "/page-scripts/solution.js?v=20260528",
};

declare global {
  interface Window {
    PanzerTheme?: {
      init?: () => void;
    };
  }
}

export function RouteScripts() {
  const pathname = usePathname();
  const src = routeScripts[pathname];

  useEffect(() => {
    let isActive = true;
    let scriptElement: HTMLScriptElement | null = null;
    const retryTimers: number[] = [];

    const initTheme = (attempt = 0) => {
      if (!isActive) return;

      if (window.PanzerTheme?.init) {
        window.PanzerTheme.init();
        return;
      }

      if (attempt < 40) {
        retryTimers.push(window.setTimeout(() => initTheme(attempt + 1), 100));
      }
    };

    retryTimers.push(window.setTimeout(() => initTheme(), 80));

    if (src) {
      scriptElement = document.createElement("script");
      const separator = src.includes("?") ? "&" : "?";
      scriptElement.src = `${src}${separator}route=${encodeURIComponent(pathname)}&t=${Date.now()}`;
      scriptElement.async = false;
      scriptElement.onload = () => initTheme();
      document.body.appendChild(scriptElement);
    }

    return () => {
      isActive = false;
      retryTimers.forEach((timer) => window.clearTimeout(timer));
      scriptElement?.remove();
    };
  }, [pathname, src]);

  return null;
}
