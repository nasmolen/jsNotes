//* Concise Body
let hi = () => console.log('hi');

//* Block Body
let hi = () => {
    console.log('hi');
}

//* Concise vs Block
let apples = x => console.log(`There are ${x} apples.`);
apples(10);

let apples = x => {
    console.log(`There are ${x} apples.`);
}
apples(8);