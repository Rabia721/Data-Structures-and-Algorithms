/*
You need to write a function that prints out ‘wild animals’ if the names of lion and leopard are passed to it. 
However, if I pass the names of cats and rabbits to it, it prints ‘pet animals’. 
However, if I pass any other name to it, it says ‘unknown’
*/

let wild_animals = "lions";

switch (true) {
    case wild_animals == "lions" || wild_animals == "leopards":
        document.write("wild animals");
        break;
    case wild_animals == "cats" || wild_animals == "rabbits":
        document.write("pet animals");
        break;
    default:
        document.write('Unknown');
        break;
}