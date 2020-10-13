// let FB = 15;

// if ((FB % 15) === 0) {
//     console.log("FizzBuzz");
// } else if ((FB % 3) === 0) {
//     console.log("Fizz");
// } else if ((FB % 5) === 0) {
//     console.log("Buzz");
// }


// let FB = 5;

// switch (true) {
//     case FB % 15 === 0:
//         console.log("FizzBuzz");
//         break;
//     case FB % 3 === 0:
//         console.log("Fizz");
//         break; 
//     case FB % 5 === 0:
//         console.log("Buzz");
//         break;
// }


// let FB = 15;

// (FB % 15 === 0) ? console.log("FizzBuzz")
//     : (FB % 5 === 0) ? console.log("Buzz")
//          : (FB % 3 ===0) ? console.log("Fizz") : console.log();


for (i = 0; i <=100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}