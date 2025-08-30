const name = 'Bablu';
const repoCount = 50;
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('bablukum-a-r')
console.log(gameName);
console.log(gameName.length);
console.log(gameName. toUpperCase());
console.log(gameName. charAt(3));
console.log(gameName. indexOf('u'));

const newString = gameName. substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-10,5);
console.log(anotherString);

const newStringOne = "  bablu  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://bablu.com/learn%20kumar"
console.log(url.replace('%20','-'));

console.log(url.includes('kumar'));

console.log(gameName.split('-'));

