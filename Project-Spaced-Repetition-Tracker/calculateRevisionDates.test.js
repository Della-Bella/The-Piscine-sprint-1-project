// calculateRevisionDates.test.js

import {calculateRevisionDates} from "./dates.js";

describe("calculateRevisionDates", () => {
   it("should calculate revision dates correctly", () => {
      const startDate = "2023-10-26T10:00:00.000Z";
      const expectedOneWeek = "2023-11-02T10:00:00.000Z";
      const expectedOneMonth = "2023-11-25T10:00:00.000Z";
      const expectedThreeMonths = "2024-01-24T10:00:00.000Z";
      const expectedSixMonths = "2024-04-24T10:00:00.000Z";
      const expectedOneYear = "2024-10-26T10:00:00.000Z";

      const revisionDates = calculateRevisionDates(startDate);

      expect(revisionDates.startDate).toBe(startDate);
      expect(revisionDates.oneWeek).toBe(expectedOneWeek);
      expect(revisionDates.oneMonth).toBe(expectedOneMonth);
      expect(revisionDates.threeMonths).toBe(expectedThreeMonths);
      expect(revisionDates.sixMonths).toBe(expectedSixMonths);
      expect(revisionDates.oneYear).toBe(expectedOneYear);
   });

   it("should handle different start dates", () => {
      const startDate = "2024-01-01T00:00:00.000Z";
      const expectedOneWeek = "2024-01-08T00:00:00.000Z";
      const expectedOneMonth = "2024-01-31T00:00:00.000Z";
      const expectedThreeMonths = "2024-03-31T00:00:00.000Z";
      const expectedSixMonths = "2024-06-30T00:00:00.000Z";
      const expectedOneYear = "2025-01-01T00:00:00.000Z";

      const revisionDates = calculateRevisionDates(startDate);

      expect(revisionDates.startDate).toBe(startDate);
      expect(revisionDates.oneWeek).toBe(expectedOneWeek);
      expect(revisionDates.oneMonth).toBe(expectedOneMonth);
      expect(revisionDates.threeMonths).toBe(expectedThreeMonths);
      expect(revisionDates.sixMonths).toBe(expectedSixMonths);
      expect(revisionDates.oneYear).toBe(expectedOneYear);
   });
});
