import { displayDate } from "../displayDate";

describe('date format is working or not', () => {
  

  it("date is in YYYY-MM-DD", () => {
    const date = new Date("4 1, 1970");
    expect(displayDate(date, 'YYYY-MM-DD')).toBe("1970-4-1");
    });

    it("date is in DD/MM/YYYY", () => {
      const dateNew = new Date("4 1, 1970");
      expect(displayDate(dateNew, 'DD/MM/YYYY')).toBe("1/4/1970");
    
      });

  });