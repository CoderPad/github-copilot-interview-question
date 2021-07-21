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