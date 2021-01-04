/*
Problem 1.
Given a sorted array and a target, return the indices of two values that sum up to the target.
Return [-1, -1] if two indices that sum to the target do not exist.
*/
function twoSum(arr, target) {
    var left = 0;
    var right = arr.length-1;
    while (left < right) {
        var curr = arr[left] + arr[right];
        if (curr < target) {
            left++;
        } else if (curr > target) {
            right--;
        } else {
            return [left, right]
        }
    }
    return [-1, -1]
}

/*
Problem 2.
Given a sorted array and a target, return the indices of three values that sum up to the target.
Assume there is only 1 possible answer.
Return [-1,-1,-1] if three indices that sum to the target do not exist.
*/
function threeSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        var left = i + 1;
        var right = arr.length-1;
        while (left < right) {
            var curr = arr[i] + arr[left] + arr[right];
            if (curr < target) {
                left++;
            } else if (curr > target) {
                right--;
            } else {
                return [i, left, right]
            }
        }
    }
    return [-1, -1, -1]
}

/*
Problem 3.
Given a sorted array, square each value in the array and return the array in sorted order.
*/
function sortedSquaredArray(arr) {
    var left = 0;
    var right = arr.length-1;
    var output = [];
    while (left < right) {
        if (arr[left]*arr[left] < arr[right]*arr[right]) {
            output.push(arr[left]*arr[left]);
            left++;
        } else {
            output.push(arr[right]*arr[right]);
            right--;
        }
    }
    return output;
}
