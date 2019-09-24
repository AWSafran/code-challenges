/*
Function Description

Complete the function rotLeft in the editor below. It should return the resulting array of integers.

rotLeft has the following parameter(s):

An array of integers a.
An integer d, the number of rotations.
*/


function rotLeft(a, d) {

    let result = new Array(a.length);

    for(let i = 0; i < a.length; i++){
        let targetIndex = i - d;

        if(targetIndex < 0){
            targetIndex = a.length + targetIndex;
        }

        result[targetIndex] = a[i];
    }
    return result;
}
