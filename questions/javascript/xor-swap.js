/**
 * The XOR Swap is a method of swapping two values without creating a third variable
 * {@link https://en.wikipedia.org/wiki/XOR_swap_algorithm}
 */
// Copilot was given "function xor_swap"
function xor_swap(a, b) {
    a ^= b;
    b ^= a;
    a ^= b;
    return [a, b];
}

// Copilot was given "xor_swap"
xor_swap(1, 2);
