/* 

Write a function that adds the diagonal numbers of a square matrix,
and returns the absolute value of the difference

*/

function diagonalDifference(arr) {
    // Write your code here

    let primarySum = 0;
    let secondarySum = 0;

    for (let i = 0; i < arr.length; i++){
        primarySum += arr[i][i];
        secondarySum += arr[i][arr.length - 1 - i];

    }
    
    return Math.abs(primarySum - secondarySum);

}