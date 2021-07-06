/*
Suppose a situation in which you are expected to show ‘less than 10’ if a number is less than 10. 
However, if it’s greater than 10, print ‘greater than 10’. 
Also, deal with the case in which it’s equal to 10 with an appropriate message.

*/

let num = 5;

switch (true) {
    case num > 10:
        console.log("Greater than 10");
        break;

    case num < 10:
        console.log("Less than 10");
        break;

    case num == 10:
        console.log("It's equal to 10");
        break;

    default:
        console.log("Invlid Number");
        break;
}