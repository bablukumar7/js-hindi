// const tinderUser = new Object() this is singleten object
// console.log(tinderUser);

const tinderUser = {} // this is not singleten  object

tinderUser.id = "123abc";
tinderUser.name = "bablu kumar"
tinderUser.islLoggedIn = false;
tinderUser.age = 18;
tinderUser.email = "bablutechnical.com"
//console.log(tinderUser);

 const regularUser = {
  email: "bablukumar.com",
  fullname: {
    userfullname:{
      firstname: "bablu",
      lastname: "kumar"
    }
  }
 }
// console.log(regularUser.fullname.userfullname.firstname);
 
 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}
 const obj3 = {5: "a", 6: "b"}
// const newobj = Object.assign({}, obj1,obj2,obj3)
const newobj = {...obj1,...obj2,...obj3}
//console.log( newobj);
 
// const user = [
//   {
//   id: 1,
//   name: "bablu",
//   email: "bablu.com"
//   },
//   {
//   id: 1,
//   name: "bablu",
//   email: "bablu.com"
//   },
//   {
//   id: 1,
//   name: "bablu",
//   email: "bablu.com"
//   }
// ]
//   user[1].email
//   console.log(tinderUser);

//   console.log(Object.keys(tinderUser));
//   console.log(Object.values(tinderUser));
//   console.log(Object.entries(tinderUser));
//   console.log(tinderUser.hasOwnProperty("name"));


// Destructuring in object

const course = {
  coureseName:"js hindi",
  price:999,
  courseInstructor:"bablu kumar",

}
console.log(course.price);

const {courseInstructor: karanKumar} = course
//console.log(courseInstructor);
console.log(karanKumar);





  
  