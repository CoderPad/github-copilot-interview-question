/**
 * A prime number is a number that cannot be cleanly divided with any
 * number other than itself and 1.
 *
 * "isPrime" checks to see if an input number matches that requirement
 *
 * {@link https://en.wikipedia.org/wiki/Prime_number}
 */
// Copilot was given "function isPrime"
function isPrime(n) {
    if (n < 2) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// Copilot guessed this on it's own
isPrime(13);
// Copilot was given "isPrime("
isPrime(14);
