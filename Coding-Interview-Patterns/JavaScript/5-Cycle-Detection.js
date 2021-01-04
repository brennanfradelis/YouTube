//Video Link: https://youtu.be/PR-t0sUTddw

class TreeNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(node) {
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