"use client";

import { HOURS_SUMMARY, isOpenAt, todayRangeLabel } from "@/content/hours";
import { useNow } from "@/components/use-now";

export function StoreStatus() {
  const now = useNow();
  const open = now ? isOpenAt(now) : null;
  const today = now ? todayRangeLabel(now) : null;

  if (open === null || today === null) {
    return <p className="hours-summary">{HOURS_SUMMARY}</p>;
  }

  return (
    <p className="hours-live" aria-live="polite">
      <span className="today-line">Today: {today}</span>
      <span className={open ? "chip chip-open" : "chip chip-closed"}>
        {open ? "Open now" : "Closed"}
      </span>
    </p>
  );
}
