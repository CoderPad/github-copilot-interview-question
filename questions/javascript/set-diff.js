/**
 * A "set" difference is a way to check what items are in the first array
 * that are not in the second.
 *
 * While this implementation takes two arrays rather than two sets,
 * this is a common implementation in many codebases. JS itself is looking to add this to the language in the future
 *
 * {@link https://github.com/tc39/proposal-set-methods}
 */
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
