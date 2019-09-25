/*
Complete the designerPdfViewer function in the editor below. It should return an integer representing the size of the highlighted area.

designerPdfViewer has the following parameter(s):

h: an array of integers representing the heights of each letter
word: a string
*/


function designerPdfViewer(h, word) {
    let indexTranslator = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9,
        'k': 10,
        'l': 11,
        'm': 12,
        'n': 13,
        'o': 14,
        'p': 15,
        'q': 16,
        'r': 17,
        's': 18,
        't': 19,
        'u': 20,
        'v': 21,
        'w': 22,
        'x': 23,
        'y': 24,
        'z': 25
    }
    let minLetter = 0;
    for(let i = 0; i < word.length; i++){
        let index = indexTranslator[word[i]];

        if(h[index] > minLetter){
            minLetter = h[index];
        }
    }

    return minLetter * word.length;
}