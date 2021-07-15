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

rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
