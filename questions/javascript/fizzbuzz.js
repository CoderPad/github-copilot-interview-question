/**
 * FizzBuzz is an extremely popular code challenge. It states that, given a number:
 *
 * If it's divisible by 3, print "Fizz"
 * If it's divisible by 5, print "Buzz"
 * If it's divisible by both, print "FizzBuzz"
 *
 * {@link https://en.wikipedia.org/wiki/Fizz_buzz}
 */
// Copilot was given "function fizz"
function fizzbuss(num) {
  if (num % 15 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

// Copilot was given "fizz"
fizzbuss(15);
