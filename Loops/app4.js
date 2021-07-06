/*
    Consider you are given an array [2,0,1,6,45,89]. You need to find the largest element in the array. How’d you do that?

    Consider the above array again and find the smallest element in the array.
*/

let arrayy = [2, 0, 1, 6, 45, 89];
var largest = arrayy[0] || null;
var smallest = arrayy[0] || null;
var number = null;

for (var i = 0; i < arrayy.length; i++) {

    number = arrayy[i];

    largest = Math.max(largest, number);
}

console.log(largest);

for (let j = 0; j < arrayy.length; j++) {
    number = arrayy[j];

    smallest = Math.min(smallest, number);
}

console.log(smallest);