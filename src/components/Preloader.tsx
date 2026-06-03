"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Preloader() {
  const pathname = usePathname();
  const [hiddenPathname, setHiddenPathname] = useState<string | null>(null);
  const isVisible = hiddenPathname !== pathname;

  useEffect(() => {
    const closePreloader = () => {
      setHiddenPathname(pathname);
    };

    const timer = window.setTimeout(closePreloader, 700);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  if (!isVisible) return null;

  const segment = pathname ? pathname.split("/").filter(Boolean)[0] : "";
  const pageClass = segment || "home";

  return (
    <div className={`panzer-page panzer-page-${pageClass}`}>
      <div className="loading-screen" id="loading-screen">
        <button 
          className="preloader-close" 
          type="button" 
          aria-label="Skip preloader"
          onClick={() => setHiddenPathname(pathname)}
        >
          Skip
        </button>
        <div className="panzer-preloader-inner" aria-live="polite">
          <span className="panzer-preloader-orbit one"></span>
          <span className="panzer-preloader-orbit two"></span>
          <div className="panzer-preloader-logo-wrap">
            <Image 
              className="panzer-preloader-logo" 
              src="/assets/images/logo/logo.png" 
              alt="Panzer IT logo"
              width={150}
              height={50}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="panzer-preloader-progress" aria-hidden="true">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
