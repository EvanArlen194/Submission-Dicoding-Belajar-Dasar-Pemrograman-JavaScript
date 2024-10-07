import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("Pengujian fungsi sum", () => {
  // Kasus 1: Menggunakan dua bilangan positif
  assert.strictEqual(sum(2, 3), 5, "sum(2, 3) harus mengembalikan 5");

  // Kasus 2: Menggunakan satu bilangan positif dan satu bilangan negatif
  assert.strictEqual(sum(-1, 5), 0, "sum(-1, 5) harus mengembalikan 0");

  // Kasus 3: Menggunakan dua bilangan negatif
  assert.strictEqual(sum(-1, -1), 0, "sum(-1, -1) harus mengembalikan 0");

  // Kasus 4: Menggunakan salah satu argumen yang bukan angka
  assert.strictEqual(sum(2, "3"), 0, 'sum(2, "3") harus mengembalikan 0');
  assert.strictEqual(sum("a", 5), 0, 'sum("a", 5) harus mengembalikan 0');

  // Kasus 5: Menggunakan dua angka nol
  assert.strictEqual(sum(0, 0), 0, "sum(0, 0) harus mengembalikan 0");

  // Kasus 6: Menggunakan dua angka nol dan satu positif
  assert.strictEqual(sum(0, 3), 3, "sum(0, 3) harus mengembalikan 3");
  assert.strictEqual(sum(3, 0), 3, "sum(3, 0) harus mengembalikan 3");
});
