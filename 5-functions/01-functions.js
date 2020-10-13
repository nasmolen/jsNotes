//* Declarations

function hi() {
    console.log('HI');
}

hi();


//* Expressions

let hello = function hey() {
    console.log("Hey!");
    }

hello();


//* Function Examples

function addIt() {
    console.log(5+10);
}

addIt()

function counting() {
    for (i = 1; i <= 10; i++) {
        console.log(i);
    }
}

counting()


//* Challenge

let arr = ['This', 'is', 'really', 'cool'];
function x() {
    for (word of arr) {
        console.log(word);
    }
}

x()