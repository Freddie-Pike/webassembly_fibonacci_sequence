// The entry file of your WebAssembly module.

// Recursive version of the fibonacci sequence.
export function typescript_fibo(n: i32): i32 {
  switch (n) {
    case 0:
      return 1;
      break;
    case 1:
      return 1;
      break;
    default:
      return (typescript_fibo(n - 1) + typescript_fibo(n - 2));
      break;
  }
}
