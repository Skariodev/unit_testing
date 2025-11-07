import test from "node:test";
import assert from "node:assert";
import { sum } from "./sum.js";

// assert.strictEqual() checks if 2 things are equal, A === B (strict equal)

test("Test if sum() works for two numbers", () => {
  assert.strictEqual(sum(2, 2), 4);
});

// node --test in terminal to run test

test("Test if the function throws an error when non-numeric inpput", () => {
  assert.throws(() => {
    return sum("text", "text");
  });
});
