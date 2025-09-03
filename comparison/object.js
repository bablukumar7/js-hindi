// object literals
const mysym = Symbol("key1");

const jsUser = {
  name: "Bablu kumar",
  "full name": "karan kumar",
  age: 18,
  [mysym]: "mykey1",
  location: "Ludhiana",
  email: "bablukumar68900@gmail.com",
  isLoggedIn: false,
  lastLogginDays: ["monday", "Saturday"]
};

// Accessing properties
console.log(jsUser.email);
console.log(jsUser["age"]);
console.log(jsUser["full name"]);
console.log(jsUser[mysym]);

// Updating email before freezing
jsUser.email = "bablutechnical.com";

// Adding methods BEFORE freezing
jsUser.greeting = function() {
  console.log("hello js user");
};

jsUser.greetingTwo = function() {
  console.log(`hello js user, ${this.name}`);
};

// Freeze object (no further modifications allowed)
Object.freeze(jsUser);

// Trying to update (won’t work now)
jsUser.email = "babluthaoa.com";  

// Calling methods
jsUser.greeting();      
jsUser.greetingTwo();
