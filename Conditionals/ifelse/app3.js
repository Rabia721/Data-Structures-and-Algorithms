/*
Suppose a situation in which you are expected to show ‘less than 10’ if a number is less than 10. 
However, if it’s greater than 10, print ‘greater than 10’. 
Also, deal with the case in which it’s equal to 10 with an appropriate message.

*/

let num = 5;

if (num > 10) {
    document.write("Greater than 10");
} else if (num < 10) {
    document.write("Less than 10");
} else if (num == 10) {
    document.write("It's equal to 10");
} else {
    document.write("Something's wrong");
}