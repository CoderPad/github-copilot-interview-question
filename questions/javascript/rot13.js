/**
 * ROT13 is a simple cipher that changes each character in a string with the
 * letter 13 places in front of it
 *
 * {@link https://en.wikipedia.org/wiki/ROT13}
 */
// Copilot was given "function rot13"
function rot13(str) {
  var out = "";
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      out += String.fromCharCode(c + 13);
    } else if (c >= 97 && c <= 122) {
      out += String.fromCharCode(c - 13);
    } else {
      out += str.charAt(i);
    }
  }
  return out;
}

// Copilot was given "rot13("
rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
