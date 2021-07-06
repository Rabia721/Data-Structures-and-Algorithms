/*
    
     Work on the problem above to dynamically print the name of each animal and prepend it with ‘this is’ conditionally. 
    Print ‘something else’ if the name doesn’t equal any of the names in the list.
*/

for (let j = 0; j < pet_animals.length; j++) {
    if (pet_animals[j].indexOf(pet_animals)) {
        console.log(`This is ${pet_animals[j]}`);
    } else {
        console.log("Something Else");
    }
}