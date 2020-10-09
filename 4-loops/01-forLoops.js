// let i = 7;
// i = i+1
for (i = 0; i < 10; i++){
    console.log(i);
}

for (i = 2; i < 20; i += 2){
    console.log(i);
}

console.log('global variable:', i);

for (i = 10; i >=0; i--){
    console.log(i);
}

for (i=0; i >25; i -= 2) {
    console.log(i);
}

let name = "Nick Smolen"
let i = 0
for (name[i]; i <= 10; i++) {
    console.log(name[i]);
}

let name = "Nick Smolen"
let i = 0
for (name[i]; i <= 10; i++) {
    if (name[i] != " "){
        console.log(name[i]);
    }
}

let name = "Nick Smolen"
for (letter of name) {
    console.log(letter)
}

let fruits = ["apple", "bananas", "kiwi"]
for (fruit of fruits) {
    console.log(fruit)
}

let n = 1
let x = 0
for (n = 1; n <=50; n++) {
    x += n;
    console.log(n, x);
}