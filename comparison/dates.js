// Dates

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate. toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log( typeof myDate);

// let myCreatedDate = new Date(2002,8,17);
// console.log(myCreatedDate.toDateString());
 
let myCreateDate = new Date("2023-01-14")
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log( Math.round(Date.now()/1000));


