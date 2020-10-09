let myData = {
    fName: 'Nick',       
    lName: 'Smolen',
    houseNumber: 14457,
    street: 'Allison Drive',       
    city: 'Carmel',
    state: 'IN',
    zipcode: 46033,
};
console.log(`${myData.fName} ${myData.lName}, ${myData.houseNumber} ${myData.street}, ${myData.city}, ${myData.state} ${myData.zipcode}`);


let sent = 'This sentence will be split into individual parts';
// let re = /:\s|,\s/;
let ar = sent.split(' ');
console.log(ar);
