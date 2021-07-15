// Copilot was given "function quickSort"
function quickSort(arr, low, high) {
    if (low < high) {
        var pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
}

// Copilot was given "function partition"
function partition(arr, low, high) {
    var pivot = arr[high],
        i = low - 1;
    for (var j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}

// Copilot was given "function swap"
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Copilot was given "const a"
const arr = [3, 2, 1, 5, 4, 7, 6];

// Copilot generated this line before "const arr" line, but was not given any prompt to do so
quickSort(arr, 0, arr.length - 1);