"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const routeScripts: Record<string, string> = {
  "/": "/page-scripts/home.js?v=20260603-1",
  "/brand": "/page-scripts/brand.js?v=20260528",
  "/solution": "/page-scripts/solution.js?v=20260528",
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
    const initTheme = () => {
      window.PanzerTheme?.init?.();
    };

    const initTimer = window.setTimeout(initTheme, 80);
    let scriptElement: HTMLScriptElement | null = null;

    if (src) {
      scriptElement = document.createElement("script");
      scriptElement.src = `${src}&route=${encodeURIComponent(pathname)}&t=${Date.now()}`;
      scriptElement.async = false;
      scriptElement.onload = initTheme;
      document.body.appendChild(scriptElement);
    }

    return () => {
      window.clearTimeout(initTimer);
      scriptElement?.remove();
    };
  }, [pathname, src]);

  return null;
}
