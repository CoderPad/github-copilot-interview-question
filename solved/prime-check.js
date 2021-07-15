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