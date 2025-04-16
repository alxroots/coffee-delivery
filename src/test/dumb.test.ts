import { test, expect } from "vitest";
import { sum } from "../utils/dumb.ts";

test("dumb test", () => {
  expect(sum(1, 2)).toBe(3);
});
