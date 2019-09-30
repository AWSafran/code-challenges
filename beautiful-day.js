function beautifulDays(i, j, k) {
    let numBeautiful = 0;

    for(i; i <= j; i++){
        let string = i.toString(10);
        string = string.split("").reverse().join("");
        let reversed = parseInt(string, 10);
        if((reversed - i) % k === 0){
            numBeautiful++;
        }
    }

    return numBeautiful;

}