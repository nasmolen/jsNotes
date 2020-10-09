// let name = "Nico"
// let nameHere = "Nic"

// if (name == "Nick") {
//     console.log("Hello, my name is " + (name));
// } else {
//     console.log("Hello, is your " + (nameHere) + "?");
// };

// let student = {
//     name : "Nick",
//     grade : 12
// };
// console.log(student.name);


let name = "zAchARy";

// if (name[0] === name[0].toUpperCase()) {
//     console.log(name);
// } else {
//     console.log("Hey, this isn't written correctly");
// };

// if (name[0] === name[0].toUpperCase()) {
//     console.log(name[0]);
// } else {
//     console.log(name.slice(1).toLowerCase());
// };

if (name[0] == name[0].toUpperCase()) {
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log('console log #1:', isUpperCase);
} else {
    let notUpperCase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('console log #2:', notUpperCase);
};