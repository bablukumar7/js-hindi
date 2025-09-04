// function

// function bablu(){
//   console.log("hello bablu");
//   console.log("hello bablu");
//   console.log("hello bablu");
//   console.log("hello bablu");
  
// }
// bablu()


function addTwoNumber(num1,num2){
  // let result = num1+num2
  // return result
  return num1+num2
}
const result = addTwoNumber(5,7)
// console.log("the result is" , result);


function loginUserMessage(username = "samy"){
  if(!username){
    console.log("please enter valid user name");
    return
    
  }
  return `${username} just logged in`

}

//onsole.log(loginUserMessage(""));
//console.log(loginUserMessage());

function calculateCartPrice( val1,val2,...num1){
  return num1

}
//onsole.log(calculateCartPrice(100,200,300,400,500));

 const user = {
  username:"bablu",
  price:999

}
function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
  
}
//handleObject(user)
handleObject({
  username: "sam",
  price:19999
})


const newArray = [100,200,300,400,500]
function handleArray(anyArray){
  return anyArray[3]
}
console.log(handleArray(newArray));
