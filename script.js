function divide(arr, n) {
    // Initialize the result array
    let result = [];
    // Temporary subarray to accumulate elements
    let currentSubarray = [];
    // Sum of the current subarray
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        // Check if adding this element would exceed the sum limit
        if (currentSum + num > n) {
            // If it exceeds, push the current subarray to result and start a new one
            result.push(currentSubarray);
            currentSubarray = [num];
            currentSum = num;
        } else {
            // Otherwise, add the element to the current subarray
            currentSubarray.push(num);
            currentSum += num;
        }
    }

    // Don't forget to push the last accumulated subarray if it's not empty
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
}

// Example usage
const arr1 = [1, 2, 3, 4, 1, 0, 2, 2];
const n1 = 5;
console.log(divide(arr1, n1)); // [[1, 2], [3], [4, 1, 0], [2, 2]]

const arr2 = [4, 3, 2, 1];
const n2 = 4;
console.log(divide(arr2, n2)); // [[4], [3], [2], [1]]