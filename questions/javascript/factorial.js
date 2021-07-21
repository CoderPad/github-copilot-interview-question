/**
 * A factorial is the product of all positive numbers less than or equal to a given number.
 *
 * For example "3!" (factorial of 3) is 6
 * 3 * 2 * 1
 *
 * {@link https://en.wikipedia.org/wiki/Factorial}
 */
// Copilot was given "function facto"
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
