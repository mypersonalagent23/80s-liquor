"use client";

import { useEffect, useRef } from "react";
import { placeholderItems } from "@/content/placeholders";

export function PlaceholderWarn() {
  const warned = useRef(false);

  useEffect(() => {
    if (warned.current) return;
    warned.current = true;
    if (process.env.NODE_ENV !== "development") return;
    const lines = placeholderItems.map((item) => `${item.where}: ${item.text}`);
    console.warn(`[80's Liquor] Placeholder content still on this build:\n- ${lines.join("\n- ")}`);
  }, []);

  return null;
}
