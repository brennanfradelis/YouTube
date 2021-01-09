//Video Link: https://youtu.be/PR-t0sUTddw

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head) {
    var slow = head;
    var fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
}