/**
 * JavaScript's objects are deeply referenced.
 * This means that if you have:
 * const a = {a: {b: 3}}
 * const b = {...a}
 * b.b = 5
 *
 * Then:
 * console.log(a.b); // 5
 *
 * In order to avoid this, you must clone an object deeply
 * {@link https://blog.logrocket.com/methods-for-deep-cloning-objects-in-javascript/}
 */
// Copilot was given "function deep"
function deepCopy(obj) {
    if (obj == null || typeof obj != "object") {
        return obj;
    }
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = deepCopy(obj[attr]);
        }
    }
    return copy;
}
