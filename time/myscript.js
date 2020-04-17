let today = new Date();
console.log(today);
gmt = new Date(today.getTime() + today.getTimezoneOffset() * 60000);
console.log(today);

let hongkong = new Date(gmt.getTime() + 8 * 60 * 60000);
console.log(hongkong);

let newyork = new Date(gmt.getTime() - 4 * 60 * 60000);
console.log(newyork);

let california = new Date(gmt.getTime() - 7 * 60 * 60000);
console.log(california);


document.getElementById('HongKong').append(`The time in Hong Kong is ${hongkong}`);
console.log(`The time in Hong Kong is ${hongkong}`);

document.getElementById('NewYork').append(`The time in New York is ${newyork}`);
console.log(`The time in New York is ${newyork}`);

document.getElementById('California').append(`The time in California is ${california}`);
console.log(`The time in California is ${california}`);