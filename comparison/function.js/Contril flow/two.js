// const score = 200
// const power = "fly"

// if(score > 100){
//   console.log(`power is : ${power}`);
  
// }


const balance = 1000

if(balance > 500)  console.log("test1") , console.log("test2");

const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if(userLoggedIn && debitCard){
  console.log("Allow to buy course")
}

if(userLoggedInFromGoogle || userLoggedInFromEmail){
  console.log("user logged in");
  
}