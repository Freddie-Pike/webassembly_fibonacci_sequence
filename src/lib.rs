mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(message: &str) {
    let test = "cool";
    alert(test);
}

#[wasm_bindgen]
pub fn fibo(n: usize) -> usize {
  match n {
        0 => 1,
        1 => 1,
        _ => fibo(n - 1) + fibo(n - 2),
  }
}

#[wasm_bindgen]
pub fn iterativeFibo(n: usize) -> Option<usize> {
  let mut x = vec![1, 1];
  for i in 2..n {
      let next_x = x[i - 1] + x[i - 2];
      x.push(next_x)
  }
  return x.last().cloned();
}
