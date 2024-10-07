import test from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("Fungsi sum harus mengembalikan hasil penjumlahan dari dua angka", (t) => {
  assert.strictEqual(sum(2, 3), 5, "2 + 3 harus sama dengan 5");
  assert.strictEqual(sum(5, -3), 2, "5 + (-3) harus sama dengan 2");
  assert.strictEqual(sum(-2, -3), -5, "-2 + (-3) harus sama dengan -5");
  assert.strictEqual(sum(0, 0), 0, "0 + 0 harus sama dengan 0");
  assert.strictEqual(sum(0, 5), 5, "0 + 5 harus sama dengan 5");
});
