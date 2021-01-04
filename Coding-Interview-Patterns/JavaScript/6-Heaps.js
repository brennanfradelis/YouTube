const { Heap } = require('heap-js');

function kLargest(arr, k) {
    var heap = []
    for (let i = 0; i < arr.length; i++) {
        Heap.heappush(heap, arr[i]);
        if (heap.length === k+1) {
            Heap.heappop(heap);
        }
    }
    return heap;
}