// Copilot was given "function fibonacci(n, max". It generated valid code without "(n, max", but had no exit condition
function fibonacci(n, max) {
  var a = 0, b = 1, c = 0;
  while (c < max) {
    console.log(a);
    a = b;
    b = a + b;
    c++;
  }
}

fibonacci(5, 10);