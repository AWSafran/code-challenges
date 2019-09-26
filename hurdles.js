/*
Complete the hurdleRace function in the editor below. It should return the minimum units of potion Dan needs to drink to jump all of the hurdles.

hurdleRace has the following parameter(s):

k: an integer denoting the height Dan can jump naturally
height: an array of integers denoting the heights of each hurdle
 */


function hurdleRace(k, height) {
    let maxHurdle = 0;
    
    height.forEach(hurdle =>{
        if(hurdle > maxHurdle){
            maxHurdle = hurdle;
        };
    });

    if(k > maxHurdle){
        return 0;
    }
    else{
        return maxHurdle - k;
    }
}