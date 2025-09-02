//  Array

// const myArr = [1,2,3,4];
// const myHeros = ['shaktiman','naagraj'];

// const myArr2 = new Array(1,2,3);
// console.log(myArr[2]);


// Array methodf

// myArr.push(7);
// myArr.push(9);
// myArr.pop();
// console.log(myArr);


// myArr.unshift(0);
// myArr.shift();



// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join();
// console.log( newArr);

// Slice and Splice

// 
// const myArr = [1, 2, 3, 4];   // declare array properly

// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3); // slice does not change original array
// console.log(myn1);

// console.log("B", myArr);

// const myn2 = myArr.splice(1, 3); // splice changes original array
// console.log("C", myArr);
// console.log(myn2);

// more information about arrays


// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);


//  const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);


//  const marvel_heros = ['thor', 'ironman', 'spiderman'];
// const dc_heros = ['superman', 'batman', 'flash']; // fixed "batman," issue

// // merge them into a single flat array
// const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6], 7,8,9,[1,4,5],[7,8,9]]
console.log(another_array.flat(Infinity));

console.log(Array.isArray("bablu"));
console.log(Array.from("bablu"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));



