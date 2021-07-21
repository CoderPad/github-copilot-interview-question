// Copilot was given "function heap"
function heapsort(a) {
  var len = a.length;
  var max = len - 1;
  var i = 0;
  var j = 0;
  var temp;
  for (; i < max; i++) {
    j = i;
    temp = a[i];
    while (j > 0 && a[j - 1] > temp) {
      a[j] = a[j - 1];
      j--;
    }
    a[j] = temp;
  }
  return a;
}

heapsort([2,1,3,4,5,6,7,8,9,10]);