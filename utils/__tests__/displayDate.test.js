import { displayDate } from "../displayDate";
it("should format date as datetime", () => {
  const date = new Date("4 1, 1970");
  expect(displayDate(date)).toBe("April 1, 1970");
  });