#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}

#[no_mangle]
pub fn rust_fibo(n: usize) -> usize {
  match n {
        0 => 1,
        1 => 1,
        _ => rust_fibo(n - 1) + rust_fibo(n - 2),
  }
}
