// The entry file of your WebAssembly module.

// Recursive version of the fibonacci sequence.
export function wasmRecursiveFib(n: i32): i32 {
  switch (n) {
    case 0:
      return 1;
      break;
    case 1:
      return 1;
      break;
    default:
      return (wasmRecursiveFib(n - 1) + wasmRecursiveFib(n - 2));
      break;
  }
}
