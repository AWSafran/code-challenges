/*

Complete the breakingRecords function in the editor below. 
It must return an integer array containing the numbers of times 
she broke her records. Index 0 is for breaking most points records, 
and index 1 is for breaking least points records.

*/

function breakingRecords(scores) {
    let minScore = scores[0];
    let maxScore = scores[0];
    let minCount = 0;
    let maxCount = 0;

    for (let i = 1; i < scores.length; i++){
        if (scores[i] < minScore) {
            minCount++;
            minScore = scores[i];
        }

        if (scores[i] > maxScore) {
            maxCount++;
            maxScore = scores[i];
        }
    }

    return [maxCount, minCount];
}