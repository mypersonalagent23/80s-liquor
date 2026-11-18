"use client";

import { useEffect, useState } from "react";

/** Clock for the open/closed chip. Null until after hydration so SSR stays stable. */
export function useNow(): Date | null {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return now;
}
