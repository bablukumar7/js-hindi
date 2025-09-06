// let a = 10;
// var b = 20;
// const c = 30;

//console.log(a,b,c);
let a = 500;

if(true){
  let a = 10;
var b = 20;
const c = 30;
console.log("inner value" , a);


}
// console.log(a);
// console.log(b);
// console.log(b);
// console.log(a);



function one(){
  const username = "bablu";

  function two(){
    const website = "youtube.com";
    console.log(username);
    
  }
  two()
} 
one()


 if(true){

  const username = "bablu"
  if(username === "bablu"){
    const website = " youtube.com"
    console.log(username  +  website);
    
  } 
  
 }


console.log(one(5))

 function one(num){
  return num +1;

 }


 console.log(addTwo(8))
 
 const addTwo = function(num){
  return num+2;
 }

 

 