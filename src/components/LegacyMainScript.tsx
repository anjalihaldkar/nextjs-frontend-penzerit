"use client";

import { useEffect } from "react";

const mainScriptSrc = "/assets/js/main.js?v=20260603-1";

export function LegacyMainScript() {
  useEffect(() => {
    if (document.querySelector(`script[src="${mainScriptSrc}"]`)) return;

    const script = document.createElement("script");
    script.src = mainScriptSrc;
    script.async = false;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
