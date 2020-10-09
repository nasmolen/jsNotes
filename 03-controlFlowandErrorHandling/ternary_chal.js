//? Ternary
// let num = 1;
// () ? true : false
// (num > 0) ? console.log('yes') : console.log('no');

let age = 30;
(age >= 25) ? console.log('Yay! You can rent a car!')
            : (age >= 21) ? console.log('Yay, you can drink!')
                          : (age >= 18)  ? console.log('Yay! You can vote!')
                                         : console.log("Sorry, you're too young to do anything fun");

switch (true) {
    case (age > 24):
        console.log("Yay!, you can rent a car");
    case (age > 20):
        console.log("Yay!, you can drink!");
    case (age > 17):
        console.log("Yay!, you can vote!");
        break;
    default :
        console.log("Sorry, you're too young to do anything fun");
}                                         