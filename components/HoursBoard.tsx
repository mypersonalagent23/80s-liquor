"use client";

import { HOURS_ROWS, WEEK, getZonedParts, isOpenAt, todayRangeLabel } from "@/content/hours";
import { useNow } from "@/components/use-now";

export function HoursBoard() {
  const now = useNow();
  const parts = now ? getZonedParts(now) : null;
  const open = now ? isOpenAt(now) : null;
  const today = now ? todayRangeLabel(now) : null;

  return (
    <div className="hours-board">
      <h2>Today’s hours</h2>
      <div className="now-slot">
        {today && open !== null ? (
          <>
            <p className="now-time">{today}</p>
            <span className={open ? "chip chip-open" : "chip chip-closed"}>
              {open ? "Open now" : "Closed"}
            </span>
          </>
        ) : (
          <p className="now-pending">Eastern time</p>
        )}
      </div>
      <ol className="week-list">
        {HOURS_ROWS.map((row) => {
          const isToday = parts ? row.weekdays.includes(parts.weekday) : false;
          const day = WEEK[row.weekdays[0]];
          return (
            <li key={row.id} className={isToday ? "is-today" : undefined}>
              <span>{row.short}</span>
              <span>
                {day.openLabel}–{day.closeLabel}
              </span>
              {isToday ? <span className="today-tag">Today</span> : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
