import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  HOURS_SUMMARY,
  WEEK,
  getZonedParts,
  isOpenAt,
  parseClock,
  rowForWeekday,
  todayRangeLabel,
} from "../content/hours.ts";

describe("parseClock", () => {
  it("reads the verified open and close labels", () => {
    assert.equal(parseClock("10am"), 10 * 60);
    assert.equal(parseClock("10:30pm"), 22 * 60 + 30);
    assert.equal(parseClock("11:30pm"), 23 * 60 + 30);
    assert.equal(parseClock("12:30pm"), 12 * 60 + 30);
    assert.equal(parseClock("8pm"), 20 * 60);
  });
});

describe("weekly windows", () => {
  it("matches the listing exactly", () => {
    assert.equal(
      HOURS_SUMMARY,
      "Mon–Wed 10am–10:30pm · Thu–Sat 10am–11:30pm · Sun 12:30pm–8pm",
    );
    for (const day of [1, 2, 3] as const) {
      assert.equal(WEEK[day].open, 10 * 60);
      assert.equal(WEEK[day].close, 22 * 60 + 30);
      assert.equal(rowForWeekday(day).id, "mon-wed");
    }
    for (const day of [4, 5, 6] as const) {
      assert.equal(WEEK[day].open, 10 * 60);
      assert.equal(WEEK[day].close, 23 * 60 + 30);
      assert.equal(rowForWeekday(day).id, "thu-sat");
    }
    assert.equal(WEEK[0].open, 12 * 60 + 30);
    assert.equal(WEEK[0].close, 20 * 60);
    assert.equal(rowForWeekday(0).id, "sun");
  });
});

describe("isOpenAt in America/New_York", () => {
  it("opens Sunday at 12:30pm and closes at 8:00pm", () => {
    assert.equal(isOpenAt(new Date("2026-11-15T12:29:00-05:00")), false);
    assert.equal(isOpenAt(new Date("2026-11-15T12:30:00-05:00")), true);
    assert.equal(isOpenAt(new Date("2026-11-15T19:59:00-05:00")), true);
    assert.equal(isOpenAt(new Date("2026-11-15T20:00:00-05:00")), false);
    assert.equal(todayRangeLabel(new Date("2026-11-15T13:00:00-05:00")), "12:30pm–8pm");
  });

  it("uses Mon–Wed close at 10:30pm", () => {
    assert.equal(isOpenAt(new Date("2026-11-16T09:59:00-05:00")), false);
    assert.equal(isOpenAt(new Date("2026-11-16T10:00:00-05:00")), true);
    assert.equal(isOpenAt(new Date("2026-11-16T22:29:00-05:00")), true);
    assert.equal(isOpenAt(new Date("2026-11-16T22:30:00-05:00")), false);
    assert.equal(isOpenAt(new Date("2026-11-18T15:14:00-05:00")), true);
    assert.equal(todayRangeLabel(new Date("2026-11-18T15:14:00-05:00")), "10am–10:30pm");
  });

  it("keeps Thu–Sat open through 11:29pm", () => {
    assert.equal(isOpenAt(new Date("2026-11-19T23:29:00-05:00")), true);
    assert.equal(isOpenAt(new Date("2026-11-19T23:30:00-05:00")), false);
    assert.equal(isOpenAt(new Date("2026-11-21T23:29:00-05:00")), true);
    assert.equal(isOpenAt(new Date("2026-11-21T23:30:00-05:00")), false);
    assert.equal(todayRangeLabel(new Date("2026-11-19T22:00:00-05:00")), "10am–11:30pm");
  });

  it("converts UTC instants and daylight time, not the machine zone", () => {
    assert.equal(getZonedParts(new Date("2026-11-19T03:29:00Z"))?.weekday, 3);
    assert.equal(isOpenAt(new Date("2026-11-19T03:29:00Z")), true);
    assert.equal(isOpenAt(new Date("2026-11-19T03:30:00Z")), false);
    assert.equal(isOpenAt(new Date("2026-07-16T23:29:00-04:00")), true);
    assert.equal(isOpenAt(new Date("2026-07-16T23:30:00-04:00")), false);
    assert.equal(todayRangeLabel(new Date("2026-07-16T23:29:00-04:00")), "10am–11:30pm");
  });
});
