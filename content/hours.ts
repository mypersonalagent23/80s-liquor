/** Verified hours for 80's Liquor. Do not change these without a new source. */

export const TIME_ZONE = "America/New_York";

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface DayWindow {
  open: number;
  close: number;
  openLabel: string;
  closeLabel: string;
}

export interface HoursRow {
  id: "mon-wed" | "thu-sat" | "sun";
  label: string;
  short: string;
  weekdays: readonly Weekday[];
  opens: string;
  closes: string;
}

export const HOURS_ROWS: readonly HoursRow[] = [
  {
    id: "mon-wed",
    label: "Monday–Wednesday",
    short: "Mon–Wed",
    weekdays: [1, 2, 3],
    opens: "10am",
    closes: "10:30pm",
  },
  {
    id: "thu-sat",
    label: "Thursday–Saturday",
    short: "Thu–Sat",
    weekdays: [4, 5, 6],
    opens: "10am",
    closes: "11:30pm",
  },
  {
    id: "sun",
    label: "Sunday",
    short: "Sun",
    weekdays: [0],
    opens: "12:30pm",
    closes: "8pm",
  },
];

export const HOURS_SUMMARY = HOURS_ROWS.map(
  (row) => `${row.short} ${row.opens}–${row.closes}`,
).join(" · ");

/** "10:30pm" -> minutes from midnight. */
export function parseClock(label: string): number {
  const match = /^(\d{1,2})(?::(\d{2}))?(am|pm)$/i.exec(label);
  if (!match) {
    throw new Error(`Bad clock label: ${label}`);
  }
  let hour = Number(match[1]);
  const minute = match[2] ? Number(match[2]) : 0;
  const meridiem = match[3].toLowerCase();
  if (hour < 1 || hour > 12 || minute < 0 || minute > 59) {
    throw new Error(`Bad clock label: ${label}`);
  }
  if (meridiem === "pm" && hour !== 12) hour += 12;
  if (meridiem === "am" && hour === 12) hour = 0;
  return hour * 60 + minute;
}

function windowFor(opens: string, closes: string): DayWindow {
  return {
    open: parseClock(opens),
    close: parseClock(closes),
    openLabel: opens,
    closeLabel: closes,
  };
}

export const WEEK: Record<Weekday, DayWindow> = HOURS_ROWS.reduce(
  (week, row) => {
    const dayWindow = windowFor(row.opens, row.closes);
    for (const day of row.weekdays) {
      week[day] = dayWindow;
    }
    return week;
  },
  {} as Record<Weekday, DayWindow>,
);

const WEEKDAY_FROM_SHORT: Record<string, Weekday> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

export interface ZonedParts {
  weekday: Weekday;
  minutes: number;
}

export function getZonedParts(
  date: Date,
  timeZone: string = TIME_ZONE,
): ZonedParts | null {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).formatToParts(date);
    const bag = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    let hour = Number(bag.hour);
    const minute = Number(bag.minute);
    if (hour === 24) hour = 0;
    const weekday = WEEKDAY_FROM_SHORT[bag.weekday];
    if (weekday === undefined || Number.isNaN(hour) || Number.isNaN(minute)) {
      return null;
    }
    return { weekday, minutes: hour * 60 + minute };
  } catch {
    return null;
  }
}

/** Open at the start minute, closed at the close minute. */
export function isOpenAt(date: Date): boolean | null {
  const parts = getZonedParts(date);
  if (!parts) return null;
  const day = WEEK[parts.weekday];
  return parts.minutes >= day.open && parts.minutes < day.close;
}

export function todayRangeLabel(date: Date): string | null {
  const parts = getZonedParts(date);
  if (!parts) return null;
  const day = WEEK[parts.weekday];
  return `${day.openLabel}–${day.closeLabel}`;
}

export function rowForWeekday(day: Weekday): HoursRow {
  const row = HOURS_ROWS.find((candidate) => candidate.weekdays.includes(day));
  if (!row) {
    throw new Error(`No hours row for weekday ${day}`);
  }
  return row;
}
