/*
Problem 1.
Given an array of integers, return the maximum sum subarray of size k.
*/
function maxSumSubarray(arr, k) {
    var maxSum = Number.MIN_VALUE;
    var start = 0;
    var currSum = 0;
    for (let end = 0; end < arr.length; end++) {
        currSum += arr[end];
        if (end - start + 1 == k) {
            maxSum = Math.max(maxSum, currSum);
        }
    }
    return maxSum;
}

/*
Problem 2.
Given an array of positive integers, return the size of the smallest
contiguous subarray with a sum >= s
*/
function smallestSizeGteS(arr, s) {
    var minSize = Number.MAX_VALUE;
    var start = 0;
    var currSum = 0;
    for (let end = 0; end < arr.length; end++) {
        currSum += arr[end];
        while (currSum >= s) {
            minSize = Math.min(minSize, end - start + 1);
            currSum -= arr[start];
            start++;
        }
    }
    return minSize;
}