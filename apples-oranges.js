/* 
Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

countApplesAndOranges has the following parameter(s):

s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree. 

*/


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    
    for(let i = 0; i < apples.length; i++){
        let appleLandingSpot = apples[i] + a;

        if(appleLandingSpot >= s && appleLandingSpot <= t){
            ++appleCount;
        }
    }

    for(let j = 0; j < oranges.length; j++){
        let orangeLandingSpot = oranges[j] + b;

        if(orangeLandingSpot >= s && orangeLandingSpot <= t){
            ++orangeCount;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}