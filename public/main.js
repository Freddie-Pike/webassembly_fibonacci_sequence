// Times how long a function takes.
function timer(callbackName, callback, parameters) {
  console.time(`${callbackName} timer`);
  let callbackReturnValue = callback(parameters);
  console.timeEnd(`${callbackName} timer`);
  return callbackReturnValue;
}

// Vanilla JS implemention of the fibonacci sequence.
function recursiveFib(n) {
  if (n <= 1) {
    return n;
  } else {
    return (recursiveFib(n - 1) + recursiveFib(n - 2));
  }
}

// Fetch the fibonacci assemblyscript outputted file.
fetch("../build/optimized.wasm")
  .then(response => response.arrayBuffer())
  .then(buffer => WebAssembly.instantiate(buffer))
  .then(module => {
    let wasmRecursiveFibFunc = module.instance.exports.wasmRecursiveFib;

    wasmRecursiveFibValue = timer('wasmRecursiveFibFunc', wasmRecursiveFibFunc, 40);
    RecursiveFibValue = timer('recursiveFib', recursiveFib, 40);

    document.getElementById('wasm-result').innerHTML = wasmRecursiveFibValue;
    document.getElementById('vanilla-js-result').innerHTML = RecursiveFibValue;
  });