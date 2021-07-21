/**
 * A palindrome is a string that's exactly the same when reversed.
 *
 * For example, if you spell "level" backwards, it still spells "level"
 *
 * {@link https://en.wikipedia.org/wiki/Palindrome}
 *
 * The word "Palendrome" in the function definition is spelt incorrect on accident,
 * but Copilot was still able to implement it perfectly.
 */
// Copilot was given: "function isPalendrome(" [sic]
function isPalendrome(str) {
    var str = str.toLowerCase();
    var strArr = str.split("");
    var strArrRev = strArr.reverse();
    var strRev = strArrRev.join("");
    return str === strRev;
}

// Copilot was given "is". Comments below were part of copilot's suggestion
isPalendrome("A"); // true
isPalendrome("a"); // true
isPalendrome("ab"); // false
isPalendrome("aba"); // true
isPalendrome("abcd"); // false
isPalendrome("abcba"); // true
