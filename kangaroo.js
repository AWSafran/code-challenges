/*

Complete the function kangaroo in the editor below. 
It should return YES if they reach the same position at the same time, or NO if they don't.

kangaroo has the following parameter(s):

x1, v1: integers, starting position and jump distance for kangaroo 1
x2, v2: integers, starting position and jump distance for kangaroo 2


*/


function kangaroo(x1, v1, x2, v2) {

    if (v2 > v1) {
        return "NO";
    }

    while (x1 < x2) {
        x1 += v1;
        x2 += v2;
    }

    if (x1 == x2) {
        return "YES";
    }
    else {
        return "NO";
    }

}