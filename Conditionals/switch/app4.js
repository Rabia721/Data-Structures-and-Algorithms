/*
Suppose you are given a number and you need to check whether it’s even or odd. How'd you do that?
*/

let num = 4;

switch (true) {
    case num % 2 == 0:
        console.log("Number is Even");
        break;

    case num % 2 == 1:
        console.log("Number is Odd");
        break;

    default:
        console.log("Invalid  Number");
        break;
}