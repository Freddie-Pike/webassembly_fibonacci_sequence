import * as wasm from "fibonacci-sequence";

// Times how long a function takes.
function timer(callbackName, callback, parameters) {
  console.time(`${callbackName} timer`);
  let callbackReturnValue = callback(parameters);
  console.timeEnd(`${callbackName} timer`);
  return callbackReturnValue;
}

// Vanilla JS implemention of the fibonacci sequence.
function recursiveFib(n) {
  switch (n) {
    case 0:
      return 1;
      break;
    case 1:
      return 1;
      break;
    default:
      return (recursiveFib(n - 1) + recursiveFib(n - 2));
      break;
  }
}

// Fetch the fibonacci assemblyscript outputted file.
fetch("build/optimized.wasm")
  .then(response => response.arrayBuffer())
  .then(buffer => WebAssembly.instantiate(buffer))
  .then(module => {
    let wasmRecursiveFibFunc = module.instance.exports.wasmRecursiveFib;

    let vanillaJSRecursiveFibValue = timer('recursiveFib', recursiveFib, 40);
    let wasmTypescriptRecursiveFibValue = timer('wasmTypescriptRecursiveFibFunc', wasmRecursiveFibFunc, 40);
    let wasmRustRecursiveFibValue = timer('wasmRustRecursiveFibFunc', wasm.fibo, 40);

    document.getElementById('vanilla-js-result').innerHTML = vanillaJSRecursiveFibValue;
    document.getElementById('wasm-result').innerHTML = wasmTypescriptRecursiveFibValue;
    document.getElementById('rust-result').innerHTML = wasmRustRecursiveFibValue;
  });
