/*
Write a program that prints a staircase of size .

     #
    ##
   ###
  ####
 #####
######
*/


function staircase(n) {

    for (let i = 1; i <= n; i++){
        let currentString = "";
        for (let j = 1; j <= (n - i); j++){
            currentString += " ";
        }
        for (let k = 1; k <= i; k++){
            currentString += "#";
        }
        console.log(currentString);
    }

}