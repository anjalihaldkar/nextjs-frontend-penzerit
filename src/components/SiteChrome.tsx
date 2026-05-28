"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

interface SiteChromeProps {
  children: ReactNode;
}

function getPageClass(pathname: string) {
  if (pathname === "/") {
    return "panzer-page-home";
  }

  const pageName = pathname
    .replace(/^\/+/, "")
    .replace(/\/+$/, "")
    .replace(/[^a-zA-Z0-9-]+/g, "-");

  return `panzer-page-${pageName || "home"}`;
}

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname();

  return (
    <div className={`panzer-page ${getPageClass(pathname)}`}>
      <div className="page-wrapper bg-light">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}
