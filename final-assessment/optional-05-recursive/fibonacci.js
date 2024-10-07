function fibonacci(n) {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }

  const seq = fibonacci(n - 1);
  seq.push(seq[n - 1] + seq[n - 2]);
  return seq;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
