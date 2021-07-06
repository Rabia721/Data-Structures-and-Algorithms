/*  Suppose you are given an array: [1, 8, 7, 3, 2, 9, 10, 12]. You need to find out whether a number is prime or not
    (Hint: a prime number is a number that is divisible by 1 and itself). 
    What approach would you take to do that? Support it with the relevant code. 
*/



var arr = [1, 8, 7, 3, 2, 9, 10, 12];

arr = arr.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
            return false;
    }
    return true;
});

console.log(arr);