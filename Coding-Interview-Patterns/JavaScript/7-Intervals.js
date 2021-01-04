/*
Video Link: https://youtu.be/W5Swrn1eSJI

Problem 1.
Given an array of meetings represented by arrays of length 2
with a start time and an end time, return true if any of the 
meetings overlap, and false if none of the meetings overlap.

Input: meetings=[[1,3], [4,6], [8,10], [9,18]]
Output: true
*/
function overlappingMeetings(meetings) {
    meetings.sort();
    for (let i = 1; i < meetings.length; i++) {
        var meetingA = meetings[i-1];
        var meetingB = meetings[i];
        if (meetingA[1] > meetingB[0]) {
            return true;
        }
    }
    return false;
}

/*
Problem 2.
Given an array of intervals, merge any overlapping intervals
and return the new array. 

Input: intervals=[[1,3], [4,6], [8,10], [9,18]] 
Output: [[1,6], [8,18]]
*/
function merge(intervals) {
    intervals.sort();
    var output = [];
    for (const interval of intervals) {
        if (output.length == 0 || output[output.length-1][1] < interval[0]) {
            output.push(interval);
        } else {
            output[output.length-1][1] = Math.max(output[output.length-1][1], interval[1]);
        }
    }
    return output;
}

/*
Problem 3.
Given a sorted array of non-overlapping intervals, insert a new interval
into the correct position, merge anything that overlaps after the insertion,
and return the new array.

Input: intervals=[[1,3], [4,6], [8,10], [9,18]], newInterval=[5,9]
Output: [[1,3], [4,18]]
*/
function insert(intervals, newInterval) {
    var output = [];
    var i = 0;
    while (i < intervals.length && newInterval[0] > intervals[i][0]) {
        output.push(intervals[i]);
        i++;
    }

    if (output.length == 0 || output[output.length-1][1] < newInterval[0]) {
        output.push(newInterval)
    } else {
        output[output.length-1][1] = Math.max(output[output.length-1][1], newInterval[1]);
    }

    while (i < intervals.length) {
        if (output[output.length-1][1] < intervals[i][0]) {
            output.push(intervals[i]);
        } else {
            output[output.length-1][1] = Math.max(output[output.length-1][1], intervals[i][1])
        }
        i++;
    }
    return output;
}