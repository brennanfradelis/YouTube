class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/*
Problem 1.
Implement inorder binary tree traversal.
Add each element to the output array given.
*/
function inorder(root, output) {
    if (root.left !== null) {
        inorder(root.left, output)
    }
    output.push(root.value)
    if (root.right !== null) {
        inorder(root.right, output);
    }
}

/*
Problem 2.
Implement preorder binary tree traversal.
Add each element to the output array given.
*/
function preorder(root, output) {
    output.push(root.value)
    if (root.left !== null) {
        preorder(root.left, output);
    }
    if (root.right !== null) {
        preorder(root.right, output);
    }
}

/*
Problem 3.
Implement postorder binary tree traversal.
Add each element to the output array given.
*/
function postorder(root, output) {
    if (root.left !== null) {
        postorder(root.left, output);
    }
    if (root.right !== null) {
        postorder(root.right, output);
    }
    output.push(root.value, output)
}