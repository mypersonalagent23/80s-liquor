"use client";

import { HOURS_ROWS, getZonedParts } from "@/content/hours";
import { useNow } from "@/components/use-now";

export function HoursTable() {
  const now = useNow();
  const parts = now ? getZonedParts(now) : null;

  return (
    <div className="ticket hours-ticket">
      <table>
        <caption className="sr-only">Weekly hours, Eastern time</caption>
        <thead>
          <tr>
            <th scope="col">Days</th>
            <th scope="col">Opens</th>
            <th scope="col">Closes</th>
          </tr>
        </thead>
        <tbody>
          {HOURS_ROWS.map((row) => {
            const isToday = parts ? row.weekdays.includes(parts.weekday) : false;
            return (
              <tr key={row.id} className={isToday ? "is-today" : undefined}>
                <th scope="row">
                  {row.label}
                  {isToday ? <span className="today-tag">Today</span> : null}
                </th>
                <td>{row.opens}</td>
                <td>{row.closes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
