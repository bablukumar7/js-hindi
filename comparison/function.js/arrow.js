const user = {
  username: "bablu",
  price:999,

  welcomeMessage: function(){
    console.log(`${this.username}, welcome to the website`);
   // console.log(this);
    
    
  }
}
// user.welcomeMessage()
// user.username = "karn"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//   let username = "bablu"
//   console.log(this);
  
// }
// chai()

// function chai(){
//   let username = "bablu"
//   console.log(this.username);
  
// }
// chai() 

const chai = () =>{
  let username = "bablu"
  console.log(this);
  
}
chai()