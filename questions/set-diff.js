// Copilot was given "function diffSet"
function diffSet(a, b) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) < 0) {
            result.push(a[i]);
        }
    }
    return result;
}

// Copilot did this on its own
diffSet(["a", "b", "c"], ["b", "c", "d"]);