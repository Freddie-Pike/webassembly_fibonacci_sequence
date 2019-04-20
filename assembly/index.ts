// The entry file of your WebAssembly module.

// Recursive version of the fibonacci sequence.
export function wasmRecursiveFib(n: i32): i32 {
  if (n <= 1) {
    return n;
  } else {
    return (wasmRecursiveFib(n - 1) + wasmRecursiveFib(n - 2));
  }
}
