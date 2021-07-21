// Copilot was given:
// function reverseLinkedList(
function reverseLinkedList(head) {
    var prev = null;
    var curr = head;
    while (curr) {
        var next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// Copilot was given: `const listItem1`
// Manually added `next`
const listItem1 = {
    value: 1,
    next: null
};

// Copilot was given: `const listItem2`
// `next` was changed from `null` to `listItem1`
const listItem2 = {
    value: 2,
    next: listItem1
};

// Copilot guessed this entirely
const listItem3 = {
    value: 3,
    next: listItem2
};

reverseLinkedList(listItem3);
