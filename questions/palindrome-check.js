// Copilot was given: "function isPalendrome("
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