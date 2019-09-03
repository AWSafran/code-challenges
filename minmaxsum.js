/*
Given five positive integers, find the minimum and maximum values that can be calculated 
by summing exactly four of the five integers. Then print the respective minimum and maximum 
values as a single line of two space-separated long integers.

*/


function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    let smallSum = 0;
    let largeSum = 0;

    for (let i = 0; i < arr.length; i++){
        if (i != 0) {
            largeSum += arr[i];
        }

        if (i != arr.length - 1) {
            smallSum += arr[i]
        }
    }

    console.log(smallSum, largeSum);

}