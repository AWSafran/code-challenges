/*
The Utopian Tree goes through 2 cycles of growth every year. 
Each spring, it doubles in height. 
Each summer, its height increases by 1 meter.

Complete the utopianTree function in the editor below. 
It should return the integer height of the tree after the input number of growth cycles.

utopianTree has the following parameter(s):

n: an integer, the number of growth cycles to simulate
 */


function utopianTree(n) {

    let treeHeight = 1;
    let cycle = 0;

    while(cycle < n){
        if(cycle % 2 === 0){
            //first growth cycle
            treeHeight *= 2;
        }
        else{
            //second growth cycle
            ++treeHeight;
        }
        ++cycle;
    }
    return treeHeight;
}