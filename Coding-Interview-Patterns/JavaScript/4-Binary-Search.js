/*
Problem 1.
Given an array and a target value, return the index of the
target value in the array.
*/
function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right-left)/2)
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

/*
Problem 2.
Given an array and a target value where there is a contiguous group
of values equal to the target, return the leftmost index and rightmost
index of this group. Return [-1, -1] if the group does not exist.
*/
function binarySearchGroup(arr, target) {
    var leftIndex = -1;
    var rightIndex = -1;
    
    var left = 0;
    var right = arr.length - 1;
    //look for the rightmost index
    while (left <= right) {
        // low + ((high - low) / 2)
        mid = Math.floor(left + (right-left)/2)
        if (arr[mid] === target) {
            leftIndex = mid;
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    left = 0;
    right = arr.length-1;
    //look for the leftmost index
    while (left <= right) {
        mid = Math.floor((left+right)/2)
        if (arr[mid] === target) {
            rightIndex = mid;
            left = mid + 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return [leftIndex, rightIndex]
}