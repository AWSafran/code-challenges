/*
Complete the plusMinus function in the editor below.
It should print out the ratio of positive,
 negative and zero items in the array, 
 each on a separate line rounded to six decimals.
*/

function plusMinus(arr) {
    let numPos = 0;
    let numNeg = 0;
    let numZero = 0;

    arr.forEach(number => {
        if (number > 0) {
            numPos++;
        }
        else if (number < 0) {
            numNeg++;
        }
        else {
            numZero++;
        }
    })

    console.log((numPos / arr.length).toFixed(5));
    console.log((numNeg / arr.length).toFixed(5));
    console.log((numZero / arr.length).toFixed(5));

}